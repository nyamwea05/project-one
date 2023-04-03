 //Select's the icon element and the ul element
const icon = document.querySelector('.icon');
const ul = document.querySelector('ul');

// Add's an event listener to the icon element to toggle the class 'active' on the ul element
icon.addEventListener('click', () => {
  ul.classList.toggle('active');
});