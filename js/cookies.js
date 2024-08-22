'use strict';
export function cookies(){
document.addEventListener('DOMContentLoaded', () => {
    const cookieBox = document.getElementById('cookie-box');
    const acceptButton = document.querySelector('.accept');
  const declineButton = document.querySelector('.decline');
  //Dissapear Cookies
    acceptButton.addEventListener('click', () => {
        cookieBox.style.display = 'none';
    });
   declineButton.addEventListener('click', () => {
        cookieBox.style.display = 'none';
    });
});
}