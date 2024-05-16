const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
	console.log("Hey! Port 3000");
});

app.get("/", (req, res) => {
	res.send("Hello from node API Updated!");
});

mongoose
	.connect(
		"mongodb+srv://kimjayluta0721:KnGI8QPtyFOXa7qk@backenddb.oonkgtv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
	)
	.then(() => {
		console.log("Connected!");
	})
	.catch(() => {
		console.log("Cannot connect to the Database!");
	});
