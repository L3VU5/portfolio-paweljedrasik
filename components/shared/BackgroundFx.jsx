'use client';

import { useEffect, useRef } from 'react';

// Fixed page background: dot grid, drifting aurora, film grain and a soft light that follows the cursor.
const BackgroundFx = () => {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		const canHover = window.matchMedia('(pointer: fine)').matches;
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!el || !canHover || reduceMotion) return;

		let frame = 0;
		const onMove = (event) => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				el.style.setProperty('--mx', `${event.clientX}px`);
				el.style.setProperty('--my', `${event.clientY}px`);
			});
		};
		window.addEventListener('pointermove', onMove, { passive: true });
		return () => {
			window.removeEventListener('pointermove', onMove);
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<div
			ref={ref}
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
		>
			<div className="bg-dots absolute inset-0" />
			<div className="aurora aurora-violet" />
			<div className="aurora aurora-blue" />
			<div className="aurora aurora-teal" />
			<div className="aurora aurora-warm" />
			<div className="spotlight absolute inset-0" />
			<div className="noise absolute inset-0" />
		</div>
	);
};

export default BackgroundFx;
