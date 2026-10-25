import { siteUrl } from '../lib/site';
import { singleProjectData } from '../data/singleProjectData';

export default function sitemap() {
	const pages = ['', '/projects', '/about', '/contact'].map((path) => ({
		url: `${siteUrl}${path}`,
	}));
	const projects = Object.keys(singleProjectData).map((projectId) => ({
		url: `${siteUrl}/projects/${projectId}`,
	}));
	return [...pages, ...projects];
}
