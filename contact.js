/**
 * Client-side form validation and submission using the mailto protocol.
 * NOTE: This method requires the user to have an email client set up on their device
 * and requires them to manually click 'Send' in the opened client.
 * Secure, direct email sending requires a backend server or a third-party service (e.g., EmailJS, Formspree).
 */
const TARGET_EMAIL = "amishv20@gmail.com";

// Helper function to show/hide error messages
function displayError(id, message) {
    const errorElement = document.getElementById(`error${id}`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = message ? 'block' : 'none';
    }
}

// Simple email validation regex
function isValidEmail(email) {
    // Basic regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// 1. Validation Logic
function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    ['FullName', 'Email', 'Subject', 'Message'].forEach(id => displayError(id, ''));

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (fullName === '') {
        displayError('FullName', 'Full Name is required.');
        isValid = false;
    }
    
    if (email === '') {
        displayError('Email', 'Email Address is required.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('Email', 'Please enter a valid email address.');
        isValid = false;
    }

    if (subject === '') {
        displayError('Subject', 'Subject is required.');
        isValid = false;
    }

    if (message === '') {
        displayError('Message', 'Message content is required.');
        isValid = false;
    }

    return isValid;
}


// 2. Submission Handler (using mailto)
function submitForm(event) {
    event.preventDefault(); // Stop default form submission

    const statusDiv = document.getElementById('formStatus');
    statusDiv.textContent = ''; // Clear status

    if (!validateForm()) {
        statusDiv.textContent = 'Please correct the errors above.';
        statusDiv.style.color = 'var(--primary)';
        return false;
    }

    // --- Build the mailto link ---
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const position = document.getElementById('position').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Body content template
    let body = `From: ${fullName} (${email})\n`;
    if (company) body += `Company: ${company}\n`;
    if (position) body += `Position: ${position}\n`;
    body += `\n---\n\n${message}`;

    // Encode values for the URL
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry: ${subject}`);
    const mailtoBody = encodeURIComponent(body);

    const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Update status and open email client
    statusDiv.textContent = 'Opening your email client... Please click send in the new window.';
    statusDiv.style.color = 'var(--success)'; // Use success color for positive feedback

    window.location.href = mailtoLink;

    // Optionally reset the form after successful action initiation
    document.getElementById('contactForm').reset();
    
    return true;
}

// Attach the submitForm function to the window object so it's globally accessible 
// by the onsubmit attribute in the HTML.
window.submitForm = submitForm;
