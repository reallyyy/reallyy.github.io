var bgm = [
  "images/bgimages/alina-perekatenkova-b4YiCHrq5BA-unsplash.jpg",
  "images/bgimages/alina-perekatenkova-KINhsjQU1Ok-unsplash.jpg",
  "images/bgimages/kalis-munggaran-pSCUPR1UTKU-unsplash.jpg",
  "images/bgimages/krzysztof-hepner-AETM-AN2n_U-unsplash.jpg",
  "images/bgimages/krzysztof-hepner-n4MUofqcFGg-unsplash.jpg",
  "images/bgimages/pramod-tiwari-eDdFzt28n-I-unsplash.jpg",
  "images/bgimages/jakob-dalbjorn-zowMdVTxo3Q-unsplash.jpg"
]

var random_bg = Math.floor(Math.random() * bgm.length)
$(document).ready(function() {
  $(".bg-image").css("background-image", "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url('/static/" + bgm[random_bg] + "')")
})


var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.3) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);