'use client';

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

import profileImage from '../../public/profile.jpeg';
import { rolesSequence } from '../../data/roles';

const AboutMeBio = () => {

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image src={profileImage} className="rounded-lg w-96" alt="Portrait of Paweł Jędrasik" />
			</div>
			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<div className="mb-4 h-20 sm:h-24 lg:h-20 xl:h-auto">
					<span className="text-ternary-dark dark:text-ternary-light text-3xl">
						Hi, I&apos;m Paweł Jędrasik. 
					</span>
					<TypeAnimation 
					preRenderFirstString
					className="text-ternary-dark dark:text-ternary-light text-3xl"
					sequence={rolesSequence}
					wrapper="span"
					speed={30}
					deletionSpeed={60}
					repeat={Infinity}
					/>
				</div>
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">🚀 Senior full-stack engineer from Kraków with 8+ years of experience building real-time web and mobile apps for retail, healthcare and vacation rentals.</p>
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">💻 Strongest in React and TypeScript, also working with React Native and AWS serverless (Node.js). I deliver features on my own, including tests and performance, and mentor others.</p>
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">💡 By day I ship the latest features at Smoobu, a vacation rental platform. By night I build and run Joiyn, a social events app I released alone to the App Store and Google Play.</p>
			</div>
		</div>
	);
};

export default AboutMeBio;