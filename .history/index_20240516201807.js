const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");

const app = express();

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from node API Updated!");
});

// Sample of Retrieving all data from DB
app.get("/api/products", async (req, res) => {
	try {
		const product = await Product.find(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Retrieving specific Data
app.get("/api/products/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Sample API for Sending Data
app.post("/api/products", async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Sample API for Updating Data
app.put("/api/products/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);

		if (!product) {
			return res.status(400).json({ message: "Product not found" });
		}
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Database Connection Example
mongoose
	.connect(
		"mongodb+srv://kimjayluta0721:KnGI8QPtyFOXa7qk@backenddb.oonkgtv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
	)
	.then(() => {
		console.log("Connected!");
		app.listen(3000, () => {
			console.log("Hey! Port 3000");
		});
	})
	.catch(() => {
		console.log("Connection Failed!");
	});
