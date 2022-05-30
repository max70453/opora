import Swiper from 'swiper/bundle';
// swiper bundle styles
import 'swiper/css/bundle';
// swiper core styles
import 'swiper/css';
// modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let Slider = new Swiper('.swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  spaceBetween: 10,
  speed: 1000,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 35,
    stretch: 50,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints:{
    320: {
      slidesPerView: 1,
    },
    741: {
      slidesPerView: 2,
    },
    1091: {
      slidesPerView: 3,
    }
  }
});

export default Slider;