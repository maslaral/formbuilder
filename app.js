var express = require("express");

var app = express();
var handlebars = require("express-handlebars").create({
  defaultLayout: "main"
});
var bodyParser = require("body-parser");

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var forms = [];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/forms", function(req, res) {
  res.render("forms", { forms: forms });
});

app.get("/forms/new", function(req, res) {
  res.render("admin");
});

app.post("/forms", function(req, res) {
  var name = req.body.name;
  var desc = req.body.desc;
  var newForm = { name: name, desc: desc };
  forms.push(newForm);
  res.redirect("/forms");
});

app.listen(app.get("port"), function() {
  console.log("Express started on http://localhost:" + app.get("port") + ".");
});
