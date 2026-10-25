import emailjs from '@emailjs/browser';

// EmailJS identifiers are public by design: they are meant to ship in the browser bundle.
const SERVICE_ID = 'service_os9us0g';
const TEMPLATE_ID = 'template_urgjtk9';
const PUBLIC_KEY = 'RrPqwES20YCBweoTm';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sendMessage(values) {
	return emailjs.send(SERVICE_ID, TEMPLATE_ID, values, { publicKey: PUBLIC_KEY });
}

// Returns an error message, or null when the form can be sent.
export function validateMessage({ name, email, subject, message }) {
	if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
		return 'Please fill in your name, email, subject and message.';
	}
	if (!EMAIL_PATTERN.test(email.trim())) {
		return 'Please enter a valid email address.';
	}
	return null;
}
