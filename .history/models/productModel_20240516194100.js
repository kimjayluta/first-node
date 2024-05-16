const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter Product name!"],
	},
	quantity: {
		type: Number,
		required: [true, "Please enter Product Quantiy!"],
		default: 0,
	},
	price: {
		type: Number,
		required: [true, "Please enter Product Quantiy!"],
		default: 0,
	},
});
