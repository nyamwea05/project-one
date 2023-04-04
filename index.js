 //Select's the icon element and the ul element
const icon = document.querySelector('.icon');
const ul = document.querySelector('ul');

// Add's an event listener to the icon element to toggle the class 'active' on the ul element
icon.addEventListener('click', () => {
  ul.classList.toggle('active');
});

const apiKey = "87VMkGUJW5HqTzaej1rnh4zUkTyfWJ6ZKIp40iTT0yU5tIORyXdVSaPG";
const endpoint = "https://api.pexels.com/v1/search?query=nature&per_page=12";
const imagesContainer = document.querySelector(".images");

async function getImages() {
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: apiKey,
        },
        mode: 'cors'
      });
      const data = await response.json();
      const images = data.photos;
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src.large;
        imagesContainer.appendChild(img);
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  getImages();


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });