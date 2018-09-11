// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// serves our static content
app.use(express.static(process.cwd() + "/app/public"));

// set port variable for use on deployed webpage or on localhost 8080
var PORT = process.env.PORT || 8080;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require function for our api and html route files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// initiate the port listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
  
  

  