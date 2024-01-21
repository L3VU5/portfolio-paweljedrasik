import { FiPhone, FiMapPin, FiMail, FiLinkedin } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Cracow, Poland',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'paweljedrasik@o2.pl',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+48 794 988 272',
		icon: <FiPhone />,
	},
	{
		id: 4,
        name: "paweljedrasik",
        icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/paweljedrasik',
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							{contact.url ? (
								<a href={contact.url} className="text-lg mb-4 text-ternary-dark dark:text-ternary-light cursor-pointer">
								{contact.name}
								</a>
							) : (
								<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light ">
									{contact.name}
								</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
