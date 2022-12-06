var bgm = [
  "https://raw.githubusercontent.com/reallyyy/reallyyy.github.io/master/images/bgimages/alina-perekatenkova-b4YiCHrq5BA-unsplash.jpg",
  "https://raw.githubusercontent.com/reallyyy/reallyyy.github.io/master/images/bgimages/alina-perekatenkova-KINhsjQU1Ok-unsplash.jpg",
  "https://raw.githubusercontent.com/reallyyy/reallyyy.github.io/master/images/bgimages/kalis-munggaran-pSCUPR1UTKU-unsplash.jpg",
  "https://raw.githubusercontent.com/reallyyy/reallyyy.github.io/master/images/bgimages/krzysztof-hepner-AETM-AN2n_U-unsplash.jpg",
  "https://raw.githubusercontent.com/reallyyy/reallyyy.github.io/master/images/bgimages/krzysztof-hepner-n4MUofqcFGg-unsplash.jpg",
  "https://raw.githubusercontent.com/reallyyy/reallyyy.github.io/master/images/bgimages/pramod-tiwari-eDdFzt28n-I-unsplash.jpg",
  "https://raw.githubusercontent.com/reallyyy/reallyyy.github.io/master/images/bgimages/jakob-dalbjorn-zowMdVTxo3Q-unsplash.jpg"
]

var random_bg = Math.floor(Math.random() * bgm.length)
$(document).ready(function() {
  $(".bg-image").css("background-image", "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url('" + bgm[random_bg] + "')")
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
$(function() {
  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });

  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content").find("input").focus();
    }, 400);
  });
});

