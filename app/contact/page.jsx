import ContactDetails from '../../components/contact/ContactDetails';
import ContactForm from '../../components/contact/ContactForm';
import Reveal from '../../components/ui/Reveal';
import SectionHeading from '../../components/ui/SectionHeading';

export const metadata = {
	title: 'Contact',
	description: 'Get in touch with Paweł Jędrasik about a project or a role.',
};

const Contact = () => {
	return (
		<div className="mx-auto max-w-[76rem] px-5 pb-8 pt-32 sm:px-8 lg:pt-40">
			<SectionHeading as="h1" eyebrow="Contact" title="Let’s build" accent="something together." />
			<div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
				<Reveal>
					<ContactDetails />
				</Reveal>
				<Reveal delay={0.1}>
					<ContactForm />
				</Reveal>
			</div>
		</div>
	);
};

export default Contact;
