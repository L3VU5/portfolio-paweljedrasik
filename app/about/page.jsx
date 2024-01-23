'use client';

import AboutMeBio from '../../components/about/AboutMeBio';
import AboutCounter from '../../components/about/AboutCounter';
import Technologies from '../../components/about/Technologies';
import { motion } from 'framer-motion';
import { TechnologiesProvider } from '../../context/TechnologiesContext';

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

			<TechnologiesProvider>
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="container mx-auto"
				>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					>
					<AboutCounter />
					<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="container mx-auto"
				>
					<Technologies />
					</motion.div>
				</motion.div>
			</TechnologiesProvider>
		</>
	);
};

export default About;
