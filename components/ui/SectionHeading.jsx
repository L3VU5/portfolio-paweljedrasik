const SectionHeading = ({ eyebrow, title, accent, as: Tag = 'h2', className = '' }) => (
	<div className={className}>
		<span className="pill">
			<span
				aria-hidden="true"
				className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-violet to-brand-teal"
			/>
			{eyebrow}
		</span>
		<Tag className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
			{title}
			{accent && (
				<>
					{' '}
					<span className="gradient-text">{accent}</span>
				</>
			)}
		</Tag>
	</div>
);

export default SectionHeading;
