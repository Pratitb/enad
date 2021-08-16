$(document).ready(function() {
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
        center: true
    });
    $(".projects").owlCarousel({
      stagePadding: 0,
      margin: 0,

      items: 1,
      loop: true,
      autoplay: true,
      autoplaySpeed: 2000,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      
      /* nav: true, */
      mouseDrag: false,

      /* navText: ["<span>&#8249;</span>", "<span>&#8250;</span>"], */
      center: true
  });
});

AOS.init({
    duration: 3000
});

const counters = document.querySelectorAll('.counter-number');
const speed = 500;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;


        //now we increment the number to target
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
})