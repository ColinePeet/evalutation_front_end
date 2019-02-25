// swiper
var swiperH = new Swiper('.swiper-container-h', {
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-h',
    clickable: true,
  },
});

// sticky menu
let stickyNav = $('.menu').offset().top; 

$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();  
    if (scrollTop > stickyNav) { 
        $('.menu').addClass('sticky');
        $('.menu').removeClass('container');
    } else {
        $('.menu').removeClass('sticky'); 
        $('.menu').addClass('container');
    }
});
