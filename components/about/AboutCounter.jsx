'use client';

import Reveal from '../ui/Reveal';
import Stat from '../ui/Stat';
import { projectsData } from '../../data/projects';
import { technologiesData } from '../../data/technologies';
import { commercialProducts, yearsOfExperience } from '../../lib/site';

const AboutCounter = () => {
	return (
		<section className="px-5 py-10 sm:px-8">
			<Reveal className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<Stat end={yearsOfExperience} suffix="+" label="Years of experience" />
				<Stat end={technologiesData.length} label="Technologies used" />
				<Stat end={commercialProducts} label="Commercial products delivered" />
				<Stat end={projectsData.length} label="Projects showcased" />
			</Reveal>
		</section>
	);
};

export default AboutCounter;
