const { mongoose, Schema } = require("mongoose");

const UpDownVote = mongoose.Schema(
  {
    userId: {
      type: Schema.ObjectId,
      required: true,
    },
    requestMateriId: {
      type: Schema.ObjectId,
      required: true,
    },
    upvote: {
      type: Boolean,
      default: false,
    },
    downvote: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("UpDownVote", UpDownVote);
