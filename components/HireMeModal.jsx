'use client';

import { useEffect, useState } from 'react';
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

	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [onClose]);

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
			role="dialog"
			aria-modal="true"
			aria-labelledby="hire-me-title"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
		>
			{/* Modal Backdrop */}
			<div
				aria-hidden="true"
				onClick={onClose}
				className="absolute inset-0 bg-ink/80 backdrop-blur-md"
			></div>

			{/* Modal Content */}
			<motion.div
				initial={{ opacity: 0, y: 24, scale: 0.97 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.35, ease: 'easeOut' }}
				className="tile relative max-h-full w-full max-w-xl overflow-y-auto !rounded-[2rem] bg-ink-900/95"
			>
				<div className="flex items-center justify-between gap-10 border-b border-white/10 px-6 py-5">
					<h2 id="hire-me-title" className="text-2xl font-semibold tracking-tight text-white">
						What are you looking for?
					</h2>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close dialog"
						className="rounded-full border border-white/10 p-2 text-xl text-white transition hover:border-brand-violet hover:bg-brand-violet/20"
					>
						<FiX aria-hidden="true" />
					</button>
				</div>

				<div className="space-y-5 p-6">
					<input
						className="field"
						id="hire-name"
						name="name"
						type="text"
						required
						placeholder="Name"
						aria-label="Name"
						onChange={e => setFormValues(prev => ({...prev, name: e.target.value}))}
						value={name}
					/>
					<input
						className="field"
						id="hire-email"
						name="email"
						type="email"
						required
						placeholder="Email"
						aria-label="Email"
						onChange={e => setFormValues(prev => ({...prev, email: e.target.value}))}
						value={email}
					/>
					<select
						className="field"
						id="hire-subject"
						name="subject"
						required
						aria-label="Project Category"
						onChange={e => setFormValues(prev => ({...prev, subject: e.target.value}))}
						value={subject}
					>
						{selectOptions.map((option) => (
							<option value={option} key={option}>
								{option}
							</option>
						))}
					</select>
					<textarea
						className="field"
						id="hire-message"
						name="message"
						cols="14"
						rows="6"
						aria-label="Details"
						placeholder="Position description..."
						onChange={e => setFormValues(prev => ({...prev, message: e.target.value}))}
						value={message}
					></textarea>
				</div>

				{errorText && (
					<p role="alert" className="px-6 text-sm text-red-400">
						{errorText}
					</p>
				)}
				<div className="flex justify-between gap-4 p-6">
					<Button onClick={onClose} className="btn-glass" title="Close" />
					<Button
						className="btn-gradient"
						onClick={onEmailSend}
						disabled={isSending}
						title={isSending ? 'Sending...' : 'Send'}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default HireMeModal;
