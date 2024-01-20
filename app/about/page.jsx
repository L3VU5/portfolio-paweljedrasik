'use client';

import AboutMeBio from '../../components/about/AboutMeBio';
import AboutCounter from '../../components/about/AboutCounter';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
				>
				<AboutMeBio />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
				>
			</motion.div>
		</>
	);
};

export default About;
