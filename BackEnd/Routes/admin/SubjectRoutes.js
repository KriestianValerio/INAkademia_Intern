const express = require("express");
const router = express.Router();
const Response = require("../../utils/response");
const {
  selectSubjectBodyValidation,
  subjectBodyValidation,
} = require("../../utils/validationSchema");
const Users = require("../../Models/UserSchema");
const SelectedSubjects = require("../../Models/SelectedSubjects");
const Subject = require("../../Models/Subject");
const {
  upload,
  saveUploadFile,
  deleteUploadFile,
} = require("../../utils/helpers/UploadFile");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return Response({
        res: res,
        code: 400,
        detail_message: "No file uploaded",
      });
    }

    const fileUuid = await saveUploadFile(req.file);
    const subject = new Subject({
      title: req.body.title,
      color: req.body.color,
      image: fileUuid,
    });

    await subject.save();

    return Response({
      res: res,
      code: 201,
      detail_message: "created success",
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

router.put("/", upload.single("image"), async (req, res) => {
  try {
    console.log("req.body.id", req.body);
    const subject = await Subject.findOne({
      _id: req.body.id,
    });

    if (!subject)
      return Response({
        res: res,
        code: 404,
        detail_message: "Subject not found.",
      });

    let fileUuid = null;
    if (req.file) {
      fileUuid = await saveUploadFile(req.file);
      // delete file sebelumnya
      await deleteUploadFile(subject.image);
    }

    subject.title = req.body.title;
    subject.color = req.body.color;
    if (fileUuid !== null) {
      subject.image = fileUuid;
    }
    subject.save();

    return Response({
      res: res,
      code: 201,
      detail_message: "updated success",
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

router.delete("/", async (req, res) => {
  try {
    const get_subject = await Subject.findOne({
      _id: req.query.id,
    });

    await deleteUploadFile(get_subject.image);

    const subject = await Subject.deleteOne({
      _id: req.query.id,
    });

    if (!subject && !get_subject)
      return Response({
        res: res,
        code: 404,
        detail_message: "Subject not found.",
      });

    return Response({
      res: res,
      code: 201,
      detail_message: "deleted success",
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
