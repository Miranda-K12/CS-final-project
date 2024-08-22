'use strict';

export function animations() {
  //For Section Header
  document.addEventListener('scroll', function () {
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
  //About Section
  document.addEventListener('scroll', function () {
    const animatedFeature = document.querySelectorAll('.about-text-box');
    const viewbox = window.innerHeight;

    animatedFeature.forEach(animatedEl => {
      const textPosition = animatedEl.getBoundingClientRect().top;
      if (textPosition < viewbox) {
        animatedEl.classList.add('bottom-moving');
      } else {
        animatedEl.classList.remove('bottom-moving');
      }
    });
  });

  //for gallery images
  document.addEventListener('scroll', function () {
    const animatedGallery = document.querySelectorAll('.gallery-img');
    const viewport = window.innerHeight;

    animatedGallery.forEach(animatedEl => {
      const imagePosition = animatedEl.getBoundingClientRect().top;
      if (imagePosition < viewport) {
        animatedEl.classList.add('img-animation');
      } else {
        animatedEl.classList.remove('img-animation');
      }
    });
  });
  //Feature Section Animation
  document.addEventListener('scroll', function () {
    const animatedFeature = document.querySelectorAll('.features');
    const vw = window.innerHeight;

    animatedFeature.forEach(animatedEl => {
      const featurePosition = animatedEl.getBoundingClientRect().top;
      if (featurePosition < vw) {
        animatedEl.classList.add('bottom-moving');
      } else {
        animatedEl.classList.remove('bottom-moving');
      }
    });
  });

  //Menu Gallery Animation
  document.addEventListener('scroll', function () {
    const animatedImages = document.querySelectorAll('.gallery__img');
    const vwHeight = window.innerHeight;
    animatedImages.forEach(animatedImg => {
      const imgPosition = animatedImg.getBoundingClientRect().top;
      if (imgPosition < vwHeight) {
        animatedImg.classList.add('img-animation');
      } else {
        animatedImg.classList.remove('img-animation');
      }
    });
  });
  //Menu-item Animation
  document.addEventListener('scroll', function () {
    const animatedMenu = document.querySelectorAll('.menu-item');
    const viewportedHeight = window.innerHeight;
  
    animatedMenu.forEach(animatedItem => {
      const menuPosition = animatedItem.getBoundingClientRect().top;
      if (menuPosition < viewportedHeight) {
        animatedItem.classList.add('img-animation');
      } else {
        animatedItem.classList.remove('img-animation');
      }
    });
  });

  //Special dishes Animation
  document.addEventListener('scroll', function () {
    const animatedFood = document.querySelectorAll('.image-container');
    const viewportedHeight = window.innerHeight;
  
    animatedFood.forEach(animatedItem => {
      const dishPosition = animatedItem.getBoundingClientRect().top;
      if (dishPosition < viewportedHeight) {
        animatedItem.classList.add('img-animation');
      } else {
        animatedItem.classList.remove('img-animation');
      }
    });
  });
  //Form Animation
  document.addEventListener('scroll', function () {
    const animatedForm = document.querySelectorAll('.reservation-form');
    const viewTable = window.innerHeight;
  
    animatedForm.forEach(animatedItem => {
      const tablePosition = animatedItem.getBoundingClientRect().top;
      if (tablePosition < viewTable) {
        animatedItem.classList.add('bottom-moving');
      } else {
        animatedItem.classList.remove('bottom-moving');
      }
    });
  });
  //Testimonail Section Animation
  document.addEventListener('scroll', function () {
    const animatedCards = document.querySelectorAll('.cards');
    const viewCards = window.innerHeight;

    animatedCards.forEach(animatedEl => {
      const cardPosition = animatedEl.getBoundingClientRect().top;
      if (cardPosition < viewCards) {
        animatedEl.classList.add('bottom-moving');
      } else {
        animatedEl.classList.remove('bottom-moving');
      }
    });
  });
  //footer animation
  document.addEventListener('scroll', function () {
    const footerAnimation = document.querySelectorAll('.footer-column');
    const vwFooter = window.innerHeight;
    footerAnimation.forEach(animatedItem => {
      const footerPosition = animatedItem.getBoundingClientRect().top;
      if (footerPosition < vwFooter) {
        animatedItem.classList.add('bottom-moving');
      } else {
        animatedItem.classList.remove('bottom-moving');
      }
    });
  });
}