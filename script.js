var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 3000);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  if (slideIndex >= slides.length) {slideIndex = 0}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  slideIndex++;
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}









// Forms 

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

