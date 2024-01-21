'use client';

import Image from 'next/image'
import { useContext, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import GalleryModal from '../GalleryModal';

const ProjectRelatedProjects = ({projectId}) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const project = singleProjectData[projectId];
	const [showModal, setShowModal] = useState(false);
	const images = project?.ProjectImages?.map(({img}) => ({original: img.src}))

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
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

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{project.ProjectImages?.map((project) => {
					return (
						<div className='h-64 w-72 rounded-xl cursor-pointer flex items-center justify-center overflow-hidden dark:bg-ternary-dark'>
							<Image
								height={254}
								src={project.img}
								alt={project.title}
								key={project.id}
								onClick={showHireMeModal}
								/>
						</div>
					);
				})}
			</div>
				{/* Hire me modal */}
				<div>
					{showModal ? (
						<GalleryModal
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

export default ProjectRelatedProjects;
