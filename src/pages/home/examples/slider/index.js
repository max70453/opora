import Swiper, { Navigation, Pagination } from 'swiper';
// swiper bundle styles
import 'swiper/css/bundle';

// swiper core styles
import 'swiper/css';

// modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  spaceBetween: 5,
  speed: 1000,
  // watchOverflow: true,
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
  autoplay: {
    delay: 1000,
  },
});

export default swiper;