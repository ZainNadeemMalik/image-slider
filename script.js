document.addEventListener('DOMContentLoaded', function() {
  const sliderItemContainer = document.querySelector('.slider-item-container');
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100; // Each slide is 100% wide
    sliderItemContainer.style.transform = `translateX(${offset}%)`;
  }

  // Example of how to navigate to the next slide
  document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= sliderItemContainer.children.length) {
      currentIndex = 0; // Loop back to the first slide if we reach the end
    }
    showSlide(currentIndex);
  });

  // Example of how to navigate to the previous slide
  document.getElementById('prevButton').addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sliderItemContainer.children.length - 1; // Loop to the last slide if we reach the beginning
    }
    showSlide(currentIndex);
  });
});
