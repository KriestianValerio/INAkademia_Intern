const { mongoose, Schema } = require("mongoose");

const UsersToken = mongoose.Schema({
  userId: {
    type: Schema.ObjectId,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 86400,
  },
});

module.exports = mongoose.model("UsersToken", UsersToken);
