document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const postPictureLink = document.getElementById('postPicture');
    const fileInput = document.getElementById('fileInput');
    const writeReviewLink = document.getElementById('writeReview');
  
    // Add event listener for the "Post a picture" link
    postPictureLink.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Please select a picture to upload.');
      fileInput.click(); // Trigger the file input
    });
  
    // Add event listener for the "Write a review" link
    writeReviewLink.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Please write your review.');
    });
  
    // Optional: Handle file input change if you want to perform additional actions
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        alert(`Selected file: ${file.name}`);
      }
    });
  });
  

  
