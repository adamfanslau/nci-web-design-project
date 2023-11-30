document.addEventListener("DOMContentLoaded", function () {
    // Function to validate email format
    function isValidEmail(email) {
      // Regular expression for a basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to show a dialog message
    function showDialogMessage() {
      const emailInput = document.getElementById("newsletter1");
      const email = emailInput.value.trim();
  
      if (isValidEmail(email)) {
        // Valid email, show the confirmation modal
        const modal = new bootstrap.Modal(
          document.getElementById("subscribeConfirmationModal")
        );
        modal.show();
      } else {
        // Invalid email, show an error message
        alert("Please enter a valid email address.");
      }
    }
  
    // Attach the function to the subscribe button
    const subscribeButton = document.getElementById("subscribeButton");
    if (subscribeButton) {
      subscribeButton.addEventListener("click", showDialogMessage);
    }
  
    // Additional code for the contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Get the email input value
        const emailInput = document.getElementById("email");
        const userEmail = emailInput.value;
  
        // Validate the email address
        if (!isValidEmail(userEmail)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        // If the email is valid, show the confirmation modal and reset the form
        const modal = new bootstrap.Modal(
          document.getElementById("contactConfirmationModal")
        );
        modal.show();
        contactForm.reset();
      });
    }
  });
  