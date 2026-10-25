import AppBanner from '../components/shared/AppBanner';
import AboutBento from '../components/home/AboutBento';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CtaBand from '../components/shared/CtaBand';
import Marquee from '../components/ui/Marquee';

const topRow = [
	'React', 'TypeScript', 'React Native', 'Node.js', 'AWS Lambda', 'DynamoDB',
	'API Gateway', 'TanStack Query', 'MUI', 'Expo', 'Redux', 'Vite',
];
const bottomRow = [
	'Vitest', 'Cypress', 'Testing Library', 'Docker', 'Datadog', 'PHP',
	'MySQL', 'RabbitMQ', 'CloudFront', 'GitHub Actions', 'Sentry', 'Figma',
];

const Home = () => {
	return (
		<>
			<AppBanner />
			<div className="border-y border-white/[0.06] bg-white/[0.015] py-6">
				<Marquee top={topRow} bottom={bottomRow} />
			</div>
			<AboutBento />
			<FeaturedProjects />
			<CtaBand />
		</>
	);
};

export default Home;
