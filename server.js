var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/survey", function(req, res) {
   res.end(firstValue +" + " + secondValue + " = " + solution);

});



//Start listening for activity
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
