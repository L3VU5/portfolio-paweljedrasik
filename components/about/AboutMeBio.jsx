'use client';

import profileImage from '../../public/profile.jpeg';
import Image from 'next/image'

const AboutMeBio = () => {

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
			</div>
		</div>
	);
};

export default AboutMeBio;
