// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Menutup menu setelah link diklik

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ==============================
// ANIMASI SCROLL
// ==============================

const animatedElements = document.querySelectorAll(
    ".value, .reflection-card, .concept-card, .artifact-card, .action-item, .commitment-box"
);


// Tambahkan class fade-in

animatedElements.forEach(function (element) {

    element.classList.add("fade-in");

});


// Observer untuk mendeteksi elemen
// ketika muncul di layar

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Jalankan observer

animatedElements.forEach(function (element) {

    observer.observe(element);

});