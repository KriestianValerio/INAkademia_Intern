const express = require("express");
const router = express.Router();
const { upload, saveUploadFile } = require("../../utils/helpers/UploadFile");
const Users = require("../../Models/UserSchema");
const RequestMateri = require("../../Models/RequestMateri");
const UpDownVote = require("../../Models/UpDownVote");
const Subject = require("../../Models/Subject");

async function UpDownVoteHelper(requestMateriId, userId, type_vote) {
  const user = await Users.findOne({
    _id: userId,
  });

  if (!user) {
    return { response: false, data: null };
  }

  const materi = await RequestMateri.findOne({
    _id: requestMateriId,
  });

  if (materi) {
    let upvote_in = false;
    let downvote_in = false;
    let check_user = await UpDownVote.findOne({
      userId: user._id,
      requestMateriId: materi._id,
    });

    if (type_vote === "upvote") {
      upvote_in = (check_user?.upvote || false) === true ? false : true;
      downvote_in = false;
    } else {
      upvote_in = false;
      downvote_in = (check_user?.downvote || false) === true ? false : true;
    }

    if (check_user) {
      check_user.downvote = downvote_in;
      check_user.upvote = upvote_in;
      await check_user.save();
    } else {
      check_user = new UpDownVote({
        userId: user._id,
        requestMateriId: materi._id,
        upvote: upvote_in,
        downvote: downvote_in,
      });
      await check_user.save();
    }

    const upvote = await UpDownVote.countDocuments({
      upvote: true,
      requestMateriId: materi._id,
    });

    const downvote = await UpDownVote.countDocuments({
      downvote: true,
      requestMateriId: materi._id,
    });

    materi.count_up = upvote;
    materi.count_down = downvote;
    materi.save();

    return { response: true, data: materi };
  } else {
    return { response: false, data: null };
  }
}

module.exports = {
  UpDownVoteHelper,
};
