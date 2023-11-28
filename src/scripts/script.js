// subscribe newsletter form
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
});
