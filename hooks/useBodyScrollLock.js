import { useEffect } from 'react';

// Stops the page behind a modal from scrolling while `locked` is true.
export default function useBodyScrollLock(locked) {
	useEffect(() => {
		if (!locked) return;
		const root = document.documentElement;
		root.classList.add('overflow-y-hidden');
		return () => root.classList.remove('overflow-y-hidden');
	}, [locked]);
}
