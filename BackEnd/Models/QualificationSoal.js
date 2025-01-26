const { mongoose, Schema } = require("mongoose");

const QualificationSoal = mongoose.Schema(
  {
    subjectId: {
      type: Schema.ObjectId,
      required: true,
    },
    subject_title: String,
    description: String,
    file: String,
    time_limit: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("QualificationSoal", QualificationSoal);
