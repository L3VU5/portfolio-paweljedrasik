'use client';

import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { useState } from 'react';
import { sendMessage, validateMessage } from '../../lib/sendMessage';


const ContactForm = () => {
	function getDefaultFormValues() {
		return {
			name: '',
			email: '',
			subject:'',
			message:'',
		}
	}
	const [formValues, setFormValues] = useState(getDefaultFormValues);
	const [status, setStatus] = useState({ type: 'idle', text: '' });
	const {name, email, subject, message} = formValues;
	const isSending = status.type === 'sending';

	async function onEmailSend() {
		const validationError = validateMessage(formValues);
		if (validationError) {
			setStatus({ type: 'error', text: validationError });
			return;
		}

		setStatus({ type: 'sending', text: 'Sending...' });
		try {
			await sendMessage(formValues);
			setFormValues(getDefaultFormValues());
			setStatus({ type: 'success', text: 'Thanks! Your message has been sent.' });
		} catch (err) {
			console.error('Sending the message failed', err);
			setStatus({
				type: 'error',
				text: 'Something went wrong. Please try again or use the email address next to this form.',
			});
		}
	}

	return (
		<div className="tile p-6 sm:p-9">
			<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Send a message</h2>
			<div className="mt-8">
				<FormInput
					inputLabel="Full Name"
					labelFor="name"
					inputType="text"
					inputId="name"
					inputName="name"
					placeholderText="Your Name"
					ariaLabelName="Name"
					onChange={e => setFormValues(prev => ({...prev, name: e.target.value}))}
					value={name}
				/>
				<FormInput
					inputLabel="Email"
					labelFor="email"
					inputType="email"
					inputId="email"
					inputName="email"
					placeholderText="Your email"
					ariaLabelName="Email"
					onChange={e => setFormValues(prev => ({...prev, email: e.target.value}))}
					value={email}
				/>
				<FormInput
					inputLabel="Subject"
					labelFor="subject"
					inputType="text"
					inputId="subject"
					inputName="subject"
					placeholderText="Subject"
					ariaLabelName="Subject"
					onChange={e => setFormValues(prev => ({...prev, subject: e.target.value}))}
					value={subject}
				/>

				<div className="mb-8">
					<label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">
						Message
					</label>
					<textarea
						className="field"
						id="message"
						name="message"
						cols="14"
						rows="6"
						aria-label="Message"
						onChange={e => setFormValues(prev => ({...prev, message: e.target.value}))}
						value={message}
					></textarea>
				</div>

				<Button
					className="btn-gradient w-full sm:w-auto"
					title={isSending ? 'Sending...' : 'Send Message'}
					onClick={onEmailSend}
					disabled={isSending}
				/>
				{status.text && (
					<p
						role="status"
						className={`mt-5 text-sm ${
							status.type === 'error'
								? 'text-red-400'
								: status.type === 'success'
									? 'text-emerald-400'
									: 'text-muted'
						}`}
					>
						{status.text}
					</p>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
