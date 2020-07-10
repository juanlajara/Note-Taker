// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
var fs = require("fs");
// These data sources hold information on notes.
// ===============================================================================
var notesData = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	app.get("/api/notes", function (req, res) {
		console.log(req);
	});

	app.post("/api/notes", function (req, res) {
		notesData.push(req.body);
	});

	app.post("/api/notes/:id", function (req, res) {
		var id = req.body.id;
		notesData = notesData.filter((e) => !e.id == id);
	});
};
