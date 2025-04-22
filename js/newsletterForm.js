export default function NewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const newsletterName = document.getElementById('newsletterName');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterCheck = document.getElementById('newsletterCheck');
    const errorMessages = document.querySelectorAll('.error-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        errorMessages.forEach(msg => {
            msg.textContent = '';
            msg.style.display = 'none';
        });

        if (newsletterName.value.trim() === '') {
            showError(newsletterName, 'Name is required');
            isValid = false;
        }

        if (!newsletterEmail.value.match(/^\S+@\S+\.\S+$/)) {
            showError(newsletterEmail, 'Enter a valid email');
            isValid = false;
        }

        if (!newsletterCheck.checked) {
            showError(newsletterCheck, 'You must agree to continue.');
            isValid = false;
        }

        if (isValid) {
            alert('Subscription successful!');
            form.reset();
        }
    });

    function showError(inputElement, message) {
        const error = inputElement.nextElementSibling;
        error.textContent = message;
        error.style.display = 'block';
    }
}
