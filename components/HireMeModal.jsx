'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';
import { sendMessage, validateMessage } from '../lib/sendMessage';

const selectOptions = [
	'Senior Full-Stack Developer',
	'Senior Frontend Developer',
	'Senior Mobile Developer',
	'AWS Serverless Developer',
];

const HireMeModal = ({ onClose, onRequest }) => {
	function getDefaultFormValues() {
		return {
			name: '',
			email: '',
			subject:'Senior Full-Stack Developer',
			message:'',
		}
	}
	const [formValues, setFormValues] = useState(getDefaultFormValues);
	const [errorText, setErrorText] = useState('');
	const [isSending, setIsSending] = useState(false);
	const {name, email, subject, message} = formValues;

	async function onEmailSend() {
		const validationError = validateMessage(formValues);
		if (validationError) {
			setErrorText(validationError);
			return;
		}

		setErrorText('');
		setIsSending(true);
		try {
			await sendMessage(formValues);
			onRequest();
		} catch (err) {
			console.error('Sending the message failed', err);
			setErrorText('Something went wrong. Please try again or use the email address on the Contact page.');
			setIsSending(false);
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								What are you looking for?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<div className="max-w-xl m-4 text-left">
								<div className="">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="name"
										type="text"
										required=""
										placeholder="Name"
										aria-label="Name"
										onChange={e => setFormValues(prev => ({...prev, name: e.target.value}))}
										value={name}
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="email"
										type="text"
										required=""
										placeholder="Email"
										aria-label="Email"
										onChange={e => setFormValues(prev => ({...prev, email: e.target.value}))}
										value={email}
									/>
								</div>
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="subject"
										name="subject"
										type="text"
										required=""
										aria-label="Project Category"
										onChange={e => setFormValues(prev => ({...prev, subject: e.target.value}))}
										value={subject}
									>
										{selectOptions.map((option) => (
											<option
												value={option}
												className="text-normal sm:text-md"
												key={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>

								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
										placeholder="Position description..."
										onChange={e => setFormValues(prev => ({...prev, message: e.target.value}))}
										value={message}
									></textarea>
								</div>
							</div>
						</div>
						{errorText && (
							<p role="alert" className="px-8 text-sm text-red-500">
								{errorText}
							</p>
						)}
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t flex justify-between">
								<Button 
									onClick={onClose}
									className="px-4
										sm:px-6
										py-2.5 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
										rounded-md
										focus:ring-1 focus:ring-indigo-900 duration-500" 
									title="Close" />
								<Button 
									className="px-4
										sm:px-6
										py-2
										sm:py-2.5
										text-white
										bg-indigo-500
										hover:bg-indigo-600
										rounded-md
										focus:ring-1 focus:ring-indigo-900 duration-500"
									onClick={onEmailSend}
									disabled={isSending}
									title={isSending ? 'Sending...' : 'Send'} />
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
