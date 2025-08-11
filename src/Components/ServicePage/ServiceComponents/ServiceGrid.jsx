import React from 'react';
import { Link } from 'react-router-dom';

const ServiceGrid = ({
	title = 'What We Deliver',
	services = [
		{
			title: 'CRM Automation',
			description: 'Pipe leads to the right place instantly.',
			to: '/services/ai-automation',
		},
		{
			title: 'Email & SMS Workflows',
			description: 'Lifecycle messaging that converts.',
			to: '/services/marketing-automation',
		},
		{
			title: 'Chatbots',
			description: '24/7 pre-qualification and FAQs.',
			to: '/services/chatbots',
		},
		{
			title: 'Dashboards & Integrations',
			description: 'Make.com / Firebase reports that matter.',
			to: '/services/dashboards',
		},
	],
}) => {
	return (
		<section className="px-8 py-10" aria-label="Service overview grid">
			<h2 className="font-bold text-2xl xl:text-3xl mb-6">{title}</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
				{services.map((srv, idx) => (
					<div
						key={idx}
						className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
					>
						<h3 className="font-semibold text-lg text-deep-ocean-blue mb-2">
							{srv.title}
						</h3>
						<p className="mb-4">{srv.description}</p>
						{srv.to && (
							<Link
								className="text-bright-teal font-semibold"
								to={srv.to}
							>
								Learn more →
							</Link>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default ServiceGrid;
