import AboutMeBio from '../../components/about/AboutMeBio';
import AboutCounter from '../../components/about/AboutCounter';
import Technologies from '../../components/about/Technologies';
import CtaBand from '../../components/shared/CtaBand';
import { TechnologiesProvider } from '../../context/TechnologiesContext';

export const metadata = {
	title: 'About',
	description:
		'Senior Full-Stack Developer from Kraków: React, TypeScript, React Native and AWS serverless.',
};

const About = () => {
	return (
		<TechnologiesProvider>
			<AboutMeBio />
			<AboutCounter />
			<Technologies />
			<CtaBand />
		</TechnologiesProvider>
	);
};

export default About;
