import AOS from 'aos';
import 'aos/dist/aos.css';

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {

  // Index selectors
  const overlay = document.querySelector('.overlay');
  const logoHome = document.querySelector('.home__logo');

  // Header selectors
  const menuButton = document.querySelector('.header__menu-button');
  const navContainer = document.querySelector('.header__nav');
  const iconBar = document.querySelector('.fa-bars');
  const iconTimes = document.querySelector('.fa-times');

  function toggleMenu() {
    if (navContainer.style.transform === 'translateX(-100%)' || !navContainer.style.transform) {
      navContainer.style.transform = 'translateX(0%)';
      iconBar.style.display = 'none';
      iconTimes.style.display = 'block';
      overlay.style.display = 'block';
    } else {
      navContainer.style.transform = 'translateX(-100%)';
      iconBar.style.display = 'block';
      iconTimes.style.display = 'none';
      overlay.style.display = 'none';
    }

  }

  menuButton.addEventListener('click', toggleMenu);

  // Init AOS
  AOS.init();

  // Init Swiper
  const swiper = new Swiper('.swiper', {

    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Active menu option
  const path = window.location.pathname;
  const options = document.querySelectorAll('.header__nav-item > a');

  options.forEach(function (option) {
    if (option.getAttribute('href') === path) {
      option.classList.add('active');
    }
  });

});
