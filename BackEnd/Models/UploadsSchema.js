const mongoose = require("mongoose");

const UploadsSchema = new mongoose.Schema(
  {
    uuid: String,
    fileName: String,
    size: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("UploadsSchema", UploadsSchema);
