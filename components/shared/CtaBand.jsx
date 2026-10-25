'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from '../ui/Reveal';
import { contactEmail } from '../../lib/site';

const CtaBand = () => (
	<section className="px-5 pt-24 sm:px-8">
		<div className="mx-auto max-w-6xl">
			<Reveal>
				<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-violet/25 via-ink-800/60 to-brand-teal/20 p-8 sm:p-14">
					<div
						aria-hidden="true"
						className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-violet/40 blur-3xl"
					/>
					<div
						aria-hidden="true"
						className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-warm-amber/15 blur-3xl"
					/>
					<h2 className="relative max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
						Have a project or a role in mind? <span className="gradient-text">Let&rsquo;s talk.</span>
					</h2>
					<div className="relative mt-8 flex flex-wrap gap-3">
						<Link href="/contact" className="btn-gradient group">
							Get in touch
							<FiArrowRight
								aria-hidden="true"
								className="transition group-hover:translate-x-1"
							/>
						</Link>
						<a href={`mailto:${contactEmail}`} className="btn-glass">
							{contactEmail}
						</a>
					</div>
				</div>
			</Reveal>
		</div>
	</section>
);

export default CtaBand;
