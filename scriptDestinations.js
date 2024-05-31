
console.log('JavaScript code is running');

const navLinks = document.querySelectorAll('.navigation a');
const destinationContainers = document.querySelectorAll('.destination-Container');

// Hide all destination containers initially
destinationContainers.forEach((container) => {
  container.style.display = 'none';
});

// Show the first destination container and add the "active" class
destinationContainers[0].style.display = 'block';
destinationContainers[0].classList.add('active');

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Remove the "active" class from all destination containers
    destinationContainers.forEach((container) => {
      container.classList.remove('active');
    });

    // Get the data-destination attribute of the clicked link
    const selectedDestination = event.target.dataset.destination;

    // Hide all destination containers
    destinationContainers.forEach((container) => {
      container.style.display = 'none';
    });

    // Show the selected destination container and add the "active" class
    const selectedContainer = document.querySelector(`.destination-Container[data-destination="${selectedDestination}"]`);
    selectedContainer.style.display = 'block';
    selectedContainer.classList.add('active');
  });
});



// Get the modal
var modal = document.getElementById("accommodation-modal");

// Get all the accommodation items
var accommodationItems = document.querySelectorAll(".accommodation-item");

// Get the close button
var closeButton = document.getElementsByClassName("accommodation-modal-close")[0];

// Loop through all the accommodation items and add a click event listener
accommodationItems.forEach(function(item) {
  item.addEventListener("click", function() {
    // Get the data attributes of the clicked item
    var name = this.querySelector(".accommodation-name").textContent;
    var description = this.dataset.description;
    var price = this.dataset.price;
    var link = this.dataset.link;

    // Update the modal content
    document.getElementById("accommodation-name").textContent = name;
    document.getElementById("accommodation-description").textContent = description;
    document.getElementById("accommodation-price").textContent = price;
    document.getElementById("modal-website-link").href = link;
    document.getElementById("modal-website-link").textContent = "Visit Website";

    // Show the modal
    modal.style.display = "block";
  });
});

// When the user clicks on the close button, close the modal
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});