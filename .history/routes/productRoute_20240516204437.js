const express = require("express");
const mongoose = require("mongoose");
const { getProducts } = require("../controllers/productController");

router.get("/", () => {
	getProducts;
});
