'use client';

import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import ProjectHeader from './ProjectHeader';
import ProjectInfo from './ProjectInfo';
import ProjectThumbnailGallery from './ProjectThumbnailGallery';

const ProjectView = ({ projectId }) => {
	return (
		<div className="mx-auto max-w-[76rem] px-5 pb-4 pt-32 sm:px-8 lg:pt-40">
			<Link href="/projects" className="btn-glass group !px-4 !py-2 !text-xs">
				<FiArrowLeft aria-hidden="true" className="transition group-hover:-translate-x-1" />
				All projects
			</Link>

			<ProjectHeader projectId={projectId} />
			<ProjectInfo projectId={projectId} />
			<ProjectThumbnailGallery projectId={projectId} />
		</div>
	);
};

export default ProjectView;
