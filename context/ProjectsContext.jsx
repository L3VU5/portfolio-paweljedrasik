"use client";

import { useMemo, useState, createContext } from 'react';
import { projectsData } from '../data/projects';
import { matchSorter } from 'match-sorter';

// Create projects context
export const ProjectsContext = createContext();

const ALL_CATEGORIES = 'All';

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const projects = projectsData;
	const [searchProject, setSearchProject] = useState('');
	const [category, setCategory] = useState(ALL_CATEGORIES);

	const categories = useMemo(
		() => [ALL_CATEGORIES, ...new Set(projects.map((project) => project.category))],
		[projects]
	);

	// Category and title search combine, so a search never drops the active filter.
	const visibleProjects = useMemo(() => {
		const inCategory =
			category === ALL_CATEGORIES
				? projects
				: projects.filter((project) => project.category === category);
		return searchProject
			? matchSorter(inCategory, searchProject, { keys: ['title', 'category'] })
			: inCategory;
	}, [projects, category, searchProject]);

	return (
		<ProjectsContext.Provider
			value={{
				categories,
				category,
				setCategory,
				searchProject,
				setSearchProject,
				visibleProjects,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
