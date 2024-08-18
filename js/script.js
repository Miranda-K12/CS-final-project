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
//About Section
document.addEventListener('scroll', function() {
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
//About Section
document.addEventListener('scroll', function() {
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
//Reservation Form Validation
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
  // Form submission handling
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

    //JS Filter
    const filteredCategories = responseData.categories.filter(category =>
      ["Miscellaneous", "Lamb", "Pasta", "Dessert"].includes(category.strCategory)
    );
    let index = 0;
    filteredCategories.forEach(category => {
      const img = document.createElement('img');
      img.style.width = '200px';
      img.style.height = '160px';
      img.src = category.strCategoryThumb;
      // Append the img to divs
      divs[index].appendChild(img);
      // Move to the next div for the next image
      index = (index + 1) % 4;
    });
  })
.catch(function (error) {
    const container = document.querySelector('.special-food');
    const pError = document.createElement("p");
    pError.style.fontSize = '24px';
    pError.style.color = '#CC5500';
    pError.style.textTransform = 'uppercase';
    pError.style.fontWeight = '600';
    pError.style.letterSpacing = '1.5px';

    // Check if error.response and error.response.status exist
    if (error.response?.status === 404) {
        pError.textContent = "404, Not Found";
    } else {
        pError.textContent = "Something Went Wrong";
    }

    //add  error message to the container
    container.appendChild(pError); 
    // Delay message after 3 seconds
    setTimeout(() => {
        pError.classList.add('show');
    }, 3000);

    // Hide image containers
    document.querySelectorAll('.image-container').forEach(container => {
        container.style.display = 'none';
    });
});

//Cookies
document.addEventListener('DOMContentLoaded', () => {
    const cookieBox = document.getElementById('cookie-box');
    const acceptBtn = document.querySelector('.accept');
  const declineBtn = document.querySelector('.decline');
  //Dissapear Cookies
    acceptBtn.addEventListener('click', () => {
        cookieBox.style.display = 'none';
    });
    declineBtn.addEventListener('click', () => {
        cookieBox.style.display = 'none';
    });
});
