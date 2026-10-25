'use client';

import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';
import Stat from '../ui/Stat';
import { projectsData } from '../../data/projects';
import { technologiesData } from '../../data/technologies';
import { commercialProducts, cvPath, yearsOfExperience } from '../../lib/site';

const stack = [
	{ label: 'Frontend', items: ['React', 'TypeScript', 'MUI', 'TanStack Query'] },
	{ label: 'Mobile', items: ['React Native', 'Expo'] },
	{ label: 'Backend', items: ['Node.js', 'PHP'] },
	{ label: 'Cloud', items: ['AWS Lambda', 'DynamoDB', 'API Gateway'] },
];

const now = [
	{
		href: '/projects/10',
		title: 'Smoobu',
		text: 'Senior Full-Stack Developer, shipping the latest features of a vacation rental platform.',
	},
	{
		href: '/projects/9',
		title: 'Joiyn',
		text: 'My own social events app: designed, built and released alone, live on iOS and Android.',
	},
];

const AboutBento = () => (
	<section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8">
		<div className="mx-auto max-w-6xl">
			<Reveal>
				<SectionHeading eyebrow="About" title="Full-stack," accent="end to end." />
			</Reveal>

			<div className="mt-12 grid gap-4 md:grid-cols-4">
				<Reveal className="md:col-span-2 md:row-span-2">
					<SpotlightCard className="flex h-full flex-col justify-between gap-8 p-7 sm:p-9">
						<div>
							<p className="text-lg leading-relaxed text-slate-300">
								I&rsquo;m Paweł, a full-stack engineer from Kraków. I&rsquo;m strongest in React and
								TypeScript, and I also work with React Native and AWS serverless.
							</p>
							<p className="mt-4 leading-relaxed text-muted">
								I deliver features on my own, including tests and performance, and I mentor others.
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<Link href="/about" className="btn-gradient group">
								More about me
								<FiArrowRight
									aria-hidden="true"
									className="transition group-hover:translate-x-1"
								/>
							</Link>
							<a href={cvPath} download="resumePJ.pdf" className="btn-glass">
								<FiDownload aria-hidden="true" />
								Download CV
							</a>
						</div>
					</SpotlightCard>
				</Reveal>

				<Reveal delay={0.05}>
					<Stat end={yearsOfExperience} suffix="+" label="Years of experience" className="h-full" />
				</Reveal>
				<Reveal delay={0.1}>
					<Stat end={technologiesData.length} label="Technologies used" className="h-full" />
				</Reveal>
				<Reveal delay={0.15}>
					<Stat end={commercialProducts} label="Commercial products delivered" className="h-full" />
				</Reveal>
				<Reveal delay={0.2}>
					<Stat end={projectsData.length} label="Projects showcased" className="h-full" />
				</Reveal>

				<Reveal delay={0.1} className="md:col-span-2">
					<SpotlightCard className="h-full p-7">
						<h3 className="text-lg font-semibold text-white">Right now</h3>
						<ul className="mt-5 space-y-3">
							{now.map(({ href, title, text }) => (
								<li key={title}>
									<Link
										href={href}
										className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-violet/50 hover:bg-white/[0.06]"
									>
										<span>
											<span className="block font-semibold text-white">{title}</span>
											<span className="mt-1 block text-sm leading-snug text-muted">{text}</span>
										</span>
										<FiArrowUpRight
											aria-hidden="true"
											className="mt-1 shrink-0 text-lg text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
										/>
									</Link>
								</li>
							))}
						</ul>
					</SpotlightCard>
				</Reveal>

				<Reveal delay={0.2} className="md:col-span-2">
					<SpotlightCard className="h-full p-7">
						<div className="flex items-center justify-between gap-4">
							<h3 className="text-lg font-semibold text-white">Core stack</h3>
							<Link
								href="/about#skills"
								className="text-sm font-medium text-brand-teal transition hover:text-white"
							>
								All skills &rarr;
							</Link>
						</div>
						<dl className="mt-5 space-y-4">
							{stack.map(({ label, items }) => (
								<div key={label} className="flex flex-wrap items-center gap-x-4 gap-y-2">
									<dt className="w-20 shrink-0 text-xs font-medium uppercase tracking-wider text-muted">
										{label}
									</dt>
									<dd className="flex flex-wrap gap-2">
										{items.map((item) => (
											<span key={item} className="tag">
												{item}
											</span>
										))}
									</dd>
								</div>
							))}
						</dl>
					</SpotlightCard>
				</Reveal>
			</div>
		</div>
	</section>
);

export default AboutBento;
