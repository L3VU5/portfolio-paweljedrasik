"use client";

import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

import developer from '../../public/developer.svg';

const AppBanner = () => {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, I'm Pawel Jedrasik
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="mt-4 text-center h-auto sm:text-left md:h-16 xl:h-24"
				>
					<TypeAnimation 
						preRenderFirstString
						className="font-general-medium text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal text-gray-500 dark:text-gray-200"
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
						speed={30}
						deletionSpeed={60}
						repeat={Infinity}
					/>
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="resumePJ.pdf"
						href="/files/resumePJ.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-4 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 1, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<Image
				className="w-full"
				src={developer}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
