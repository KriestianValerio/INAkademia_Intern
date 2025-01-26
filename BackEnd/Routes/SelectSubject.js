const express = require("express");
const router = express.Router();
const Response = require("../utils/response");
const { selectSubjectBodyValidation } = require("../utils/validationSchema");
const Users = require("../Models/UserSchema");
const SelectedSubjects = require("../Models/SelectedSubjects");
const Subject = require("../Models/Subject");
const Session = require("../Models/SessionSchedules");

router.get("/", async (req, res) => {
  try {
    const selected_subject = await SelectedSubjects.find({
      userId: req.user._id,
    });

    const new_data = await Promise.all(
      selected_subject.map(async (el) => {
        const res = await Subject.findOne({
          _id: el.subjectId,
        });

        return { ...el.toObject(), subject: res };
      }),
    );

    return Response({
      res: res,
      code: 200,
      data: {
        selected_subject: new_data,
      },
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("req", req.body);
    const { error } = selectSubjectBodyValidation(req.body);
    if (error)
      return Response({
        res: res,
        code: 400,
        data: error.details[0].message,
      });

    const user = await Users.findOne({
      _id: req.user._id,
    });

    if (user) {
      const check_subject = await Subject.findOne({
        _id: req.body.subjectId,
      });

      const check_duplicate = await SelectedSubjects.findOne({
        userId: user._id,
        subjectId: check_subject._id,
      });

      if (check_duplicate)
        return Response({
          res: res,
          code: 400,
          detail_message: `Pelajaran ${check_subject.title} sudah dipilih.`,
        });

      if (!check_subject)
        return Response({
          res: res,
          code: 404,
          detail_message: "Subject not found.",
        });

      const save_selected = new SelectedSubjects({
        userId: user._id,
        subjectId: check_subject._id,
      });

      await save_selected.save();

      const get_all = await SelectedSubjects.find({
        userId: user._id,
      });

      const new_data = await Promise.all(
        get_all.map(async (el) => {
          const res = await Subject.findOne({
            _id: el.subjectId,
          });

          return { ...el.toObject(), subject: res };
        }),
      );

      return Response({
        res: res,
        code: 201,
        data: {
          selected_subject: new_data,
        },
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
    return Response({ res: res, code: 500 });
  }
});

router.delete("/", async (req, res) => {
  try {
    const subjectId = req.query.id;

    const user = await Users.findOne({
      _id: req.user._id,
    });

    if (user) {
      const check_subject = await Subject.findOne({
        _id: subjectId,
      });

      if (!check_subject)
        return Response({
          res: res,
          code: 404,
          detail_message: "Subject not found.",
        });

      const update_selected = await SelectedSubjects.deleteOne({
        userId: user._id,
        subjectId: subjectId,
      });

      if (!update_selected)
        return Response({
          res: res,
          code: 404,
          detail_message: "Selected Subject not found.",
        });

      return Response({
        res: res,
        code: 201,
        detail_message: "deleted success",
      });
    } else {
      return Response({
        res: res,
        code: 404,
        detail_message: "User not found.",
      });
    }
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

router.get("/other_session", async (req, res) => {
  try {
    const subjectId = req.query.id;
    const data = await Session.find({
      subjectId: subjectId,
    });

    const with_subject = await Promise.all(
      data.map(async (el) => {
        const res = await Subject.findOne({
          _id: el.subjectId,
        });

        const user_res = await Users.findOne({
          _id: el.userId,
        }).select({
          detailUser: 0,
          password: 0,
          email: 0,
        });

        return { ...el.toObject(), subject: res, tutor: user_res };
      }),
    );

    return Response({
      res: res,
      code: 200,
      data: {
        other_session: with_subject,
      },
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
