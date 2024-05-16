const Product = require("../models/productModel.js");

const getProducts = async (req, res) => {
	try {
		const product = await Product.find(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getProducts,
};
