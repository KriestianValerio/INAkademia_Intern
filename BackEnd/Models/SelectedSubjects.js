const { mongoose, Schema } = require("mongoose");

const SelectedSubjects = mongoose.Schema(
  {
    userId: {
      type: Schema.ObjectId,
      required: true,
    },
    subjectId: {
      type: Schema.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("SelectedSubjects", SelectedSubjects);
