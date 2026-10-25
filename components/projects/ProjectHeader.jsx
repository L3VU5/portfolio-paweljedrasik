'use client';

import { FiClock, FiTag, FiUser } from 'react-icons/fi';
import { singleProjectData } from '../../data/singleProjectData';
import Reveal from '../ui/Reveal';

const ProjectSingleHeader = ({projectId}) => {
	const header = singleProjectData[projectId]?.ProjectHeader;
	const meta = [
		{ icon: FiClock, label: 'Started', value: header?.publishDate },
		{ icon: FiUser, label: 'Role', value: header?.position },
		{ icon: FiTag, label: 'Focus', value: header?.tags },
	];

	return (
		<Reveal className="mt-10">
			<h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
				<span className="gradient-text">{header?.title}</span>
			</h1>
			<dl className="mt-8 flex flex-wrap gap-3">
				{meta.map(({ icon: Icon, label, value }) => (
					<div key={label} className="pill !px-4 !py-2 !text-sm">
						<Icon aria-hidden="true" className="text-brand-teal" />
						<dt className="sr-only">{label}</dt>
						<dd>{value}</dd>
					</div>
				))}
			</dl>
		</Reveal>
	);
};

export default ProjectSingleHeader;
