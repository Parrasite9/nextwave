import React, { useState } from 'react';

const ServiceFAQ = ({
	title = 'Frequently Asked Questions',
	faqs = [
		{
			q: 'How long does setup take?',
			a: 'Most projects launch in 2–4 weeks depending on complexity.',
		},
		{
			q: 'What tools do you integrate with?',
			a: 'Make.com, Firebase, CRMs, popular marketing tools, and more.',
		},
		{
			q: 'Is this affordable for small businesses?',
			a: 'We build packages for SMB budgets with clear ROI.',
		},
	],
}) => {
	const [openIdx, setOpenIdx] = useState(null);

	return (
		<section className="px-8 py-10" aria-label="FAQs">
			<h2 className="font-bold text-2xl xl:text-3xl mb-6">{title}</h2>

			<div className="space-y-3">
				{faqs.map((f, idx) => {
					const open = openIdx === idx;
					return (
						<div
							key={idx}
							className="rounded-xl border border-slate-200 bg-white shadow-sm"
						>
							<button
								className="w-full text-left px-5 py-4 font-semibold flex justify-between items-center"
								onClick={() => setOpenIdx(open ? null : idx)}
								aria-expanded={open}
							>
								<span>{f.q}</span>
								<span className="ml-4 text-bright-teal">
									{open ? '−' : '+'}
								</span>
							</button>
							{open && (
								<div className="px-5 pb-5 -mt-2">
									<p>{f.a}</p>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ServiceFAQ;
