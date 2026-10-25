'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from '../projects/ProjectCard';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { projectsData } from '../../data/projects';

const featured = projectsData.filter((project) => project.featured);

const FeaturedProjects = () => (
	<section id="work" className="scroll-mt-24 px-5 py-12 sm:px-8">
		<div className="mx-auto max-w-6xl">
			<Reveal className="flex flex-wrap items-end justify-between gap-6">
				<SectionHeading eyebrow="Selected work" title="Things I" accent="shipped." />
				<Link href="/projects" className="btn-glass group">
					All projects
					<FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
				</Link>
			</Reveal>

			<div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
				{featured.map((project, index) => (
					<Reveal
						key={project.id}
						delay={index * 0.1}
						className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
					>
						<ProjectCard project={project} featured={index === 0} wide={index !== 0} />
					</Reveal>
				))}
			</div>
		</div>
	</section>
);

export default FeaturedProjects;
