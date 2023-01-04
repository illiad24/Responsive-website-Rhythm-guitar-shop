"use strict"

const rewiewsSwiper = document.querySelector('.swiper-rewiews');
if (rewiewsSwiper) {
  const swiper = new Swiper('.swiper-rewiews', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
}