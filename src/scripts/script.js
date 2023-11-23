// Our javascript logic goes here:

//contact us form
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const modal = new bootstrap.Modal(document.getElementById('contactConfirmationModal'));

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        modal.show();
        contactForm.reset();
    });
});



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
