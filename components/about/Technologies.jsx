'use client';

import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';
import { TechnologiesContext } from '../../context/TechnologiesContext';

const Technologies = () => {
	const { searchTechnology, setSearchTechnology, groups } = useContext(TechnologiesContext);

	return (
		<section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8">
			<div className="mx-auto max-w-6xl">
				<Reveal className="flex flex-wrap items-end justify-between gap-6">
					<SectionHeading eyebrow="Skills" title="Technologies &" accent="tools." />
					<label className="relative block w-full sm:w-72">
						<span className="sr-only">Search technologies by name</span>
						<FiSearch
							aria-hidden="true"
							className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
						/>
						<input
							type="search"
							value={searchTechnology}
							onChange={(e) => setSearchTechnology(e.target.value)}
							placeholder="Search technologies..."
							className="field !rounded-full !pl-11"
						/>
					</label>
				</Reveal>

				<div className="mt-12 columns-1 gap-4 md:columns-2 lg:columns-3">
					{groups.map((group, index) => (
						<Reveal key={group.title} delay={(index % 3) * 0.08} className="mb-4 break-inside-avoid">
							<SpotlightCard className="p-6">
								<div className="flex items-baseline justify-between gap-3">
									<h3 className="text-lg font-semibold text-white">{group.title}</h3>
									<span className="text-xs tabular-nums text-muted">{group.items.length}</span>
								</div>
								<ul className="mt-4 flex flex-wrap gap-2">
									{group.items.map((tech) => (
										<li key={tech} className="tag tag-hover">
											{tech}
										</li>
									))}
								</ul>
							</SpotlightCard>
						</Reveal>
					))}
				</div>

				{groups.length === 0 && (
					<p className="mt-10 text-center text-muted">Nothing matches your search.</p>
				)}
			</div>
		</section>
	);
};

export default Technologies;
