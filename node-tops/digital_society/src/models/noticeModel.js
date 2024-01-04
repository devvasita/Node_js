const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      //   required: true,
    },
    description: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Notice", noticeSchema);
