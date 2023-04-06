//Select's the icon element and the ul element
const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");
const myImage = document.getElementById("myImage");

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  firstImage();
});

const imagePlaceholder = document.getElementsByClassName("box");

const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    // Remove the 'active' class from all images
    images.forEach(image => {
      image.classList.remove('active');
    });

    // Add the 'active' class to the clicked image
    image.classList.add('active');
  });
});

//


/*.catch(error) => {
  console.log('error!');
  console.error(error);

})''*/
function firstImage() {
  fetch("https://picsum.photos/200/300", {
    headers: {
      Authorization: "87VMkGUJW5HqTzaej1rnh4zUkTyfWJ6ZKIp40iTT0yU5tIORyXdVSaPG",
    },
  })
    .then((response) => response.json())
    // fetch data
    .then((data) => {
      console.log(data);

      // get
      const photos = data.photos;

      for (let i = 0; i < photos.length; i++) {
        myImage.innerHTML = `
        <img src="${photos[i].url}" />
        
        `;
        const images = document.createElement("img");
        images.src = photos[i].url
        
        // console.log(photos[i].url);
        // console.log(images.src)
        // console.log(myImage);
      }

      // const photos = data.photos;
      // const images = document.createElement("img");
      // myImage.appendChild(images);
      // console.log(myImage.appendChild(images));
      // images.textContent = images.src.original;
      // myImage.appendChild(images);
      // console.log(images.src.next_page);
    })
    .catch((err) => {
      console.log(err);
    });
}
const searchImage = document.createElement("search");
