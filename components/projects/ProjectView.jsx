'use client';

import ProjectHeader from './ProjectHeader';
import ProjectInfo from './ProjectInfo';
import ProjectThumbnailGallery from './ProjectThumbnailGallery';
import { motion } from 'framer-motion';
import { SingleProjectProvider } from '../../context/SingleProjectContext';

const ProjectView = ({ projectId }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader projectId={projectId} />
				<ProjectInfo projectId={projectId} />
				<ProjectThumbnailGallery projectId={projectId} />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectView;
