// NAV BTN
const navMenu = document.querySelector(".nav__ul");
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu-responsive");
    navBtn.classList.toggle("nav-btn__animacion");
    navBtn.classList.toggle("nav-btn__fixed");
    if (navMenu.classList.contains("nav__menu-responsive")) {
      navBtn.setAttribute("aria-label", "Cerrar menú");
    } else {
      navBtn.setAttribute("aria-label", "Abrir menú");
    }
  });

$('.hero-carousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.productos-carousel').slick({
    dots: true,
    infinite: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.atrapasueños-carousel').slick({
    dots: true,
    infinite: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// FANCYBOX

  $('[data-fancybox="gallery"]').fancybox({
    AnimationEffect : "slide",
    transitionEffect: "circular"
  });