const express = require("express");

const Session = require("../Models/SessionSchedules");
const { upload, saveUploadFile } = require("../utils/helpers/UploadFile");
const { singleSessionBodyValidation } = require("../utils/validationSchema");
const Users = require("../Models/UserSchema");
const Response = require("../utils/response");
const Subject = require("../Models/Subject");

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const user = await Users.findOne({
      _id: req.user._id,
      role: "tutor",
    });

    if (user) {
      let start_date = "";
      let end_date = "";
      let data_series = [];
      if (req.body.sessions) {
        data_series = JSON.parse(JSON.stringify(req.body.sessions)) || [];

        if (data_series) {
          start_date = data_series[0]?.tanggal_sesi || "";
          end_date =
            data_series[req.body.sessions.length - 1]?.tanggal_sesi || "";
        }
      }

      const subject = await Subject.findOne({
        _id: user.subjectId,
      });
      let data_save = {
        userId: user._id,
        subjectId: subject._id,
        judul_seri: req.body.judul_seri,
        tanggal_sesi: req.body.tanggal_sesi,
        waktu_sesi: req.body.waktu_sesi,
        deskripsi_sesi: req.body.deskripsi_sesi,
        type_sesi: req.body.type_sesi,
        limit_sesi: req.body.limit,
        registered_count: 0,
      };

      if (req.body.type_sesi === "series") {
        data_save = {
          userId: user._id,
          subjectId: subject._id,
          judul_seri: req.body.judul_seri,
          limit_sesi: req.body.limit,
          jumlah_sesi: req.body.jumlah_sesi,
          type_sesi: req.body.type_sesi,
          deskripsi_sesi: req.body.deskripsi_sesi,
          series: data_series,
          start_date: start_date,
          end_date: end_date,
          registered_count: 0,
        };
      }

      const save = new Session(data_save);
      await save.save();
      console.log("data_save", data_save);

      if (req.file) {
        const fileUuid = await saveUploadFile(req.file);
        save.id_gambar = fileUuid;
        await save.save();
      }

      return Response({
        res: res,
        code: 201,
        detail_message: "created success",
      });
    } else {
      return Response({
        res: res,
        code: 404,
        detail_message: "User not found.",
      });
    }
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Session.find({
      userId: req.user._id,
    });

    const with_subject = await Promise.all(
      data.map(async (el) => {
        const res = await Subject.findOne({
          _id: el.subjectId,
        });

        const user_res = await Users.findOne({
          _id: el.userId,
        });

        return { ...el.toObject(), subject: res, tutor: user_res };
      }),
    );

    return Response({
      res: res,
      code: 200,
      data: {
        session: with_subject,
      },
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
