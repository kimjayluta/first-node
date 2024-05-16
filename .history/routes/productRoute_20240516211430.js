const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();
const {
	getAllProducts,
	getSpecificProduct,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/productController.js");

router.get("/", getAllProducts);
router.get("/:id", getSpecificProduct);
router.get("/", createProduct);
router.get("/:id", updateProduct);
router.get("/:id", deleteProduct);

module.exports = router;
