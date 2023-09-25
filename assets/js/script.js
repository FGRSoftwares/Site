document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".banner-slide");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = "none";
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos

    // Controles de navegação (opcional)
    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    if (nextButton && prevButton) {
        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);
    }
});// JavaScript Document