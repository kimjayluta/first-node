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
router.post("/submit", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
