document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel__gallery-element');
  const prevButton = document.querySelector('.carousel__btn-one');
  const nextButton = document.querySelector('.carousel__btn-two');
  let currentIndex = 0;

  function updateCarousel() {
    // Обновляем отображение слайдов
    slides.forEach((slide, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        slide.style.display = 'block';  // Показываем слайды, которые должны быть видны
      } else {
        slide.style.display = 'none';   // Скрываем остальные слайды
      }
    });
  }

  function showNextSlide() {
    currentIndex++;
    if (currentIndex > slides.length - 3) { // Если достигнут конец, начинаем с первого слайда
      currentIndex = 0;
    }
    updateCarousel();
  }

  function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) { // Если дошли до начала, переходим на последний набор слайдов
      currentIndex = slides.length - 3;
    }
    updateCarousel();
  }

  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);

  // Изначальное обновление карусели
  updateCarousel();
});
