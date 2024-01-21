'use client';

import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from '@emailjs/browser';
import {useState} from 'react';


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
	const {name, email, subject, message} = formValues;

	function onEmailSend() {
		emailjs.send('service_os9us0g', 'template_urgjtk9', formValues, 'RrPqwES20YCBweoTm')
		.then((response) => {
		   console.log('SUCCESS!', response.status, response.text);
		}, (err) => {
		   console.log('FAILED...', err);
		});
		setFormValues(getDefaultFormValues());
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
							title="Send Message"
							aria-label="Send Message"
							onClick={onEmailSend}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
