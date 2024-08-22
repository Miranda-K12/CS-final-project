'use strict';
export function fetching() {
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
  const errorP = document.createElement("p");
  errorP.style.fontSize = '24px';
  errorP.style.color = '#CC5500';
  errorP.style.textTransform = 'uppercase';
  errorP.style.fontWeight = '600';
  errorP.style.letterSpacing = '1.5px';
 // Check errors
    if (error.response?.status === 404) {
        errorP.textContent = "404, Not Found";
    } else {
        errorP.textContent = "Something Went Wrong";
    }

    //display Error Message
    container.appendChild(errorP); 
    // Display message after 3 seconds
    setTimeout(() => {
        errorP.classList.add('show');
    }, 3000);

    // Hide image containers
    document.querySelectorAll('.image-container').forEach(container => {
        container.style.display = 'none';
    });
});
}