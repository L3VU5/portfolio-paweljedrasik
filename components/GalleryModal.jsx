'use client';

import { motion } from 'framer-motion';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FiX } from 'react-icons/fi';

const GalleryModal = ({ onClose, images, title, startIndex }) => {
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
					<div className="modal mx-5 max-w-screen bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">

					<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								{title}
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<ImageGallery items={images} startIndex={startIndex} showPlayButton={false} showBullets />
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default GalleryModal;
