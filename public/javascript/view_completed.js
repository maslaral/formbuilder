function displayForm(viewForm) {
  var inputs = viewForm.inputs;

  // set header, caption, and timestamp values
  document.getElementById("header").innerHTML = viewForm.name;
  document.getElementById("caption").innerHTML = viewForm.desc;
  document.getElementById("time").innerHTML = "Completed on " + viewForm.time;

  // create the inputs - set required attributes
  for (var field in inputs) {
    var displayInput = document.createElement("textarea");
    displayInput.setAttribute("class", "form-control");
    displayInput.setAttribute("name", field);
    displayInput.value = inputs[field];
    displayInput.setAttribute("rows", "1");
    displayInput.setAttribute("readonly", "readonly");

    // create labels for the input
    var newLabel = document.createElement("label");
    newLabel.htmlFor = field;
    newLabel.innerHTML = field;

    // add inputs to the html file
    formCompleted.appendChild(newLabel);
    formCompleted.appendChild(displayInput);
  }
}
