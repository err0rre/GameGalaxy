// start
console.log('My JavaScript is alive!');

//W3Schools. (n.d.). How TO - Slideshow. [JavaScript]. https://www.w3schools.com/howto/howto_js_slideshow.asp
// Set the initial slide index to 1 and display the first slide.
let slideIndex = 1;
showSlides(slideIndex);

// Define the interval for automatically sliding to the next
const autoSlideInterval = 5000; // 5s = 5000ms

let autoSlideTimer = setInterval(function() {
  plusSlides(1); // Calls the function to move to the next slide.
}, autoSlideInterval);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the specified slide.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove "active"
  }
  slides[slideIndex-1].style.display = "block"; // Display the current slide.
  dots[slideIndex-1].className += " active";
}



