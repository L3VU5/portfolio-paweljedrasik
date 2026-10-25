'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';
import Reveal from '../ui/Reveal';

const ExternalLink = ({ href, children }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="group inline-flex items-center gap-1.5 font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:text-brand-teal hover:decoration-brand-teal"
	>
		{children}
		<FiArrowUpRight aria-hidden="true" className="text-sm transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
	</a>
);

const Panel = ({ title, children }) => (
	<div className="tile p-6">
		<h2 className="text-sm font-medium text-muted">{title}</h2>
		<div className="mt-4">{children}</div>
	</div>
);

const ProjectInfo = ({projectId}) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const project = singleProjectData[projectId];
	const info = project.ProjectInfo;
	const cover = project.ProjectImages?.[0];

	return (
		<div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
			<Reveal className="space-y-5 lg:sticky lg:top-28 lg:self-start">
				{cover && (
					<div className="tile p-2">
						<Image
							src={cover.img}
							alt={cover.title}
							sizes="(min-width: 1024px) 30vw, 100vw"
							priority
							className="w-full rounded-[1.4rem]"
						/>
					</div>
				)}

				<Panel title={info.Technologies[0].title}>
					<ul className="flex flex-wrap gap-2">
						{info.Technologies[0].techs.map((tech) => (
							<li key={tech} className="tag tag-hover">
								{tech}
							</li>
						))}
					</ul>
				</Panel>

				{info.LiveUrl && (
					<Panel title="Live URL">
						<p className="break-all">
							<ExternalLink href={info.LiveUrl}>{info.LiveUrl}</ExternalLink>
						</p>
					</Panel>
				)}

				<Panel title={info.ClientHeading}>
					<ul className="space-y-3">
						{info.CompanyInfo ? (
							info.CompanyInfo.map((entry) => (
								<li key={entry.id} className="flex flex-wrap gap-x-3 text-sm">
									<span className="w-24 shrink-0 text-muted">{entry.title}</span>
									{entry.url ? (
										<ExternalLink href={entry.url}>{entry.details}</ExternalLink>
									) : (
										<span className="text-slate-200">{entry.details}</span>
									)}
								</li>
							))
						) : (
							<li className="break-all text-sm">
								<ExternalLink href={info.RepoUrl}>{info.RepoUrl}</ExternalLink>
							</li>
						)}
					</ul>
				</Panel>
			</Reveal>

			<Reveal delay={0.1} className="space-y-12">
				<div>
					<h2 className="text-3xl font-semibold tracking-tight text-white">{info.ObjectivesHeading}</h2>
					<p className="mt-4 text-lg leading-relaxed text-slate-300">{info.ObjectivesDetails}</p>
				</div>

				<div>
					<h2 className="text-3xl font-semibold tracking-tight text-white">{info.ProjectDetailsHeading}</h2>
					<ul className="mt-5 space-y-3">
						{info.ProjectDetails?.map((details, index) => (
							<li key={details.id} className="tile flex gap-5 p-5 sm:p-6">
								<span
									aria-hidden="true"
									className="gradient-text text-2xl font-semibold tabular-nums"
								>
									{String(index + 1).padStart(2, '0')}
								</span>
								<span className="leading-relaxed text-slate-300">{details.details}</span>
							</li>
						))}
					</ul>
				</div>
			</Reveal>
		</div>
	);
};

export default ProjectInfo;
