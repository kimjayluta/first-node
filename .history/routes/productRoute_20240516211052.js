const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();
const {
	getAllProducts,
	getSpecificProduct,
} = require("../controllers/productController.js");

router.get("/", getAllProducts);
router.get("/:id", getSpecificProduct);

module.exports = router;
