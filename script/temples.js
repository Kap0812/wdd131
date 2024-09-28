const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Display the date the document was last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;


// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
