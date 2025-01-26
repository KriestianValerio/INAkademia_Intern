const express = require("express");
const router = express.Router();
const SubjectRoutes = require("./admin/SubjectRoutes");
const Subject = require("../Models/Subject");
const Response = require("../utils/response");
const { authenticate } = require("../middleware");
const Session = require("../Models/SessionSchedules");
const Users = require("../Models/UserSchema");
const SelectedSession = require("../Models/SelectedSession");
const moment = require("moment");

router.get("/subject", async (req, res) => {
  try {
    const subject = await Subject.find({});

    return Response({
      res: res,
      code: 200,
      data: {
        subject: subject,
      },
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

router.get("/session/detail", authenticate, async (req, res) => {
  try {
    const id = req.query.id;

    const sessions = await Session.findOne({
      _id: id,
    });

    const selected = await SelectedSession.find({
      userId: req.user._id,
    });

    if (!sessions)
      return Response({
        res: res,
        code: 404,
        detail_message: "sesi tidak ditemukan.",
      });

    const today = moment().format("YYYY-MM-DD");

    if (selected.length === 0) {
      if (sessions.type_sesi === "single") {
        if (moment(sessions.tanggal_sesi).isBefore(today)) {
          return Response({
            res: res,
            code: 400,
            detail_message: "sesi sudah terlewat",
          });
        }
      } else {
        if (moment(sessions.start_date).isBefore(today)) {
          return Response({
            res: res,
            code: 400,
            detail_message: "sesi sudah terlewat",
          });
        }
      }

      if (sessions.registered_count >= sessions.limit_sesi) {
        return Response({
          res: res,
          code: 400,
          detail_message: "sesi sudah penuh",
        });
      }
    }

    const tutor = await Users.findOne({
      _id: sessions.userId,
      role: "tutor",
    }).select({
      password: 0,
      email: 0,
    });

    const subject = await Subject.findOne({
      _id: sessions.subjectId,
    });

    return Response({
      res: res,
      code: 200,
      data: {
        sessions: {
          data: {
            ...sessions.toObject(),
            tutor: tutor,
            subject: subject,
          },
          selected: selected,
        },
      },
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
