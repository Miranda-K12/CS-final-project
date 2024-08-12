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
//for gallery images
document.addEventListener('scroll', function() {
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
document.addEventListener('scroll', function() {
    const animatedFeature = document.querySelectorAll('.features');
    const vw = window.innerHeight;

    animatedFeature.forEach(animatedEl => {
        const imagePosition = animatedEl.getBoundingClientRect().top;
        if (imagePosition < vw) {
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
    const menuPosition = animatedItem.getBoundingClientRect().top;
    if (menuPosition < viewportedHeight) {
      animatedItem.classList.add('img-animation');
    } else {
      animatedItem.classList.remove('img-animation');
    }
  });
});








//Reservation form
//Limit reservation date
document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.querySelector(".reservation-form");
  const reservationDate = document.getElementById("date");
  // Placeholder text
  reservationDate.placeholder = "Select Date";
  // Set reservation limit to at least one day in advance
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  const minDate = `${year}-${month}-${day}`;
  
  reservationDate.setAttribute('min', minDate);
  reservationForm.addEventListener("submit", function (event) {
    const selectedDate = new Date(reservationDate.value);
    selectedDate.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    if (selectedDate < tomorrow) {
      alert("Please select a date at least one day in advance.");
      event.preventDefault(); // Prevent form submission
    }
  });
});
  //Validation
  //Name Validation
function validateFullName(userName) {
  let namePattern = /^(?=.*[A-Za-z]{3})[A-Za-z][A-Za-z '-]*[A-Za-z]$/;
  return namePattern.test(userName);
  }
// Email validation
function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Mobile number validation
function validatePhoneNumber(phoneNumber) {
  let phonePattern = /^(?:\+?[1-9]\d{0,3})?[-.\s]?(?:\(?\d{1,4}\)?[-.\s]?)?(?:\d{1,4}[-.\s]?){1,3}\d{4,}$/;
  return phonePattern.test(phoneNumber);
}

//Number of Guest Validation
function validateGuests(form) {
  const guestSelect = form.querySelector('#guest').value;
  const validGuestNumber = ["1", "2", "3", "4", "5", "6-10", "11-15", "15+"];
  if (!validGuestNumber.includes(guestSelect)) {
    alert('Please select a valid number of guests.');
    return false;
  }
  return true;
}
// Booking time validation
function validateBookingTime(form) {
    const timeSelect = form.querySelector("#time").value;
    const validTimes = ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"];
    if (!validTimes.includes(timeSelect)) {
        alert("Please select a valid booking time.");
        return false;
    }
    return true;
}
//TextArea validation
function validateText(form) {
  const textarea = form.querySelector('.text-area');
  const text = textarea.value.trim();
  const minLength = 5;
  const maxLength = 1000;
  // Validate the length of the text
  if (text.length < minLength) {
    alert(`Please enter at least ${minLength} characters.`);
    textarea.classList.add('invalid-input'); // Change background color
    return false;
  } else if (text.length > maxLength) {
    alert(`Please enter no more than ${maxLength} characters.`);
    textarea.classList.add('invalid-input'); // Change background color
    return false;
  }
  
  // If validation passes
  textarea.classList.remove('invalid-input'); // Remove background color
  return true;
}
// Modal window
function openModal() {
    const showWindow = document.querySelector('.window');
    const overlay = document.querySelector('.overlay');
    showWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModal() {
    const showWindow = document.querySelector('.window');
    const overlay = document.querySelector('.overlay');
    showWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const btnSubmit = document.querySelector('.submit');
  const btnClose = document.querySelector('.close-window');
  const overlay = document.querySelector('.overlay');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const userNameInput = document.getElementById('fname');
  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    let email = emailInput.value;
    let phoneNumber = phoneInput.value;
    let userName = userNameInput.value;
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      emailInput.classList.add('invalid-input'); //change background color
      return;
    } else {
      emailInput.classList.remove('invalid-input');  // Reset background color if valid
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number.');
      phoneInput.classList.add('invalid-input');
      return;
    } else {
      phoneInput.classList.remove('invalid-input');  // Reset background color if valid
    }
    if (!validateGuests(form)) {
      return;
    }
    if (!validateBookingTime(form)) {
      return;
    }
    if (!validateFullName(userName)) {
      alert('Please enter a valid full name.');
      userNameInput.classList.add('invalid-input'); //change background color
      return;
    } else {
      userNameInput.classList.remove('invalid-input');  // Reset background color if valid
    };
      if (!validateText(form)) {
      return;
    }
      openModal();
      form.reset();
    });
  btnClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
});

//fetch
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {
  method: 'GET',
})
  .then(function getData(data) {
    if (!data.ok) {
      throw 'Page Not Found';
    }
    return data.json();
  })
  .then(function (responseData) {
    const divs = [
      document.getElementById('div1'),
      document.getElementById('div2'),
      document.getElementById('div3'),
      document.getElementById('div4')
    ];

    let index = 0;
    responseData.categories.forEach((element) => {
      if (["Miscellaneous", "Lamb", "Pasta", "Dessert"].includes(element.strCategory)) {
        const img = document.createElement('img');
        img.style.width = '200px';
        img.style.height = '160px';
        img.src = `${element.strCategoryThumb}`; 
        // Append the img to divs
        divs[index].appendChild(img);
        // Move to the next div for the next image
        index = (index + 1) % 4;
      }
    });
  })
  .catch(function (error) {
    alert('Something went wrong');
  });