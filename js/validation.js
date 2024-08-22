'use strict';

export function validation(){
  // Name Validation
 const validateFullName = (userName) => /^(?=.*[A-Za-z]{3})[A-Za-z][A-Za-z '-]*[A-Za-z]$/.test(userName);
  // Email validation
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Mobile number validation
  const validatePhoneNumber = (phoneNumber) => /^(?:\+?[1-9]\d{0,3})?[-.\s]?(?:\(?\d{1,4}\)?[-.\s]?)?(?:\d{1,4}[-.\s]?){1,3}\d{4,}$/.test(phoneNumber);
  // Number of Guests Validation
  const validateGuests = (form) => {
  const validGuestNumbers = ["1", "2", "3", "4", "5", "6-10", "11-15", "15+"];
  const guestSelect = form.querySelector('#guest').value;
  return validGuestNumbers.includes(guestSelect) || alert('Please select number of guests.');
};
// Booking time validation
  const validateBookingTime = (form) => {
  const validTimes = ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"];
  const timeSelect = form.querySelector("#time").value;
  return validTimes.includes(timeSelect) || alert("Please select booking time.");
};
//Set avaliable booking date
document.addEventListener("DOMContentLoaded", function () {
  const reservationDate = document.getElementById("date");
  // Set minimum and maximum dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 90);
  maxDate.setHours(0, 0, 0, 0);

  const minYear = tomorrow.getFullYear();
  const minMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const minDay = String(tomorrow.getDate()).padStart(2, '0');
  const minDate = `${minYear}-${minMonth}-${minDay}`;

  const maxYear = maxDate.getFullYear();
  const maxMonth = String(maxDate.getMonth() + 1).padStart(2, '0');
  const maxDay = String(maxDate.getDate()).padStart(2, '0');
  const maxDates = `${maxYear}-${maxMonth}-${maxDay}`;

  reservationDate.setAttribute('min', minDate);
  reservationDate.setAttribute('max', maxDates);
  //set placeholder

  // Validate date function
const validateDate = () => reservationDate.value ? true : (alert('Please select a booking date.'), false);
  // TextArea validation
const validateText = (form) => form.querySelector('.text-area').value.trim().length >= 5 || alert('Please enter at least 5 characters.');
  // Modal window
const showWindow = document.querySelector('.window');
const wraper = document.querySelector('.wraper');
  function openModal() {
  showWindow.classList.remove('hidden');
   wraper.classList.remove('hidden');
  }
  function closeModal() {
  showWindow.classList.add('hidden');
  wraper.classList.add('hidden');
  }
  // Form submission handling
  const form = document.querySelector('.reservation-form');
  const btnSubmit = document.querySelector('.submit');
  const btnClose = document.querySelector('.close-window');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const userNameInput = document.getElementById('fname');

  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault(); 
    let email = emailInput.value;
    let phoneNumber = phoneInput.value;
    let userName = userNameInput.value;

    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number.');
      return;
    }
    if (!validateGuests(form)) {
      return;
    }
    if (!validateDate()) {
      return;
    }
    if (!validateBookingTime(form)) {
      return;
    }
    if (!validateFullName(userName)) {
      alert('Please enter a valid full name.');
      return;
    } 
    if (!validateText(form)) {
      return;
    }
    openModal();
    form.reset();
  });

  btnClose.addEventListener('click', closeModal);
  wraper.addEventListener('click', closeModal);
});
}