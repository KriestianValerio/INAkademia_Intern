const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const SessionPublish = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    subjectId: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
    judul_seri: {
      type: String,
    },
    tanggal_sesi: {
      type: String,
    },
    waktu_sesi: {
      type: String,
    },
    deskripsi_sesi: {
      type: String,
    },
    limit_sesi: {
      type: String,
    },
    jumlah_sesi: {
      type: Number,
    },
    registered_count: {
      type: Number,
    },
    type_sesi: {
      type: String,
      enum: ["single", "series"],
    },
    start_date: String,
    end_date: String,
    series: {
      type: Array,
    },
    id_gambar: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Session = mongoose.model("series", SessionPublish);

module.exports = Session;
