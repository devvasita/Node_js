const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  products: [
    {
      products_id: String,
      quantity: Number,
    },
  ],
  total_amount: {
    type: Number,
    required: true,
  },
  order_date: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("orders", orderSchema);
