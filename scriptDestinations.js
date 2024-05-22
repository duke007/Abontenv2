console.log('JavaScript code is running');

const navLinks = document.querySelectorAll('.navigation a');
const destinationContainers = document.querySelectorAll('.destination-Container');

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Get the data-destination attribute of the clicked link
    const selectedDestination = event.target.getAttribute('data-destination');

    // Hide all destination containers
    destinationContainers.forEach(container => {
      container.style.display = 'none';
    });

    // Show the selected destination container
    const selectedContainer = document.querySelector(`.destination-Container[data-destination="${selectedDestination}"]`);
    selectedContainer.style.display = 'block';
  });
});

const slides = document.querySelectorAll(".slideshow .slide");
let currentSlideIndex = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
  });
  currentSlideIndex = (n + slides.length) % slides.length;
  slides[currentSlideIndex].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function startSlideshow() {
  showSlide(currentSlideIndex);
  setInterval(nextSlide, 5000);
}

startSlideshow();