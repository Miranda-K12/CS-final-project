'use strict';
//Burger Menu//
const burgerBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

burgerBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
 // Close button functionality
const closeBtns = document.querySelectorAll("a:link");
closeBtns.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("nav-a") || link.classList.contains("nav-book")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
// Smooth scrolling functionality
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Testimonial slides functionality
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
//Menu Filter section
    document.addEventListener("DOMContentLoaded", function() {
        const MenuSections = document.querySelectorAll('.menu-section');
        const menuBox = document.querySelectorAll('.menu-box');
        MenuSections.forEach(section => {
            section.addEventListener('click', function() {
                const activeMenu = document.querySelector('.menu-box.active');
                activeMenu.classList.remove('active');
                const targetMenuId = section.id.replace('-section', '-menu');
                const targetMenu = document.getElementById(targetMenuId);
                targetMenu.classList.add('active');
            });
        });
    });

