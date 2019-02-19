// Server applet written in JavaScript, utilizing the express framework

"use strict";
// CONSTANTS
const PORT = 4000;
const express = require("express");
//const queries = require('./queries');

/* APIS (ROUTES) */
const app = express();
app.get("/", function(req, res) {
  res.send("Dashboard Coming Soon!");
});

// ENDPOINT TO SEE QUERY RESULT
//app.get('/testquery', queries.inductionsCount);

// SET APPLICATION TO LISTEN ON DESIRED PORT
app.listen(PORT);

// LOG TO CONSOLE
console.log("Running on http://localhost:" + PORT);