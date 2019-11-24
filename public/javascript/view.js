function displayForm(viewForm) {
  var inputs = viewForm.inputs;

  // set name and description
  document.getElementById("header").innerHTML = viewForm.name;
  document.getElementById("caption").innerHTML = viewForm.desc;

  // setting name inputs, hidden
  var nameField = document.createElement("textarea");
  nameField.setAttribute("class", "form-control");
  nameField.setAttribute("name", "name");
  nameField.setAttribute("type", "text");
  nameField.setAttribute("hidden", "hidden");
  nameField.value = viewForm.name;
  newFieldSpan.appendChild(nameField);

  // setting desc inputs, hidden
  var descField = document.createElement("textarea");
  descField.setAttribute("class", "form-control");
  descField.setAttribute("name", "desc");
  descField.setAttribute("type", "text");
  descField.setAttribute("hidden", "hidden");
  descField.value = viewForm.desc;
  newFieldSpan.appendChild(descField);

  var time = Date(Date.now());
  time = time.toString();

  // setting timestamp inputs, hidden
  var timeCompleted = document.createElement("textarea");
  timeCompleted.setAttribute("class", "form-control");
  timeCompleted.setAttribute("name", "time");
  timeCompleted.setAttribute("type", "text");
  timeCompleted.setAttribute("hidden", "hidden");
  timeCompleted.value = time;
  newFieldSpan.appendChild(timeCompleted);

  // create the inputs - set the required attributes
  for (var field in inputs) {
    var newField = document.createElement("textarea");
    newField.setAttribute("class", "form-control");
    newField.setAttribute("rows", "1");
    newField.setAttribute("name", `inputs[${field}]`);
    newField.setAttribute("placeholder", "Enter text input here.");
    newField.setAttribute("required", "required");

    var newLabel = document.createElement("label");
    newLabel.htmlFor = field;
    newLabel.innerHTML = field;

    // adding inputs to the html file
    newFieldSpan.appendChild(newLabel);
    newFieldSpan.appendChild(newField);
  }
}
