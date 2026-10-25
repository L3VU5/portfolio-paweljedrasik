import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { repoUrl, siteName, socialLinks } from '../../lib/site';

const icons = { github: FiGithub, linkedin: FiLinkedin };

const AppFooter = () => {
	return (
		<footer className="mt-24 border-t border-white/[0.06] px-5 py-10 sm:px-8">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
				<p>
					&copy; {new Date().getFullYear()} {siteName}. Designed and built by me.
				</p>
				<ul className="flex items-center gap-3">
					{socialLinks.map(({ id, label, url }) => {
						const Icon = icons[id];
						return (
							<li key={id}>
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-lg transition hover:border-brand-violet/60 hover:text-white"
								>
									<Icon aria-hidden="true" />
								</a>
							</li>
						);
					})}
					<li>
						<a
							href={repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium transition hover:border-brand-violet/60 hover:text-white"
						>
							View source
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default AppFooter;
