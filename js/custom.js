let menu = document.querySelector(".mobile-menu");
let scrollPos = 0;
window.addEventListener("scroll", function () {
  if (document.body.getBoundingClientRect().top < scrollPos) {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  scrollPos = document.body.getBoundingClientRect().top;
});

$(document).ready(function () {
  $(".home-slider").owlCarousel({
    stagePadding: 0,
    margin: 0,
    
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    nav: true,
    mouseDrag: false,

    navText: ["<span>&#8249;</span>", "<span>&#8250;</span>"],
    center: true,
  });
  
});

AOS.init({
  duration: 1000,
});

function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") &&
      b.hostname !== location.hostname &&
      (b.target = "_blank");
  }
}
externalLinks();
