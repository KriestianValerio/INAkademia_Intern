const express = require("express");
const router = express.Router();
const Response = require("../utils/response");
const { selectSubjectBodyValidation } = require("../utils/validationSchema");
const Users = require("../Models/UserSchema");
const SelectedSubjects = require("../Models/SelectedSubjects");
const Subject = require("../Models/Subject");
const Session = require("../Models/SessionSchedules");
const {
  upload,
  saveUploadFile,
  deleteUploadFile,
} = require("../utils/helpers/UploadFile");
const QualificationSoal = require("../Models/QualificationSoal");
const { isAdmin } = require("../middleware");

router.post("/select_subject", async (req, res) => {
  try {
    const user = await Users.findOne({
      _id: req.user._id,
    });

    if (!user)
      return Response({
        res: res,
        code: 404,
        detail_message: "users not found.",
      });

    const subject = await Subject.findOne({
      _id: req.body.subject,
    });

    if (!subject)
      return Response({
        res: res,
        code: 404,
        detail_message: "subject not found.",
      });

    user.subjectId = subject._id;
    user.status = "in_qualification";
    await user.save();

    return Response({
      res: res,
      code: 201,
      detail_message: "created success",
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

router.post(
  "/create_qualification",
  upload.single("pdf"),
  isAdmin,

  async (req, res) => {
    try {
      if (!req.file)
        return Response({
          res: res,
          code: 400,
          detail_message: "file not set.",
        });

      let check_qualification = await QualificationSoal.findOne({
        subjectId: req.body.subjectId,
      });

      if (check_qualification) {
        check_qualification.subject_title = req.body.subject_title;
        check_qualification.description = req.body.description;
        const fileUuid = await saveUploadFile(req.file);
        await deleteUploadFile(check_qualification.file);
        check_qualification.file = fileUuid;
        check_qualification.time_limit = req.body.time_limit;
        await check_qualification.save();
      } else {
        const fileUuid = await saveUploadFile(req.file);
        check_qualification = new QualificationSoal({
          subjectId: req.body.subjectId,
          subject_title: req.body.subject_title,
          description: req.body.description,
          file: fileUuid,
          time_limit: req.body.time_limit,
        });
        await check_qualification.save();
      }

      return Response({
        res: res,
        code: 201,
        detail_message: "created success",
      });
    } catch (err) {
      console.log(err);
      return Response({ res: res, code: 500 });
    }
  },
);

router.get("/create_qualification", isAdmin, async (req, res) => {
  try {
    const data = await QualificationSoal.find({});

    return Response({
      res: res,
      code: 200,
      data: {
        qualification: data,
      },
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

router.get("/", async (req, res) => {
  try {
    const quali = await QualificationSoal.findOne({
      subjectId: req.query.subjectId,
    });

    if (!quali)
      return Response({
        res: res,
        code: 404,
        detail_message: "soal is not found",
      });

    return Response({
      res: res,
      code: 200,
      data: {
        qualification: quali,
      },
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

router.put("/change_status", async (req, res) => {
  try {
    const type_status = req.body.status;
    const user = await Users.findOne({
      _id: req.user._id,
    });

    if (!user)
      return Response({
        res: res,
        code: 404,
        detail_message: "user not found.",
      });

    const soal = await QualificationSoal.findOne({
      subjectId: req.body.subjectId,
    });

    if (!soal)
      return Response({
        res: res,
        code: 404,
        detail_message: "soal not found.",
      });

    user.status = "pending_qualification";
    await user.save();

    return Response({
      res: res,
      code: 201,
      detail_message: "updated success",
    });
  } catch (err) {
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
