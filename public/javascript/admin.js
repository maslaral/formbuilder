var newInputSpan = document.querySelector("#newInputs");
var button = document.querySelector("#addInput");

button.addEventListener("click", function() {
  // getting name and placeholder text
  var newInputPlaceholder = prompt("Provide a name for the new input.");
  var newInputName = camelize(newInputPlaceholder);

  // creating the new input
  var newInput = document.createElement("textarea");
  newInput.setAttribute("class", "form-control");
  newInput.setAttribute("rows", "1");
  newInput.setAttribute("name", `inputs[${newInputName}]`);
  newInput.setAttribute("placeholder", newInputPlaceholder);
  newInput.setAttribute("readonly", "readonly");
  newInput.setAttribute("value", newInputPlaceholder);
  newInputSpan.appendChild(newInput);
});

// source of function from stack overflow thread:
// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case#2970667
function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
