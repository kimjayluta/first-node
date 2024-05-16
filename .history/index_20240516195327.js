const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from node API Updated!");
});

app.post("/api/products", (req, res) => {
	try {
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
