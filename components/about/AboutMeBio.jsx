'use client';

import Link from 'next/link';
import { FiDownload, FiMail } from 'react-icons/fi';
import Portrait from '../ui/Portrait';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { cvPath } from '../../lib/site';

const AboutMeBio = () => {
	return (
		<section className="px-5 pb-16 pt-32 sm:px-8 lg:pt-40">
			<div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
				<Reveal>
					<SectionHeading as="h1" eyebrow="About me" title="Hi, I’m Paweł." accent="Nice to meet you." />
					<div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
						<p>
							<span className="text-white">Senior full-stack engineer from Kraków</span> with 8+ years of
							experience building real-time web and mobile apps for retail, healthcare and vacation
							rentals.
						</p>
						<p>
							Strongest in React and TypeScript, also working with React Native and AWS serverless
							(Node.js). I deliver features on my own, including tests and performance, and mentor
							others.
						</p>
						<p>
							By day I ship the latest features at Smoobu, a vacation rental platform. By night I build
							and run <span className="text-white">Joiyn</span>, a social events app I released alone
							to the App Store and Google Play.
						</p>
					</div>
					<div className="mt-10 flex flex-wrap gap-3">
						<a href={cvPath} download="resumePJ.pdf" className="btn-gradient">
							<FiDownload aria-hidden="true" />
							Download CV
						</a>
						<Link href="/contact" className="btn-glass">
							<FiMail aria-hidden="true" />
							Contact me
						</Link>
					</div>
				</Reveal>

				<Reveal delay={0.1} className="px-4">
					<Portrait floating={false} />
				</Reveal>
			</div>
		</section>
	);
};

export default AboutMeBio;
