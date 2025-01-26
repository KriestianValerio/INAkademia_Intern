const { mongoose, Schema } = require("mongoose");

const Subject = mongoose.Schema(
  {
    title: String,
    color: String,
    image: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Subject", Subject);
