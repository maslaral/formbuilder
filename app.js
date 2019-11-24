var express = require("express");
var app = express();
var expressHandlebars = require("express-handlebars").create({
  defaultLayout: "main"
});
var Handlebars = require("handlebars");
var bodyParser = require("body-parser");
var fs = require("fs");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

app.engine("handlebars", expressHandlebars.engine);
app.set("view engine", "handlebars");
app.set("port", 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("style"));

// example data to populate the application
var forms = [
  {
    name: "Media Reviews",
    desc: "Content intake form for product media reviews.",
    id: 0,
    inputs: {
      modelNumbers: "Model Numbers",
      publication: "Publication",
      title: "Title",
      body: "Body",
      linkURL: "Link URL"
    }
  },
  {
    name: "Video Overviews",
    desc: "Content intake form for video overviews.",
    id: 1,
    inputs: {
      videoTitle: "Video Title",
      bodyCopy: "Body Copy",
      videoURL: "Video URL"
    }
  },
  {
    name: "Product Features",
    desc: "Content intake form for product features.",
    id: 2,
    inputs: {
      type: "Type",
      tItle: "TItle",
      body: "Body",
      linkName: "Link Name",
      linkURL: "Link URL"
    }
  }
];

var completedForms = [
  {
    name: "Media Reviews",
    desc: "Content intake form for product media reviews.",
    time: "Sat Nov 23 2019 15:44:36 GMT-0600 (CST)",
    id: 0,
    inputs: {
      modelNumbers: "52241",
      publication: "Cycling Tips",
      title: "A fast and fun ride",
      body:
        "The new Domane is better than ever, with improved handling and increased comfort",
      linkURL: "cyclingtips.com"
    }
  },
  {
    name: "Video Overviews",
    desc: "Content intake form for video overviews.",
    time: "Sat Nov 23 2019 15:46:33 GMT-0600 (CST)",
    id: 1,
    inputs: {
      videoTitle: "How To: Change Your Tires",
      bodyCopy:
        "Changing your bike tires is a regular part of maintaining your bike. Here we provide you with a video that explains the entire process.",
      videoURL: "www.youtube.com"
    }
  }
];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/forms", function(req, res) {
  res.render("forms", { forms: forms });
});

app.get("/forms/new", function(req, res) {
  res.render("admin");
});

app.post("/forms", upload.fields([]), function(req, res) {
  var position = forms.length;
  forms.push(req.body);
  forms[position].id = position;
  res.redirect("forms");
});

app.get("/forms/view", function(req, res) {
  var id = req.query.id;
  var formItem = forms[id];
  res.render("view", { formItem: JSON.stringify(formItem) });
});

app.post("/forms/view", upload.fields([]), function(req, res) {
  var position = completedForms.length;
  completedForms.push(req.body);
  completedForms[position].id = position;
  res.redirect("../forms");
});

app.get("/forms/completed", function(req, res) {
  res.render("completed", { completedForms: completedForms });
});

app.get("/forms/completed/view_completed", function(req, res) {
  var id = req.query.id;
  var formItem = completedForms[id];
  res.render("view_completed", { formItem: JSON.stringify(formItem) });
});

app.post("/forms/completed/view_completed", function(req, res) {
  fs.writeFileSync("export.txt", JSON.stringify(req.body), err => {
    if (err) throw err;
  });
  res.download("export.txt");
});

app.listen(app.get("port"), function() {
  console.log("Express started on http://localhost:" + app.get("port") + ".");
});

// Handlebar Helper Functions
// Handlebars.registerHelper("print_list", function () {
//  return this.name;
// })
