const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: Number,
  },
  product_id: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

module.exports = new mongoose.model("reviews", reviewSchema);
