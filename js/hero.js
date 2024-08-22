'use strict';
export function heroContent(){
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

  // Set time for content change
  setInterval(changeContent, 3000);
});
 }