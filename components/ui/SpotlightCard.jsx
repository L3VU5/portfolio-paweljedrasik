'use client';

import { useRef } from 'react';

// A tile whose border and background glow where the cursor is.
const SpotlightCard = ({ as: Tag = 'div', className = '', children, ...props }) => {
	const ref = useRef(null);

	const onPointerMove = (event) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		el.style.setProperty('--x', `${event.clientX - rect.left}px`);
		el.style.setProperty('--y', `${event.clientY - rect.top}px`);
	};

	return (
		<Tag ref={ref} onPointerMove={onPointerMove} className={`tile ${className}`} {...props}>
			{children}
		</Tag>
	);
};

export default SpotlightCard;
