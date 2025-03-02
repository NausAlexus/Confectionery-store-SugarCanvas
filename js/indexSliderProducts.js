let currentSlide2 = 0;
const sliderContainer2 = document.querySelector('.new-arrivals-slider-container-2');
const totalSlides2 = document.querySelectorAll('.new-arrivals-card-2').length;

function moveSlide2(direction) {
    const slidesToShow2 = getSlidesToShow2();
    currentSlide2 += direction;

    if (currentSlide2 < 0) {
        currentSlide2 = totalSlides2 - slidesToShow2;
    } else if (currentSlide2 >= totalSlides2) {
        currentSlide2 = 0;
    }

    const offset2 = -currentSlide2 * (100 / slidesToShow2);
    sliderContainer2.style.transform = `translateX(${offset2}%)`;
}

function getSlidesToShow2() {
    if (window.innerWidth < 480) {
        return 1;
    } else if (window.innerWidth < 768) {
        return 2;
    } else {
        return 4;
    }
}

window.addEventListener('resize', () => {
    moveSlide2(0);
});

document.addEventListener('DOMContentLoaded', () => {
    moveSlide2(0);

    document.querySelector('.new-arrivals-prev-2').addEventListener('click', () => {
        moveSlide2(-1);
    });

    document.querySelector('.new-arrivals-next-2').addEventListener('click', () => {
        moveSlide2(1);
    });
});