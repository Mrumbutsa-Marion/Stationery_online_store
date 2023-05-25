

var address = document.getElementById("delivery");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  address.style.display = "block";
}
span.onclick = function() {
  address.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == address) {
    address.style.display = "none";
  }
}

