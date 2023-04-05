//Select's the icon element and the ul element
const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");
const myImage = document.getElementById("myImage");

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  firstImage();
});

const imagePlaceholder = document.getElementsByClassName("box");

// Add's an event listener to the icon element to toggle the class 'active' on the ul element
// icon.addEventListener("click", () => {
//   ul.classList.toggle("active");
// });

//

function catchButterfly() {
  console.log("about to fetch a butterfly");
  fetch(`https://api.pexels.com/v1/search?query=${query}`)
    .then((response) => response.blob())
    .then(displayBlobAsImage(blob))
    .catch((error) => {
      console.error("Failed to catch the butterfly:", error);
    });
}

/*.catch(error) => {
  console.log('error!');
  console.error(error);

})''*/
function firstImage() {
  fetch("https://api.pexels.com/v1/search?query=Ocean", {
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
