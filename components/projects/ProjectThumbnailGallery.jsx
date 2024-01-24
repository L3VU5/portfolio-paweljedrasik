'use client';

import Image from 'next/image'
import { useContext, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import GalleryModal from '../GalleryModal';

const ProjectThumbnailGallery = ({projectId}) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const project = singleProjectData[projectId];
	const [showModal, setShowModal] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const images = project?.ProjectImages?.map(({img}) => ({original: img.src}))

	function showHireMeModal(index) {
		if (!showModal) {
			setSelectedImageIndex(index);
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			setSelectedImageIndex(0);
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				Gallery
			</p>

			<div className="flex gap-10 flex-wrap justify-center">
				{project.ProjectImages?.map((project, index) => {
					return (
						<div key={project.id} className='h-64 w-72 rounded-xl cursor-pointer flex items-center justify-center overflow-hidden dark:bg-ternary-dark'>
							<Image
								height={254}
								src={project.img}
								alt={project.title}
								onClick={() => showHireMeModal(index)}
								/>
						</div>
					);
				})}
			</div>
				{/* Hire me modal */}
				<div>
					{showModal ? (
						<GalleryModal
							startIndex={selectedImageIndex}
							images={images}
							onClose={showHireMeModal}
							title={`${project.ProjectHeader.title} gallery`}
						/>
					) : null}
					{showModal ? showHireMeModal : null}
				</div>
		</div>
	);
};

export default ProjectThumbnailGallery;
