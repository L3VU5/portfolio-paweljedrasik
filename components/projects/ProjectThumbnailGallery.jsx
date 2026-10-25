'use client';

import Image from 'next/image'
import { useState } from 'react';
import { singleProjectData } from '../../data/singleProjectData';
import GalleryModal from '../GalleryModal';
import Reveal from '../ui/Reveal';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const ProjectThumbnailGallery = ({projectId}) => {
	const project = singleProjectData[projectId];
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const isOpen = selectedImageIndex !== null;
	useBodyScrollLock(isOpen);
	const images = project?.ProjectImages?.map(({img}) => ({original: img.src}))
	// Desktop screenshots are landscape and need bigger tiles than phone screenshots.
	const projectImages = project.ProjectImages ?? [];
	const isWide = projectImages.filter(({ img }) => img.width > img.height).length > projectImages.length / 2;

	return (
		<section className="mt-24" aria-label="Gallery">
			<Reveal>
				<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Gallery</h2>
			</Reveal>

			<ul
				className={`mt-10 grid gap-4 ${
					isWide ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
				}`}
			>
				{projectImages.map((image, index) => (
					<li key={image.id}>
						<button
							type="button"
							onClick={() => setSelectedImageIndex(index)}
							aria-label={`Open ${image.title}`}
							className={`tile tile-lift group relative block w-full p-2 ${
								isWide ? 'aspect-[16/10]' : 'h-72'
							}`}
						>
							<Image
								src={image.img}
								alt={image.title}
								fill
								sizes={isWide ? '(min-width: 640px) 40vw, 90vw' : '(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw'}
								className="object-contain p-2 transition duration-500 group-hover:scale-105"
							/>
						</button>
					</li>
				))}
			</ul>

			{isOpen && (
				<GalleryModal
					startIndex={selectedImageIndex}
					images={images}
					onClose={() => setSelectedImageIndex(null)}
					title={`${project.ProjectHeader.title} gallery`}
				/>
			)}
		</section>
	);
};

export default ProjectThumbnailGallery;
