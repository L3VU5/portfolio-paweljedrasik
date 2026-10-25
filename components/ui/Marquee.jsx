// One half of the strip must be wider than the screen, otherwise the looping animation
// shows an empty gap after the last chip. Four copies cover screens up to ~4K.
const COPIES = 4;

// The animation travels one half per cycle, so the duration has to grow with the number of
// copies to keep the same speed (about 30 px per second for 45 seconds per copy).
const Row = ({ items, reverse = false, secondsPerCopy = 45 }) => {
	const half = Array.from({ length: COPIES }).flatMap(() => items);

	return (
		<div className="marquee-mask overflow-hidden">
			<div
				className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
				style={{ animationDuration: `${secondsPerCopy * COPIES}s` }}
			>
				{[0, 1].map((copy) => (
					<div key={copy} data-marquee-half className="flex shrink-0 gap-3 pr-3">
						{half.map((item, index) => (
							<span
								key={`${item}-${index}`}
								className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-300"
							>
								{item}
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

// Two decorative rows of technologies scrolling in opposite directions.
const Marquee = ({ top, bottom }) => (
	<div aria-hidden="true" className="space-y-3">
		<Row items={top} secondsPerCopy={45} />
		<Row items={bottom} reverse secondsPerCopy={55} />
	</div>
);

export default Marquee;
