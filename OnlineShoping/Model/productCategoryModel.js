const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    categoryname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const categoryDB = new mongoose.model("productCategory", productCategorySchema);

module.exports = categoryDB;
