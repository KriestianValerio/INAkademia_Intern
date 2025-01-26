const express = require("express");
const router = express.Router();
const Response = require("../utils/response");
const { upload, saveUploadFile } = require("../utils/helpers/UploadFile");
const Users = require("../Models/UserSchema");
const RequestMateri = require("../Models/RequestMateri");
const UpDownVote = require("../Models/UpDownVote");
const Subject = require("../Models/Subject");
const { UpDownVoteHelper } = require("../utils/helpers/RequestMateriHelper");

router.post("/request", upload.single("gambarMateri"), async (req, res) => {
  if (!req.file) {
    return Response({
      res: res,
      code: 400,
      detail_message: "No file uploaded",
    });
  }
  try {
    const user = await Users.findOne({ _id: req.user._id });
    const id_subject = req.body.id;

    if (user) {
      const fileUuid = await saveUploadFile(req.file);
      const subject = await Subject.findOne({
        _id: id_subject,
      });

      if (!subject) {
        return Response({
          res: res,
          code: 404,
          detail_message: "Subject is not found",
        });
        return;
      }

      const save_materi = new RequestMateri({
        userId: user._id,
        subjectId: subject._id,
        judul: req.body?.judul || "-",
        mapel: req.body?.mapel || "-",
        jenjangKelas: req.body?.jenjangKelas || "-",
        kurikulum: req.body?.kurikulum || "-",
        gambarMateri: fileUuid,
      });

      await save_materi.save();

      const vote_func = await UpDownVoteHelper(
        save_materi._id,
        user._id,
        "upvote",
      );

      return Response({
        res: res,
        code: 201,
        detail_message: "Materi saved",
      });
    } else {
      return Response({
        res: res,
        code: 404,
        detail_message: "Users is not found",
      });
    }
  } catch (err) {
    return Response({ res: res, code: 500, detail_message: err });
  }
});

router.get("/list", async (req, res) => {
  try {
    const filter = req?.query?.filter || "most_upvote";
    let sortCondition;
    const id_subject = req.query.id;

    switch (filter) {
      case "most_upvote":
        sortCondition = { count_up: -1 };
        break;
      case "most_downvote":
        sortCondition = { count_down: -1 };
        break;
      case "less_upvote":
        sortCondition = { count_up: 1 };
        break;
      case "less_downvote":
        sortCondition = { count_down: 1 };
        break;
      default:
        sortCondition = { count_up: -1 };
    }

    // const materi = await RequestMateri.find({
    //   subjectId: id_subject,
    // }).sort(sortCondition);
    const materi = await RequestMateri.find({
      subjectId: id_subject,
    }).sort(sortCondition);

    return Response({
      res: res,
      code: 200,
      data: {
        materi: materi,
      },
    });
  } catch (err) {
    return Response({ res: res, code: 500, detail_message: err });
  }
});

router.post("/updownvote", async (req, res) => {
  try {
    const requestMateriId = req.body.id;
    const userId = req.user._id;
    const type_vote = req.body.type_vote;

    const vote_func = await UpDownVoteHelper(
      requestMateriId,
      userId,
      type_vote,
    );

    if (vote_func.response) {
      return Response({
        res: res,
        code: 201,
        data: vote_func.data,
        detail_message: "Successfully voted",
      });
    } else {
      return Response({
        res: res,
        code: 404,
        detail_message: "Materi is not found",
      });
    }
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500, detail_message: err });
  }
});

router.put("/accept_request", async (req, res) => {
  try {
    const requestMateriId = req.body.id;
    const status_request = req.body.status_request; // "accepted", "declined", "pending"

    const user = await Users.findOne({
      _id: req.user._id,
    });

    if (!user) {
      return Response({
        res: res,
        code: 404,
        detail_message: "Users is not found",
      });
    }

    const materi = await RequestMateri.findOne({
      _id: requestMateriId,
    });

    if (materi) {
      materi.status = status_request;
      await materi.save();

      return Response({
        res: res,
        code: 201,
        data: materi,
        detail_message: "Successfully updated",
      });
    } else {
      return Response({
        res: res,
        code: 404,
        detail_message: "Materi is not found",
      });
    }
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500, detail_message: err });
  }
});

module.exports = router;
