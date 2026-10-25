'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../../lib/nav';
import { cvPath } from '../../lib/site';

const CvButton = ({ className = '' }) => (
	<a
		download="resumePJ.pdf"
		href={cvPath}
		aria-label="Download CV"
		className={`btn-gradient !px-4 !py-2 !text-xs ${className}`}
	>
		<FiDownload aria-hidden="true" />
		CV
	</a>
);

// Floating pill navigation: always visible, sits over the page content.
const AppHeader = () => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const [hovered, setHovered] = useState(null);

	const isActive = (href) =>
		href === '/' ? pathname === '/' : !href.includes('#') && pathname.startsWith(href);

	return (
		<header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4">
			<div className="flex w-full max-w-md items-center justify-between rounded-full border border-white/10 bg-ink/60 py-2 pl-2 pr-2 shadow-[0_10px_40px_-14px_rgba(79,141,255,0.6)] backdrop-blur-xl md:w-auto md:max-w-none md:justify-center md:gap-1">
				<Link
					href="/"
					aria-label="Home"
					className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet via-brand-blue to-brand-teal font-display text-sm font-bold text-ink transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,141,255,0.7)] md:mr-2"
				>
					PJ
				</Link>

				{/* Mobile: name and role fill the bar next to the logo */}
				<div className="ml-3 mr-auto min-w-0 leading-tight md:hidden">
					<p className="truncate font-display text-sm font-semibold text-white">Paweł Jędrasik</p>
					<p className="hidden truncate text-[11px] text-muted min-[370px]:block">
						Senior Full-Stack Developer
					</p>
				</div>

				<nav aria-label="Main" className="hidden md:block">
					<ul className="flex items-center gap-0.5" onMouseLeave={() => setHovered(null)}>
						{navItems.map(({ href, label }) => {
							const active = isActive(href);
							return (
								<li
									key={label}
									onMouseEnter={() => setHovered(label)}
									onFocus={() => setHovered(label)}
									onBlur={() => setHovered(null)}
								>
									<Link
										href={href}
										aria-current={active ? 'page' : undefined}
										className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
											active || hovered === label ? 'text-white' : 'text-muted'
										}`}
									>
										{/* Highlight that slides to whichever item is hovered or focused */}
										{hovered === label && (
											<motion.span
												layoutId="nav-hover"
												className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-violet/25 to-brand-teal/20 ring-1 ring-white/10"
												transition={{ type: 'spring', stiffness: 500, damping: 36 }}
											/>
										)}
										{active && (
											<motion.span
												layoutId="nav-pill"
												className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
												transition={{ type: 'spring', stiffness: 400, damping: 32 }}
											/>
										)}
										<span className="relative">{label}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				<CvButton className="ml-2 hidden md:inline-flex" />

				<div className="flex shrink-0 items-center gap-1 md:hidden">
					<a
						download="resumePJ.pdf"
						href={cvPath}
						aria-label="Download CV"
						className="btn-gradient !h-9 !w-9 !rounded-full !p-0 text-base"
					>
						<FiDownload aria-hidden="true" />
					</a>
					<button
						type="button"
						onClick={() => setMenuOpen((open) => !open)}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						className="rounded-full p-2.5 text-xl text-white"
					>
						{menuOpen ? <FiX /> : <FiMenu />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{menuOpen && (
					<motion.nav
						id="mobile-menu"
						aria-label="Mobile"
						initial={{ opacity: 0, y: -12, scale: 0.97 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -12, scale: 0.97 }}
						transition={{ duration: 0.25, ease: 'easeOut' }}
						className="mt-3 w-full max-w-md rounded-3xl border border-white/10 bg-ink/90 p-3 backdrop-blur-xl md:hidden"
					>
						<ul className="space-y-1">
							{navItems.map(({ href, label, icon: Icon }) => (
								<li key={label}>
									<Link
										href={href}
										onClick={() => setMenuOpen(false)}
										aria-current={isActive(href) ? 'page' : undefined}
										className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/[0.07] hover:text-white ${
											isActive(href) ? 'bg-white/10 text-white' : 'text-muted'
										}`}
									>
										<Icon aria-hidden="true" className="text-lg text-brand-teal" />
										{label}
									</Link>
								</li>
							))}
							<li className="px-1 pt-2">
								<CvButton className="w-full !py-3 !text-sm" />
							</li>
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default AppHeader;
