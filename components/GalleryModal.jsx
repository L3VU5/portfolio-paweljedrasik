'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { FiX } from 'react-icons/fi';

const GalleryModal = ({ onClose, images, title, startIndex }) => {
	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [onClose]);

	return (
		<motion.div
			role="dialog"
			aria-modal="true"
			aria-label={title}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
		>
			<button
				type="button"
				aria-label="Close gallery"
				onClick={onClose}
				className="absolute inset-0 h-full w-full cursor-default bg-ink/80 backdrop-blur-md"
			/>

			<motion.div
				initial={{ opacity: 0, y: 24, scale: 0.97 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.35, ease: 'easeOut' }}
				className="tile relative w-full max-w-4xl !rounded-[2rem] bg-ink-900/95"
			>
				<div className="flex items-center justify-between gap-6 border-b border-white/10 px-6 py-4">
					<h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close"
						className="rounded-full border border-white/10 p-2 text-xl text-white transition hover:border-brand-violet hover:bg-brand-violet/20"
					>
						<FiX aria-hidden="true" />
					</button>
				</div>
				<ImageGallery items={images} startIndex={startIndex} showPlayButton={false} showBullets />
			</motion.div>
		</motion.div>
	);
};

export default GalleryModal;
