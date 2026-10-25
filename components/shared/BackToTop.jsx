'use client';

import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 600);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<button
			type="button"
			aria-label="Back to top"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			className={`btn-gradient fixed bottom-6 right-6 z-30 !h-12 !w-12 !rounded-full !p-0 text-lg ${
				visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
			}`}
		>
			<FiArrowUp aria-hidden="true" />
		</button>
	);
};

export default BackToTop;
