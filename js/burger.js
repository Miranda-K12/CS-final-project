'use strict';
//Burger Menu//
export function burgerMenu (){
const burgerBtn = document.querySelector(".btn-mobile-nav");
const headerItem = document.querySelector(".header");
burgerBtn.addEventListener("click", function() {
  headerItem.classList.toggle("nav-open");
});
// Close button functionality
const closeBtns = document.querySelectorAll("a:link");
closeBtns.forEach(function(link) {
  link.addEventListener("click", function(e) {
    if (link.classList.contains("nav-a") || link.classList.contains("nav-book")) {
      headerItem.classList.toggle("nav-open");
    }
  });
});
}