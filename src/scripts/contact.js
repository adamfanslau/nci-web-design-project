//author: Daniel Lemos

//contact us form script
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const modal = new bootstrap.Modal(document.getElementById('contactConfirmationModal'));

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        modal.show();
        contactForm.reset();
    });
});
