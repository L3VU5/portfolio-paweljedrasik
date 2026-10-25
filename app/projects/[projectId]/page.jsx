import ProjectView from '../../../components/projects/ProjectView';
import { singleProjectData } from '../../../data/singleProjectData';

// Only the projects listed in the data exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
	return Object.keys(singleProjectData).map((projectId) => ({ projectId }));
}

export async function generateMetadata({ params }) {
	const { projectId } = await params;
	const project = singleProjectData[projectId];
	return {
		title: project.ProjectHeader.title,
		description: project.ProjectInfo.ObjectivesDetails,
	};
}

const ProjectPage = async ({ params }) => {
	const { projectId } = await params;
	return <ProjectView projectId={projectId} />;
};

export default ProjectPage;
