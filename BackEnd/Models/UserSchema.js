const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const detailUserSchema = new mongoose.Schema({
  asalSekolah: {
    type: String,
    required: false,
    default: "",
  },
  tingkat: {
    type: String,
    required: false,
    default: "",
  },
  asalDaerah: {
    type: String,
    required: false,
    default: "",
  },
  programDiikuti: {
    type: [String],
  },
  mengetahuiDari: {
    type: [String],
  },
  termsCondition: {
    type: String,
    required: true,
    default: false,
  },
  nomorWa: {
    type: String,
    required: true,
  },
  buktiFollow: {
    type: String,
  },
});

const UsersSchema = new mongoose.Schema(
  {
    subjectId: {
      type: String,
      default: "",
    },
    namaDepan: {
      type: String,
      required: true,
    },
    namaBelakang: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "tutor", "student"],
    },
    status: {
      type: String,
      enum: [
        "student",
        "in_qualification",
        "pending_qualification",
        "done",
        "rejected",
      ],
      default: "student",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    detailUser: {
      type: detailUserSchema,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
