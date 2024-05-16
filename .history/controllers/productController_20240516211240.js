const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
	try {
		const product = await Product.find(req.body);
		response = res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getSpecificProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);

		// Checks if the product exist
		if (!product) {
			return res.status(400).json({ message: "Product not found" });
		}
		// Return updated Product
		const updatedProduct = await Product.findById(id);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAllProducts,
	getSpecificProduct,
	createProduct,
	updateProduct,
};
