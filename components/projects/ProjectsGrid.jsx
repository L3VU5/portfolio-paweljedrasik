'use client';

import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectsGrid = () => {
	const { categories, category, setCategory, searchProject, setSearchProject, visibleProjects } =
		useContext(ProjectsContext);

	return (
		<section aria-label="Projects">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div
					role="group"
					aria-label="Filter by category"
					className="inline-flex flex-wrap self-start rounded-full border border-white/10 bg-white/[0.04] p-1"
				>
					{categories.map((name) => {
						const active = category === name;
						return (
							<button
								key={name}
								type="button"
								aria-pressed={active}
								onClick={() => setCategory(name)}
								className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
									active ? 'text-ink' : 'text-muted hover:text-white'
								}`}
							>
								{active && (
									<motion.span
										layoutId="filter-pill"
										className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-violet via-brand-blue to-brand-teal"
										transition={{ type: 'spring', stiffness: 400, damping: 34 }}
									/>
								)}
								<span className="relative">{name === 'All' ? 'All projects' : name}</span>
							</button>
						);
					})}
				</div>

				<label className="relative block md:w-72">
					<span className="sr-only">Search projects by title</span>
					<FiSearch
						aria-hidden="true"
						className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
					/>
					<input
						type="search"
						value={searchProject}
						onChange={(e) => setSearchProject(e.target.value)}
						placeholder="Search projects..."
						className="field !rounded-full !pl-11"
					/>
				</label>
			</div>

			<motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				<AnimatePresence mode="popLayout">
					{visibleProjects.map((project) => (
						<motion.div
							key={project.id}
							layout
							className="h-full"
							initial={{ opacity: 0, scale: 0.94 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.94 }}
							transition={{ duration: 0.35, ease: 'easeOut' }}
						>
							<ProjectCard project={project} />
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{visibleProjects.length === 0 && (
				<p className="mt-16 text-center text-muted">No projects match your search.</p>
			)}
		</section>
	);
};

export default ProjectsGrid;
