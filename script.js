// Welcome message
console.log("Welcome to Bonface's Portfolio");

// Scroll animations
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

// Apply animation to website sections
document.querySelectorAll("section").forEach((section) => {

    section.classList.add("reveal");

    observer.observe(section);

});
// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
// Typing animation
const welcomeText = "WELCOME TO MY PERSONAL WEBSITE";
const welcomeElement = document.getElementById("welcome-text");

let letterIndex = 0;

function typeWelcome() {
    if (letterIndex < welcomeText.length) {
        welcomeElement.textContent += welcomeText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWelcome, 100);
    }
}

typeWelcome();
// Digital clock
function updateClock() {
    const now = new Date();

    document.getElementById("digital-clock").textContent =
        now.toLocaleString("en-KE", {
            dateStyle: "full",
            timeStyle: "medium"
        });
}

updateClock();
setInterval(updateClock, 1000);
// Back to Top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});