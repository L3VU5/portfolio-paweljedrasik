'use client';

import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const technologies = ['JavaScript', 'TypeScript', 'React', 'React Native', 'iOS', 'Android', 'Linux', 'C++', 'Docker', 'AngularJS', 'HTML', 'CSS', 'SCSS', 'JSON', 'REST', 'Ajax', 'Git', 'GitHub', 'GitLab', 'npm', 'jQuery', 'Figma', 'MUI', 'Tailwind CSS', 'NextUI', 'Styled Components', 'NodeJS', 'ExpressJS', 'NextJS', 'MongoDB', 'GraphQL', 'Figma', 'Jest', 'Puppeteer', 'ESLint', 'Lodash', 'Redux', 'Redux Saga', 'Azure DevOps', 'Framer Motion', 'Firebase', 'SignalR', 'AzureSSO', 'RWD', 'OOP', 'MVC', 'Flux', 'Flipper', 'Android Studio', 'Xcode', 'MacOS', 'Vercel', 'TeamCity', 'Visual Studio', 'NFC', 'QR', 'Webpack', 'Babel', 'Husky', 'Prettier',' Axios', 'Moment JS', 'i18', 'Match Sorter', 'PropTypes', 'Reselect', 'Codemagic', 'TestFlight', 'CI/CD', 'Watchman', 'Metro', 'Google Play Console', 'App Store Connect', 'Fork'];

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 6, duration: 3 });
	useCountUp({ ref: 'projectsCounter', end: 84, duration: 3 });
	useCountUp({ ref: 'technologiesCounter', end: technologies.length, duration: 3 });
	useCountUp({ ref: 'productsCounter', end: 3, duration: 3 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>				
				<CounterItem
					title="Technologies used"
					counter={<span id="technologiesCounter" />}
					measurement=""
				/>			
				<CounterItem
					title="Comercial products delivered"
					counter={<span id="productsCounter" />}
					measurement=""
				/>
				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
