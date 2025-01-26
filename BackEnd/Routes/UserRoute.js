const express = require("express");
const router = express.Router();
const { registrationHelper } = require("../utils/helpers/Auth");
const Response = require("../utils/response");
const { selectSubjectBodyValidation } = require("../utils/validationSchema");
const Users = require("../Models/UserSchema");
const SelectedSubjects = require("../Models/SelectedSubjects");
const Subject = require("../Models/Subject");
const { authenticate, isStudent } = require("../middleware");
const SelectedSession = require("../Models/SelectedSession");
const Session = require("../Models/SessionSchedules");
const { parseDateTime } = require("../utils/utils");
const moment = require("moment");
const { upload } = require("../utils/helpers/UploadFile");
// untuk registrasi student

router.post("/registration", upload.single("screenshoot"), async (req, res) => {
  try {
    const registration = await registrationHelper(res, req, "student");

    return Response(registration);
  } catch (err) {
    return Response(err);
  }
});

router.post("/join", authenticate, isStudent, async (req, res) => {
  try {
    const userId = req.user._id;
    const sessionId = req.body.id;

    const user = await Users.findOne({
      _id: userId,
    });

    if (!user)
      return Response({
        res: res,
        code: 404,
        detail_message: "user not found.",
      });

    const check_selected = await SelectedSession.findOne({
      sessionId: sessionId,
    });

    if (check_selected)
      return Response({
        res: res,
        code: 400,
        detail_message: "session has been selected.",
      });

    const get_session = await Session.findOne({
      _id: sessionId,
    });

    if (!get_session)
      return Response({
        res: res,
        code: 404,
        detail_message: "session not found.",
      });
    const today = moment().format("YYYY-MM-DD");
    if (get_session.type_sesi === "single") {
      if (moment(get_session.tanggal_sesi).isBefore(today)) {
        return Response({
          res: res,
          code: 400,
          detail_message: "sesi sudah terlewat",
        });
      }
    } else {
      if (moment(get_session.start_date).isBefore(today)) {
        return Response({
          res: res,
          code: 400,
          detail_message: "sesi sudah terlewat",
        });
      }
    }

    if (get_session.registered_count >= get_session.limit_sesi) {
      return Response({
        res: res,
        code: 400,
        detail_message: "sesi sudah penuh",
      });
    }

    const save_selected = new SelectedSession({
      userId: user._id,
      sessionId: get_session._id,
      get_joined: new Date(),
    });

    await save_selected.save();

    get_session.registered_count += 1;
    await get_session.save();

    return Response({
      res: res,
      code: 201,
      detail_message: "created success",
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

router.get("/my_session", authenticate, isStudent, async (req, res) => {
  try {
    const selected_session = await SelectedSession.find({
      userId: req.user._id,
    });

    const new_data = await Promise.all(
      selected_session.map(async (el) => {
        const session = await Session.findOne({
          _id: el.sessionId,
        });

        const tutor = await Users.findOne({
          _id: session?.userId,
        }).select({
          detailUser: 0,
          password: 0,
          email: 0,
        });

        const subject = await Subject.findOne({
          _id: session?.subjectId,
        });

        return {
          ...el.toObject(),
          session: session,
          tutor: tutor,
          subject: subject,
        };
      }),
    );

    new_data.sort((a, b) => {
      const aDateTime = parseDateTime(
        a.session.tanggal_sesi,
        a.session.waktu_sesi,
      );
      const bDateTime = parseDateTime(
        b.session.tanggal_sesi,
        b.session.waktu_sesi,
      );
      return bDateTime - aDateTime;
    });

    new_data.forEach((item) => {
      item.session.series.sort((a, b) => {
        const aDateTime = parseDateTime(a.tanggal_sesi, a.waktu_sesi);
        const bDateTime = parseDateTime(b.tanggal_sesi, b.waktu_sesi);
        return bDateTime - aDateTime;
      });
    });

    return Response({
      res: res,
      code: 200,
      data: {
        my_session: new_data,
      },
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
