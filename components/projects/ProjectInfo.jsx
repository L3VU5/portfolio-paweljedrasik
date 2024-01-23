'use client';

import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import Image from 'next/image'

const ProjectInfo = ({projectId}) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const project = singleProjectData[projectId];

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">

				{/* Single project technologies */}
				<div className="mb-7">
					<Image
						src={project.ProjectImages?.[0].img}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={project.ProjectImages?.[0].title}
					/>
				</div>
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{project.ProjectInfo?.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{project.ProjectInfo?.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>
				{project.ProjectInfo?.LiveUrl && (<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Live URL
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					<a
						href={project.ProjectInfo?.LiveUrl}
						className={ 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'}
						aria-label="Live url"
					>
						{project.ProjectInfo?.LiveUrl}
					</a>
					</p>
				</div>)}

				{/* Single project client details */}

				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{project.ProjectInfo?.ClientHeading}
					</p>
					<ul className="leading-loose">
						{project.ProjectInfo?.CompanyInfo ? (
							<>{project.ProjectInfo?.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<span>{info.title}: </span>
											{info.url ? (
											<a
												href={info.url}
												className={
													info.title === 'Website' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>) : (
												<span
													aria-label="Project Website and Phone">
													{info.details}
												</span>
											)}
										</li>
									);
								}
							)}
							</>
						) : (
							<>
								<li className="font-general-regular text-ternary-dark dark:text-ternary-light">
								<a
									href={project.ProjectInfo?.RepoUrl}
									className={'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'}
									aria-label="Project Website and Phone"
									>
									{project.ProjectInfo?.RepoUrl}
									</a>
								</li>
							</>
						)}
						
					</ul>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">

				{/* Single project objectives */}
				<div className="mb-7">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{project.ProjectInfo?.ObjectivesHeading}
					</p>
					<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
						{project.ProjectInfo?.ObjectivesDetails}
					</p>
				</div>
			<div className="w-full text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{project.ProjectInfo?.ProjectDetailsHeading}
				</p>
				{project.ProjectInfo?.ProjectDetails?.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
			</div>
		</div>
	);
};

export default ProjectInfo;
