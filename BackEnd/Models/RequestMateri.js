const { mongoose, Schema } = require("mongoose");

const RequestMateri = mongoose.Schema(
  {
    userId: {
      type: Schema.ObjectId,
      required: true,
    },
    subjectId: {
      type: Schema.ObjectId,
      required: true,
    },
    judul: {
      type: String,
    },
    mapel: {
      type: String,
      default: "-",
    },
    jenjangKelas: {
      type: String,
      default: "-",
    },
    kurikulum: {
      type: String,
      default: "-",
    },
    gambarMateri: {
      type: String,
      required: true,
    },
    count_up: {
      type: Number,
      default: 0,
    },
    count_down: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["accepted", "declined", "pending"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("RequestMateri", RequestMateri);
