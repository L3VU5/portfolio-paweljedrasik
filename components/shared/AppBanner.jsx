'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import Portrait from '../ui/Portrait';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const ease = [0.22, 1, 0.36, 1];

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const AppBanner = () => {
	const [showModal, setShowModal] = useState(false);
	useBodyScrollLock(showModal);

	return (
		<section id="hero" className="relative px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-44">
			<div className="mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
				<motion.div variants={container} initial="hidden" animate="show">
					<motion.p variants={item} className="pill">
						<span
							aria-hidden="true"
							className="h-2 w-2 animate-pulse-dot rounded-full bg-brand-teal"
						/>
						{/* On phones the nav bar already shows the name and role. */}
						<span className="md:hidden">Kraków, Poland &middot; hybrid</span>
						<span className="hidden md:inline">Paweł Jędrasik &middot; Senior Full-Stack Developer</span>
					</motion.p>

					<motion.h1
						variants={item}
						className="mt-7 text-[clamp(2.4rem,4.9vw,4.1rem)] font-semibold leading-[1.06] tracking-tight text-white"
					>
						I build <span className="gradient-text">fast, reliable</span> products for web, mobile
						and the cloud.
					</motion.h1>

					<motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
						8+ years of shipping real-time apps for retail, healthcare and vacation rentals. React
						and TypeScript on the front, AWS serverless on the back and React Native in between.
					</motion.p>

					<motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
						<Link href="/projects" className="btn-gradient group">
							See my work
							<FiArrowRight
								aria-hidden="true"
								className="transition group-hover:translate-x-1"
							/>
						</Link>
						<button type="button" onClick={() => setShowModal(true)} className="btn-glass">
							Let&rsquo;s talk
						</button>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.94, y: 30 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 1, ease, delay: 0.3 }}
					className="px-3 pb-8 sm:px-10 lg:px-4"
				>
					<Portrait priority />
				</motion.div>
			</div>

			{showModal && (
				<HireMeModal
					onClose={() => setShowModal(false)}
					onRequest={() => setShowModal(false)}
				/>
			)}
		</section>
	);
};

export default AppBanner;
