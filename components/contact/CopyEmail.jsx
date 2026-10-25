'use client';

import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

const CopyEmail = ({ email }) => {
	const [copied, setCopied] = useState(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Copying the email address failed', err);
		}
	}

	return (
		<button
			type="button"
			onClick={copy}
			className="btn-glass !px-4 !py-2 !text-xs"
			aria-label={copied ? 'Email address copied' : 'Copy email address'}
		>
			{copied ? <FiCheck aria-hidden="true" className="text-brand-teal" /> : <FiCopy aria-hidden="true" />}
			{copied ? 'Copied' : 'Copy'}
		</button>
	);
};

export default CopyEmail;
