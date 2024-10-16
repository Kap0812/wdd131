const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Display the date the document was last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () =>{
    hamburger.remove.classList("active");
    navMenu.remove.classList("active");
}))