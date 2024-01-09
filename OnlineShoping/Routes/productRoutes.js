const express = require("express");
const router = new express.Router();
const ProductController = require("../Controller/productController");

router.get("/home", ProductController.getHomepage);
router.post("/addProduct", ProductController.addProducts);

router.get("/edit/:id", ProductController.getEditPage);
router.post("/updateProduct", ProductController.updateProduct);

router.get("/delete/:id", ProductController.deleteProduct);

module.exports = router;
