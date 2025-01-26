const { mongoose, Schema } = require("mongoose");

const TutorPortfolio = mongoose.Schema(
  {
    namaDepan: {
      type: String,
    },
    namaBelakang: {
      type: String,
      default: "-",
    },
    short_description: {
      type: String,
      default: "-",
    },
    title: {
      type: String,
      default: "-",
    },
    description: {
      type: String,
      default: "-",
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("TutorPortfolio", TutorPortfolio);
