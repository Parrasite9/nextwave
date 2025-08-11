import React from 'react';

const ServicePainPoints = ({
	title = 'Stop Wasting Hours on Manual Tasks',
	items = [
		{
			title: 'Data Entry Bottlenecks',
			description: 'Reduce repetitive work with automation.',
		},
		{
			title: 'Missed Follow-ups',
			description: 'Trigger timely reminders and sequences.',
		},
		{
			title: 'Inconsistent Experience',
			description: 'Standardize your workflows end-to-end.',
		},
	],
}) => {
	return (
		<section className="px-8 py-10" aria-label="Pain points">
			<h2 className="font-bold text-2xl xl:text-3xl mb-6">{title}</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{items.map((it, idx) => (
					<div
						key={idx}
						className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm"
					>
						<h3 className="font-semibold text-lg text-bright-teal mb-2">
							{it.title}
						</h3>
						<p>{it.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ServicePainPoints;
