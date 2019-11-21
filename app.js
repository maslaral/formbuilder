var express = require("express");

var app = express();
var expressHandlebars = require("express-handlebars").create({
  defaultLayout: "main"
});
var Handlebars = require("handlebars");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

app.engine("handlebars", expressHandlebars.engine);
app.set("view engine", "handlebars");
app.set("port", 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var forms = [];
var completedForms = [];

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/forms", function (req, res) {
  res.render("forms", { forms: forms });
});

app.get("/forms/new", function (req, res) {
  res.render("admin");
});

app.post("/forms", upload.fields([]), function (req, res) {
  var position = forms.length;
  forms.push(req.body);
  forms[position].id = position;
  res.redirect("/forms");
});

app.get("/forms/view", function (req, res) {
  var id = req.query.id;
  var formItem = forms[id];
  // console.log(formItem);
  res.render("view", { formItem: JSON.stringify(formItem) });
});

app.listen(app.get("port"), function () {
  console.log("Express started on http://localhost:" + app.get("port") + ".");
});

// Handlebar Helper Functions
// Handlebars.registerHelper("print_list", function () {
//  return this.name;
// })
