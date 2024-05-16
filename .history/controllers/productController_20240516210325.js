const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
	try {
		const product = await Product.find(req.body);
		const response = res.status(200).json(product);
		return response;
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAllProducts,
};
