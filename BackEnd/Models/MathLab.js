const { mongoose, Schema } = require("mongoose");

const MathLabReg = mongoose.Schema(
  {
    Nama: {
        type: String,
        required: true,
    },
    AsalSekolah: {
        type: String,
        required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    WaktuPendaftaran: {
      type: String,
      required: true,
    },
    MateriFavorit: {
      type: String,
      required: true,
    },
    PernahIkutInAkademia: {
      type: String,
      required: true,
    },
    YangPernahDiikuti: {
      type: Array,
      default: [],
    },
    Publikasi: {
      type: Array,
      default: [],
    },
    PublikasiLainnya: {
      type: String,
      default: "",
    },
    Alasan: {
      type: String,
      required: true,
    },
    Harapan: {
        type: String,
        required: true,
    },
    Pertanyaan: {
        type: String,
        required: true,
    },
    PretestTime: {
        type: String,
        default: "",
    },
    PengecualianBiaya: {
      type: Boolean,
      default: false,
    },
    TandC: {
      type: Boolean,
      default: false,
    },
    Esai: {
      type: String,
      default: "",
    },
  },
);

module.exports = mongoose.model("MathLabReg", MathLabReg);
