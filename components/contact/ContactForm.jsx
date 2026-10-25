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
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<div className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
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

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							onChange={e => setFormValues(prev => ({...prev, message: e.target.value}))}
							value={message}
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title={isSending ? 'Sending...' : 'Send Message'}
							onClick={onEmailSend}
							disabled={isSending}
						/>
					</div>
					{status.text && (
						<p
							role="status"
							className={`mt-4 text-sm ${
								status.type === 'error'
									? 'text-red-500'
									: status.type === 'success'
										? 'text-green-600 dark:text-green-400'
										: 'text-ternary-dark dark:text-ternary-light'
							}`}
						>
							{status.text}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
