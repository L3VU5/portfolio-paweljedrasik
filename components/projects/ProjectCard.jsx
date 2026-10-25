'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import SpotlightCard from '../ui/SpotlightCard';

// `featured` makes the card fill a tall bento cell instead of keeping the image's own ratio;
// `wide` crops the image to a shorter 16:10 box.
const ProjectCard = ({ project, featured = false, wide = false }) => {
	const { id, title, category, img } = project;

	return (
		<SpotlightCard
			as={Link}
			href={`/projects/${id}`}
			aria-label={`${title}, ${category}`}
			className="tile-lift group flex h-full flex-col"
		>
			<div
				className={`relative overflow-hidden ${
					featured ? 'min-h-[18rem] flex-1' : wide ? 'aspect-[16/10]' : 'aspect-[780/680]'
				}`}
			>
				<Image
					src={img}
					alt=""
					fill
					sizes={featured ? '(min-width: 1024px) 64vw, 100vw' : '(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw'}
					className="object-cover transition duration-700 ease-out group-hover:scale-105"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
				/>
			</div>
			<div className="flex items-center justify-between gap-4 p-5 sm:p-6">
				<div className="min-w-0">
					<span className="pill !px-3 !py-1">{category}</span>
					<h3
						className={`mt-3 font-semibold leading-tight tracking-tight text-white ${
							featured ? 'text-2xl sm:text-3xl' : 'text-xl'
						}`}
					>
						{title}
					</h3>
				</div>
				<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-lg text-white transition duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-violet group-hover:to-brand-teal group-hover:text-ink">
					<FiArrowUpRight aria-hidden="true" />
				</span>
			</div>
		</SpotlightCard>
	);
};

export default ProjectCard;
