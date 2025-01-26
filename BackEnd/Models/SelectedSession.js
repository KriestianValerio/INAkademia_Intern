const { mongoose, Schema } = require("mongoose");

const SelectedSession = mongoose.Schema(
  {
    userId: {
      type: Schema.ObjectId,
      required: true,
    },
    sessionId: {
      type: Schema.ObjectId,
      required: true,
    },
    date_joined: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("SelectedSession", SelectedSession);
