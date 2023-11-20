const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;
const interval = 3000; // Cambia la imagen cada 3 segundos (3000 ms)

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    container.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, interval);
