"use client";

import { useState, createContext } from 'react';
import { technologiesData } from '../data/technologies';
import {matchSorter} from 'match-sorter';

// Create projects context
export const TechnologiesContext = createContext();

// Create the projects context provider
export const TechnologiesProvider = (props) => {
	const [technologies, setTechnologies] = useState(technologiesData);
	const [searchTechnology, setSearchTechnology] = useState('');

	// Search tech by title
	const searchTechByTitle = searchTechnology === '' ? technologies : matchSorter(technologies, searchTechnology);

	const technologiesLength = technologies.length;

	return (
		<TechnologiesContext.Provider
			value={{
				technologiesLength,
				technologies,
				setTechnologies,
				searchTechnology,
				setSearchTechnology,
				searchTechByTitle,
			}}
		>
			{props.children}
		</TechnologiesContext.Provider>
	);
};
