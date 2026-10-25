'use client';

import CountUp from 'react-countup';
import SpotlightCard from './SpotlightCard';

const Stat = ({ end, suffix = '', label, className = '' }) => (
	<SpotlightCard className={`flex flex-col justify-between gap-8 p-6 ${className}`}>
		<p className="text-5xl font-semibold tracking-tight sm:text-6xl">
			<span className="gradient-text">
				<CountUp end={end} duration={2.2} suffix={suffix} enableScrollSpy scrollSpyOnce />
			</span>
		</p>
		<p className="text-sm leading-snug text-muted">{label}</p>
	</SpotlightCard>
);

export default Stat;
