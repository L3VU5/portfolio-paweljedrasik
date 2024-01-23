'use client';

import { useContext } from 'react';
import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import { TechnologiesContext } from '../../context/TechnologiesContext';

const AboutCounter = () => {
	const { technologiesLength } = useContext(TechnologiesContext);
	useCountUp({ ref: 'experienceCounter', end: 6, duration: 3 });
	useCountUp({ ref: 'projectsCounter', end: 84, duration: 3 });
	useCountUp({ ref: 'technologiesCounter', end: technologiesLength, duration: 3 });
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
