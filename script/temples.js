// Dynamic Footer Information
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
