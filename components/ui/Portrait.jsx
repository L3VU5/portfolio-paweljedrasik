'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profileImage from '../../public/profile.jpeg';

const chips = [
	{ label: 'React', dot: '#61dafb', className: '-left-3 top-10 sm:-left-12', duration: 5 },
	{ label: 'TypeScript', dot: '#4f8dff', className: '-right-3 top-24 sm:-right-12', duration: 6 },
	{ label: 'AWS Lambda', dot: '#ffb347', className: '-left-3 bottom-36 sm:-left-14', duration: 7 },
	{ label: 'React Native', dot: '#2dd4bf', className: '-right-2 bottom-24 sm:-right-14', duration: 5.5 },
];

const spring = { stiffness: 150, damping: 18 };

// Portrait with a rotating gradient ring, a 3D tilt that follows the pointer and floating tech chips.
const Portrait = ({ priority = false, floating = true, className = '' }) => {
	const px = useMotionValue(0);
	const py = useMotionValue(0);
	const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);
	const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), spring);

	const onPointerMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		px.set((event.clientX - rect.left) / rect.width - 0.5);
		py.set((event.clientY - rect.top) / rect.height - 0.5);
	};
	const onPointerLeave = () => {
		px.set(0);
		py.set(0);
	};

	return (
		<div
			className={`relative mx-auto w-full max-w-sm ${className}`}
			style={{ perspective: 1000 }}
			onPointerMove={onPointerMove}
			onPointerLeave={onPointerLeave}
		>
			<motion.div style={{ rotateX, rotateY }} className="relative">
				<div
					aria-hidden="true"
					className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-brand-violet/45 via-brand-blue/20 to-warm-amber/35 blur-2xl"
				/>

				<div className="relative overflow-hidden rounded-[2rem] p-[2px]">
					<span
						aria-hidden="true"
						className="absolute -inset-[60%] animate-spin-slow bg-[conic-gradient(from_0deg,#8b5cf6,#4f8dff,#2dd4bf,#ffb347,#8b5cf6)]"
					/>
					<div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-2px)] bg-ink-800">
						<Image
							src={profileImage}
							alt="Portrait of Paweł Jędrasik"
							priority={priority}
							sizes="(min-width: 1024px) 24rem, 80vw"
							className="h-full w-full object-cover object-[50%_20%]"
						/>
						<div
							aria-hidden="true"
							className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
						/>
					</div>
				</div>

				{floating &&
					chips.map((chip) => (
						<motion.span
							key={chip.label}
							aria-hidden="true"
							className={`absolute flex items-center gap-2 rounded-full border border-white/15 bg-ink/70 px-3.5 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-xl ${chip.className}`}
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: chip.duration, repeat: Infinity, ease: 'easeInOut' }}
						>
							<span
								className="h-2 w-2 rounded-full"
								style={{ background: chip.dot, boxShadow: `0 0 10px ${chip.dot}` }}
							/>
							{chip.label}
						</motion.span>
					))}

				{floating && (
					<Link
						href="/projects/9"
						className="group absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-ink/75 px-4 py-3 backdrop-blur-xl transition hover:border-brand-teal/60 sm:-left-8 sm:right-auto"
					>
						<span className="h-2.5 w-2.5 shrink-0 animate-pulse-dot rounded-full bg-brand-teal" />
						<span className="text-sm leading-tight">
							<span className="block font-semibold text-white">Now live: Joiyn</span>
							<span className="block text-xs text-muted">My app on iOS and Android</span>
						</span>
					</Link>
				)}
			</motion.div>
		</div>
	);
};

export default Portrait;
