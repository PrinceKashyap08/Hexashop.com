// Pre Loader  
const preloader = document.getElementById("loader");

function myLoader(){
    preloader.style.display = "none";
};


// CurrentYear 
// const year = document.querySelector("#currentYear")
// year.innerHTML = new Date().getFullYear();

// hamburger 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};