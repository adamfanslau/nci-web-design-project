// Our javascript logic goes here:

// subscribe newsletter form
document.addEventListener('DOMContentLoaded', function () {
    // Function to show a dialog message
    function showDialogMessage() {
        const modal = new bootstrap.Modal(document.getElementById('subscribeConfirmationModal'));
        modal.show();
    }

    // Attach the function to the subscribe button
    const subscribeButton = document.getElementById('subscribeButton');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', showDialogMessage);
    }
});
