"use client";

import { useMemo, useState, createContext } from 'react';
import { technologyGroups, technologiesData } from '../data/technologies';
import { matchSorter } from 'match-sorter';

// Create technologies context
export const TechnologiesContext = createContext();

// Create the technologies context provider
export const TechnologiesProvider = (props) => {
	const [searchTechnology, setSearchTechnology] = useState('');

	// Search inside every group and hide the groups left empty.
	const groups = useMemo(() => {
		if (searchTechnology === '') return technologyGroups;
		return technologyGroups
			.map((group) => ({ ...group, items: matchSorter(group.items, searchTechnology) }))
			.filter((group) => group.items.length > 0);
	}, [searchTechnology]);

	return (
		<TechnologiesContext.Provider
			value={{
				technologiesLength: technologiesData.length,
				searchTechnology,
				setSearchTechnology,
				groups,
			}}
		>
			{props.children}
		</TechnologiesContext.Provider>
	);
};
