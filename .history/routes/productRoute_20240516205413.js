const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();
const { getProducts } = require("../controllers/productController");

router.get("/api/products", () => {
	getProducts;
});
