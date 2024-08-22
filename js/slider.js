'use strict';

export function slider() {
  const card = document.querySelectorAll('.card');
  const cards = document.querySelectorAll('.cards');
  let currentSlide = 0;
  const maxCard = card.length;
  const leftBtn = document.querySelector('.slider__btn--left');
  const rightBtn = document.querySelector('.slider__btn--right');
  const goToCard = function (slide) {
    card.forEach((c, i) => (c.style.transform = `translateX(${100 * (i - slide)}%)`));
  };
  goToCard(0);
  const nextCard = function () {
    if (currentSlide === maxCard - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToCard(currentSlide);
  };
  const prevCard = function () {
    if (currentSlide === 0) {
      currentSlide = maxCard - 1;
    } else {
      currentSlide--;
    }
    goToCard(currentSlide);
  };
  rightBtn.addEventListener('click', nextCard);
  leftBtn.addEventListener('click', prevCard);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === 'ArrowRight') nextCard();
  });
};