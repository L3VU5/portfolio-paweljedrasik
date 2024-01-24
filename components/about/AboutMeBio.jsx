'use client';

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

import profileImage from '../../public/profile.jpeg';

const AboutMeBio = () => {

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image src={profileImage} className="rounded-lg w-96" alt="" />
			</div>
			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<div className="mb-4 h-20 sm:h-24 lg:h-20 xl:h-auto">
					<span className="text-ternary-dark dark:text-ternary-light text-3xl">
						Hi, I'm Paweł Jędrasik. 
					</span>
					<TypeAnimation 
					preRenderFirstString
					className="text-ternary-dark dark:text-ternary-light text-3xl"
					sequence={[
						' A Frontend Developer.',
						2000 , 
						' A React Expert.',
						1500,
						' A Mobile Software Developer.',
						1500,
						' A JavaScript Fullstack Developer.',
						1500,
					]}
					wrapper="span"
					speed={30}
					deletionSpeed={60}
					repeat={Infinity}
					/>
				</div>
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">🚀 Passionate Software Developer from Kraków with 6+ years of industry experience in designing and developing dynamic web and mobile applications.</p>
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">💻 Enthusiastic about experimenting with the newest technologies and frameworks to improve my skill set.</p>
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">💡 Specialized in JavaScript, with hands-on experience in building impactful solutions using React, React Native, and AngularJS.</p>
			</div>
		</div>
	);
};

export default AboutMeBio;