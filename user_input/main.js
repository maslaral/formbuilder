var form = document.querySelector("form");
var button = document.querySelector("button");
var review = {};

function Review(name, body, link) {
  this.name = name;
  this.body = body;
  this.link = link;
}

button.addEventListener("click", function() {
  var name = document.querySelector("#name").value;
  var body = document.querySelector("#body").value;
  var link = document.querySelector("#link").value;

  if (name != "" && body != "" && link != "") {
    review = new Review(name, body, link);
    form.reset();
  }
});
