'use strict';
export function displaymenu() {
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
 }