 //Select's the icon element and the ul element
const icon = document.querySelector('.icon');
const ul = document.querySelector('ul');

// Add's an event listener to the icon element to toggle the class 'active' on the ul element
icon.addEventListener('click', () => {
  ul.classList.toggle('active');
});

const container = document.querySelector('.image-container');

fetch('https://api.unsplash.com/photos/random?count=10', {
    headers: {
        Authorization: 'Client-ID your-access-key-here'
    }
})
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.urls.regular;
        img.alt = item.alt_description;
        container.appendChild(img);
        
        // Add event listener to make images interactive
        img.addEventListener('click', () => {
            // Your code for what happens when image is clicked
            img.classList.toggle('selected');
        });
    });
})
.catch(error => {
    console.log(error);
});