'use client';

import emailjs from '@emailjs/browser';
import {useState} from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';

const selectOptions = [
	'Senior Frontend Developer',
	'JavaScript Fullstack Developer',
	'Senior Mobile Developer',
	'UI/UX Designer',
];

const HireMeModal = ({ onClose, onRequest }) => {
	function getDefaultFormValues() {
		return {
			name: '',
			email: '',
			subject:'Senior Frontend Developer',
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
		onRequest();
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
										defaultValue='Senior Frontend Developer'
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
									title="Send" />
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
