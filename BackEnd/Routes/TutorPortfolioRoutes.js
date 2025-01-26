const express = require("express");
const router = express.Router();
const Response = require("../utils/response");
const {
  upload,
  saveUploadFile,
  deleteUploadFile,
} = require("../utils/helpers/UploadFile");
const { tutorPortfolioBodyValidation } = require("../utils/validationSchema");
const TutorPortfolio = require("../Models/TutorPortfolio");
const { isAdmin, authenticate } = require("../middleware");

router.get("/", async (req, res) => {
  const id = req.query?.id || "";

  if (id.length !== 0) {
    const get_port = await TutorPortfolio.findOne({
      _id: id,
    });

    if (!get_port) {
      return Response({
        res: res,
        code: 404,
        detail_message: "Portfolio tidak ditemukan",
      });
    }

    return Response({
      res: res,
      code: 200,
      data: {
        portfolio: get_port,
      },
    });
  } else {
    const get_all = await TutorPortfolio.find({});

    return Response({
      res: res,
      code: 200,
      data: {
        portfolio: get_all,
      },
    });
  }
});

router.post(
  "/",
  authenticate,
  isAdmin,
  upload.single("image"),
  async (req, res) => {
    if (!req.file) {
      return Response({
        res: res,
        code: 400,
        detail_message: "No file uploaded",
      });
    }

    try {
      const namaDepan = req.body.namaDepan;
      const namaBelakang = req.body.namaBelakang;
      const short_description = req.body.short_description;
      const title = req.body.title;
      const description = req.body.description;
      const image = req.file;
      const video = req.body.video;

      const fileUuid = await saveUploadFile(image);

      const save_port = new TutorPortfolio({
        namaDepan: namaDepan,
        namaBelakang: namaBelakang,
        short_description: short_description,
        title: title,
        description: description,
        image: fileUuid,
        video: video,
      });

      await save_port.save();

      return Response({
        res: res,
        code: 201,
        detail_message: "Portfolio saved",
      });
    } catch (err) {
      return Response({ res: res, code: 500, detail_message: err });
    }
  },
);

router.put(
  "/",
  authenticate,
  isAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const namaDepan = req.body.namaDepan;
      const namaBelakang = req.body.namaBelakang;
      const short_description = req.body.short_description;
      const title = req.body.title;
      const description = req.body.description;
      const image = req.file;
      const video = req.body.video;

      const portfolio = await TutorPortfolio.findOne({
        _id: req.body.id,
      });

      if (!portfolio)
        return Response({
          res: res,
          code: 404,
          detail_message: "Portfolio tidak ditemukan.",
        });

      let fileUuid = null;

      console.log("req.file", req.file);
      if (req.file !== undefined) {
        fileUuid = await saveUploadFile(image);
        await deleteUploadFile(portfolio.image);
      }

      portfolio.namaDepan = namaDepan;
      portfolio.namaBelakang = namaBelakang;
      portfolio.short_description = short_description;
      portfolio.title = title;
      portfolio.description = description;

      if (fileUuid !== null) {
        portfolio.image = fileUuid;
      }

      portfolio.video = video;
      await portfolio.save();

      return Response({
        res: res,
        code: 201,
        detail_message: "Portfolio updated",
      });
    } catch (err) {
      console.log(err);
      return Response({ res: res, code: 500, detail_message: err });
    }
  },
);

router.delete("/", authenticate, isAdmin, async (req, res) => {
  try {
    const get_port = await TutorPortfolio.findOne({
      _id: req.query.id,
    });

    await deleteUploadFile(get_port.image);

    const portfolio = await TutorPortfolio.deleteOne({
      _id: req.query.id,
    });

    if (!portfolio && !get_port)
      return Response({
        res: res,
        code: 404,
        detail_message: "Portfolio tidak ditemukan.",
      });

    return Response({
      res: res,
      code: 201,
      detail_message: "deleted success",
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
