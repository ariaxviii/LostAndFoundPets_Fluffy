document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider__slides');
  const slides = document.querySelectorAll('.slider__slide');
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;

  setInterval(function() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }, 3000);
});
