function displayStatus(viewStatus) {
  var parent = document.querySelector(".row");

  if (viewStatus === 0) {
    var badge = document.createElement("span");
    badge.classList.add("badge");
    badge.classList.add("badge-secondary");
    badge.innerHTML = "New";
    document.querySelector("#status").appendChild(badge);
  }
}
