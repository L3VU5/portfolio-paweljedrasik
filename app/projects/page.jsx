import ProjectsGrid from '../../components/projects/ProjectsGrid';
import CtaBand from '../../components/shared/CtaBand';
import SectionHeading from '../../components/ui/SectionHeading';
import { ProjectsProvider } from '../../context/ProjectsContext';

export const metadata = {
	title: 'Projects',
	description: 'Web and mobile products I have built: Joiyn, Smoobu, Portertrac, RiskReady and more.',
};

const Projects = () => {
	return (
		<>
			<div className="mx-auto max-w-[76rem] px-5 pb-4 pt-32 sm:px-8 lg:pt-40">
				<SectionHeading as="h1" eyebrow="Portfolio" title="Selected" accent="work." />
				<div className="mt-12">
					<ProjectsProvider>
						<ProjectsGrid />
					</ProjectsProvider>
				</div>
			</div>
			<CtaBand />
		</>
	);
};

export default Projects;
