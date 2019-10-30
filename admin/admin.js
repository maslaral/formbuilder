var addButton = document.querySelector("#add");
var removeButton = document.querySelector("#remove");
var formBuilder = document.querySelector("#formBuilder");
var fieldNumber = 1;

addButton.addEventListener("click", function() {
  var descr = document.createTextNode("Field " + fieldNumber++ + ": ");
  formBuilder.appendChild(descr);

  var input = document.createElement("input");
  input.type = "text";
  input.name = "Field" + fieldNumber;
  formBuilder.appendChild(input);
  formBuilder.appendChild(document.createElement("br"));
});