const express = require("express");
const app = express();

app.listen(3000, () => {
	console.log("Hey! Port 3000");
});

app.get("/", (req, res) => {
	res.send("Hello from node API Updated!");
});
