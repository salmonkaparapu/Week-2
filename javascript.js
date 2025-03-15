let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider img');
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}