'use strict';
//Burger Menu//
const burgerBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
burgerBtn.addEventListener("click", function() {
  headerEl.classList.toggle("nav-open");
});
// Close button functionality
const closeBtns = document.querySelectorAll("a:link");
closeBtns.forEach(function(link) {
  link.addEventListener("click", function(e) {
    if (link.classList.contains("nav-a") || link.classList.contains("nav-book")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
//Change hero content
document.addEventListener('DOMContentLoaded', function() {
  const heroImage = document.querySelector('.hero-section');
  const heroHeader = document.querySelector('.hero-header');
  const heroSubheader = document.querySelector('.hero-subheader');
  let isImage1 = true;

  function changeContent() {
    if (isImage1) {
      heroImage.style.backgroundImage = "url('images/hero.jpg')";
      heroHeader.textContent = "La Dolce Pizza";
      heroSubheader.textContent = "Your Pizza Journey Starts Here";
    } else {
      heroImage.style.backgroundImage = "url('images/hero-1.jpg')";
      heroHeader.textContent = "say yes to pizza";
      heroSubheader.textContent = "The Party Can't Start Without Pizza.";
    }
    isImage1 = !isImage1; 
  }

  // Change background image and text content every 3 seconds
  setInterval(changeContent, 3000);
});
 
// Smooth scrolling functionality
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth"
      });
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
const goToCard = function(slide) {
  card.forEach((c, i) => (c.style.transform = `translateX(${100 * (i - slide)}%)`));
};
goToCard(0);
const nextCard = function() {
  if (currentSlide === maxCard - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToCard(currentSlide);
};
const prevCard = function() {
  if (currentSlide === 0) {
    currentSlide = maxCard - 1;
  } else {
    currentSlide--;
  }
  goToCard(currentSlide);
};
rightBtn.addEventListener('click', nextCard);
leftBtn.addEventListener('click', prevCard);
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') prevCard();
  if (e.key === 'ArrowRight') nextCard();
});
//Menu Filter section
document.addEventListener("DOMContentLoaded", function () {
  const menuSections = document.querySelectorAll('.menu-section');
  const icons = document.querySelectorAll('.icon');
  
  menuSections.forEach(section => {
    section.addEventListener('click', function() {
      const activeMenu = document.querySelector('.menu-box.active');
      if (activeMenu) {
        activeMenu.classList.remove('active');
      }
      const targetMenuId = section.id.replace('-section', '-menu');
      const targetMenu = document.getElementById(targetMenuId);
      if (targetMenu) {
        targetMenu.classList.add('active');
      }
      // Remove active class from all icons
      icons.forEach(icon => {
        icon.classList.remove('active-icon');
      });

      // Add active class to the clicked icon
      const activeIcon = section.querySelector('.icon');
      if (activeIcon) {
        activeIcon.classList.add('active-icon');
      }
    });
  });
});
//Animaions
//For Section Header
document.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.div-header');
    const viewportHeight = window.innerHeight;

    animatedElements.forEach(animatedEl => {
        const elPosition = animatedEl.getBoundingClientRect().top;

        if (elPosition < viewportHeight) {
            animatedEl.classList.add('animated');
        } else {
            animatedEl.classList.remove('animated');
        }
    });
});
//Menu Gallery Animation
document.addEventListener('scroll', function () {
  const animatedImages = document.querySelectorAll('.gallery__img');
  const viewportHeight = window.innerHeight;
  animatedImages.forEach(animatedImg => {
    const imgPosition = animatedImg.getBoundingClientRect().top;
    if (imgPosition < viewportHeight) {
      animatedImg.classList.add('img-animation');
    } else {
      animatedImg.classList.remove('img-animation');
    }
  });
});
//Menu-item Animation
document.addEventListener('scroll', function () {
  const animatedMenu = document.querySelectorAll('.menu-item');
  const viewportHeight = window.innerHeight;
  
  animatedMenu.forEach(animatedItem => {
    const menuPosition = animatedItem.getBoundingClientRect().top;
    if (menuPosition < viewportHeight) {
      animatedItem.classList.add('img-animation');
    } else {
      animatedItem.classList.remove('img-animation');
    }
  });
});
