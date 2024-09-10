// start
console.log('My JavaScript is alive!');

// Initialize the Google Translate element when the page loads.
// Google Translate. (n.d.). Google Translate Element. [JavaScript]. https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// Add an event listener when the DOM content is loaded.
document.addEventListener("DOMContentLoaded", function() {
  const translateButton = document.getElementById("translate_button");
  const googleTranslateElement = document.getElementById("google_translate_element");

  // Display the Google Translate element when the Translate button is clicked.
  translateButton.addEventListener("click", function () {
    // If the Google Translate element is hidden, show it; otherwise, hide it
    if (googleTranslateElement.style.display === "none") {
      googleTranslateElement.style.display = "block";
      console.log("Button works");
    } else {
      googleTranslateElement.style.display = "none";
    }
  });
});


