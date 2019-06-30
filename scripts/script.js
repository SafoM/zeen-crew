
/* Automatic Slideshow -
- Next/Previous controls not working
*/
var slideIndex = 0;
showSlides();

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slides");


  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex=1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4500);
}

/*[WORKING] SLIDESHOW SCRIPT - Manual Navigation
var slideIndex = 1;
showSlides (slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i = null;
  var slides = document.getElementsByClassName("slideshow-slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block"
}
*/
