'use client';

import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TechnologiesContext } from '../../context/TechnologiesContext';

const ProjectsGrid = () => {
	const {
		setSearchTechnology,
		searchTechByTitle,
	} = useContext(TechnologiesContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<p className="font-general-medium text-2xl sm:text-4xl mb-3 text-ternary-dark dark:text-ternary-light">
				Technologies & Tools
			</p>

			<div>
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>

					<p className="font-general-regular flex items-center text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl">
						Search technologies by name
					</p>
					<div className="flex justify-between gap-2">
						<input
							onChange={(e) => {
								setSearchTechnology(e.target.value);
							}}
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                           		border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search technologies..."
							aria-label="Name"
						/>
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap mt-6">
				{ searchTechByTitle.map((tech) => (
						<div key={tech} className="font-general-medium m-1
							px-3
							sm:px-4
							py-2
							border 
							border-gray-200
							dark:border-secondary-dark
							rounded-lg
							text-sm
							sm:text-md
							bg-secondary-light
							dark:bg-ternary-dark
							text-primary-dark
							dark:text-ternary-light
						">
							<span>{tech}</span>
						</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
