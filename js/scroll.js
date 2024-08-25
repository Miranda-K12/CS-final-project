'use strict';
export function scrolling() {
  const allLinks = document.querySelectorAll("a:link");
  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
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
}
//Change header color
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const changeBackground = function(){
  window.scrollY > 400 ? header.classList.add('changed') : header.classList.remove('changed');
  };

  window.addEventListener('scroll', changeBackground);
});