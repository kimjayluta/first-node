const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const productRoute = require("./routes/productRoute.js");
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
	res.status(200).json({ message: "Hey!!" });
});
// Database conection
mongoose
	.connect(
		"mongodb+srv://kimjayluta0721:KnGI8QPtyFOXa7qk@backenddb.oonkgtv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
	)
	.then(() => {
		console.log("Connected!");
		// To test server
		// app.listen(3000, () => {
		// 	console.log("Hey! Port 3000");
		// });
	})
	.catch(() => {
		console.log("Connection Failed!");
	});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
