var swiper = new Swiper(".swiper", {
  //   origin: center,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  preventClicks: true,
  freeMode: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
