'use client';

import { motion } from 'framer-motion';

// Fades and slides its children in once they scroll into view.
const Reveal = ({ children, delay = 0, y = 24, className }) => (
	<motion.div
		className={className}
		initial={{ opacity: 0, y }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: '-60px' }}
		transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
	>
		{children}
	</motion.div>
);

export default Reveal;
