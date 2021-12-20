const navbarToggler = document.querySelector(".navbar-toggler");
const navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");
const navbarNav = document.querySelector(".navbar-nav");
const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(link => {
//     link.addEventListener("click", (event) => {
//         navLink.forEach(l => {
//             l.classList.remove("active");
//         })
//         link.classList.add("active");
//     })

// })

navbarToggler.addEventListener("click", (event) => {
    navbarTogglerIcon.classList.toggle("open");
    navbarNav.classList.toggle("open");

})