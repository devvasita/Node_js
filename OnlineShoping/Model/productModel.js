const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productsDB = new mongoose.model("products", productSchema);

module.exports = productsDB;
