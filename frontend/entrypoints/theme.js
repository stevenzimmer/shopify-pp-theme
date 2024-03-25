import 'vite/modulepreload-polyfill';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.product-swiper', {
  modules: [Navigation],
  speed: 300,
  spaceBetween: 20,
  loop: false,
  grabCursor: true,
  perMove: 1,
  centerSlides: true,
  slidesPerView: 1.1,
  spaceBetween: 20,
  navigation: {
    enabled: true,
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

swiper.on('slideChange', function (swipe) {
  document.getElementById('carousel-next').classList.remove('opacity-0');

  document.getElementById('carousel-prev').classList.remove('opacity-0');

  if (swipe.isEnd) {
    document.getElementById('carousel-next').classList.add('opacity-0');
  }

  if (swipe.isBeginning) {
    document.getElementById('carousel-prev').classList.add('opacity-0');
  }
});

const mobileNavTrigger = document.getElementById('mobile-nav-trigger');
const navMain = document.getElementById('nav-main');

mobileNavTrigger.addEventListener('click', (e) => {
  mobileNavTrigger.querySelector('.hamburger').classList.toggle('bp-hidden');
  mobileNavTrigger.querySelector('.close').classList.toggle('bp-hidden');
  navMain.classList.toggle('bp-hidden');
});
