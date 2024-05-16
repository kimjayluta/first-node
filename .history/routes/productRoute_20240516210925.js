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

// router.get("/", async (req, res) => {
// 	try {
// 		const product = await Product.find(req.body);
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });
