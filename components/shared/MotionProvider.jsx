'use client';

import { MotionConfig } from 'framer-motion';

// Respect the visitor's "reduce motion" setting for every animation on the site.
const MotionProvider = ({ children }) => (
	<MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
