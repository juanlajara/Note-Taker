// Dependencies
// =============================================================
var express = require("express");
var apiRoutes = require("./routes/apiRoutes.js");
var htmlRoutes = require("./routes/htmlRoutes.js");
// var path = require("path");
// var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the routes apps
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
