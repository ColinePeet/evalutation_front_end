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




// formu nav
(function($) {

  var tabs =  $(".tabs li a");
  
  tabs.click(function() {
    var panels = this.hash.replace('/','');
    tabs.removeClass("active");
    $(this).addClass("active");
    $("#panels").find('div').hide();
    $(panels).fadeIn(200);
  });

})(jQuery);


// axios
new Vue({
  el: "#app",
  data() {
    return {
      trips: [],
      selectedCountry: null,
    }
  },
  created() {
    axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
      .then(response => {
        this.trips = response.data
      })
  },
  computed: {
      countryTrips(){
         if (this.selectedCountry != null) {
        return this.trips.filter(t => t.countryName === this.selectedCountry)[0].trips;
      } else {
        return [];
      }
    },
  },
  methods: {
    selectCountry(country) {
      this.selectedCountry = country; 
    },
  }
})



// parallax
$('.parallax-window').parallax({imageSrc: '../img/hero-bg.jpg'});
$('.parallax-window').parallax({imageSrc: '../img/hero-bg-booking.jpg'});

// burger
let myBurger = document.querySelector(".burger");
let myMenu = document.querySelector(".full-menu");

myBurger.addEventListener("click", function () {
    myBurger.classList.toggle("active");
    myMenu.classList.toggle("active");
});