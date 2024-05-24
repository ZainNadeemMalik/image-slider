// let currentIndex = 0

// function showSlide(index) {
//   const slides = document.querySelectorAll('.slider-item')
//   const totalSlides = slides.length

//   // if(index >= totalSlides) {
//   //   currentIndex = 0
//   // } else if(index < totalSlides) {
//   //   currentIndex = totalSlides - 1
//   // } else {
//   //   currentIndex = index
//   // }

//   currentIndex = (index + totalSlides) % totalSlides
//   const newTransform = -currentIndex * 100
//   document.querySelector('.slider-inner').style.transform = `translateX(${newTransform}%)`
// }

// function previousSlide() {
//   showSlide(currentIndex - 1)
// }

// function nextSlide() {
//   showSlide(currentIndex + 1)
// }
// function click() {
//   // const sliderInner = document.querySelector('.slider-inner')
//   // sliderInner.style.transform = translateX('-100%')

//   const element = document.querySelector('.slider-inner');
//   const currentTransform = window.getComputedStyle(element).getPropertyValue('transform');
//   const currentTranslateX = parseFloat(currentTransform.split(',')[4]);
  
//   // Change translateX by 100%
//   const newTranslateX = currentTranslateX + 100;
  
//   element.style.transform = `translateX(${newTranslateX}%)`;
  
// }

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