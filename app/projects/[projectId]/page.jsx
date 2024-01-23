'use client';

import ProjectHeader from '../../../components/projects/ProjectHeader';
import ProjectInfo from '../../../components/projects/ProjectInfo';
import ProjectThumbnailGallery from '../../../components/projects/ProjectThumbnailGallery';
import { motion } from 'framer-motion';
import { SingleProjectProvider } from '../../../context/SingleProjectContext';

const ProjectSingle = ({params}) => {  
	const {projectId} = params;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader projectId={projectId}/>
				<ProjectInfo projectId={projectId} />
				<ProjectThumbnailGallery projectId={projectId} />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
