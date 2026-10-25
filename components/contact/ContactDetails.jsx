import { FiGithub, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi';
import CopyEmail from './CopyEmail';
import { contactEmail } from '../../lib/site';

const contacts = [
	{ id: 1, label: 'Location', name: 'Cracow, Poland', icon: FiMapPin },
	{ id: 2, label: 'Phone', name: '+48 794 988 272', icon: FiPhone, url: 'tel:+48794988272' },
	{
		id: 3,
		label: 'LinkedIn',
		name: 'paweljedrasik',
		icon: FiLinkedin,
		url: 'https://www.linkedin.com/in/paweljedrasik',
	},
	{ id: 4, label: 'GitHub', name: 'L3VU5', icon: FiGithub, url: 'https://github.com/L3VU5' },
];

const ContactDetails = () => {
	return (
		<div>
			<p className="max-w-md text-lg leading-relaxed text-muted">
				Have a project, a role or just a question? Write to me using the form or reach out directly.
			</p>

			<div className="tile mt-10 flex flex-wrap items-center justify-between gap-4 p-6">
				<div className="min-w-0">
					<p className="text-sm text-muted">Email</p>
					<a
						href={`mailto:${contactEmail}`}
						className="mt-1 block truncate text-lg font-semibold text-white transition hover:text-brand-teal sm:text-xl"
					>
						{contactEmail}
					</a>
				</div>
				<CopyEmail email={contactEmail} />
			</div>

			<ul className="mt-4 grid gap-4 sm:grid-cols-2">
				{contacts.map(({ id, label, name, icon: Icon, url }) => {
					const external = url?.startsWith('http');
					const content = (
						<>
							<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-violet/30 to-brand-teal/20 text-lg text-white">
								<Icon aria-hidden="true" />
							</span>
							<span className="min-w-0">
								<span className="block text-xs text-muted">{label}</span>
								<span className="block truncate font-medium text-white">{name}</span>
							</span>
						</>
					);
					return (
						<li key={id}>
							{url ? (
								<a
									href={url}
									{...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
									className="tile tile-lift flex items-center gap-4 p-4"
								>
									{content}
								</a>
							) : (
								<div className="tile flex items-center gap-4 p-4">{content}</div>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ContactDetails;
