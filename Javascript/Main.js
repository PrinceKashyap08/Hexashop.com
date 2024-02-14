// Pre Loader  
const preloader = document.getElementById("loader");

function myLoader(){
    preloader.style.display = "none";
};

// CurrentYear 
const year = document.querySelector("#currentYear")
year.innerHTML = new Date().getFullYear();

// hamburger 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

// menLatest 
$('#menLatest .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplayTimeout:5000,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});