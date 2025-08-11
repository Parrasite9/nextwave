import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA = ({
	title = 'Find Out What You Can Automate in 30 Minutes',
	subtitle = 'Free strategy session — no strings attached.',
	cta = { label: 'Book My Free Consultation', to: '/book' },
}) => {
	return (
		<section className="px-8 py-10" aria-label="CTA banner">
			<div className="rounded-2xl bg-yale-blue text-white p-8 shadow-md text-center">
				<h3 className="font-bold text-2xl xl:text-3xl mb-2">{title}</h3>
				<p className="mb-6 opacity-95">{subtitle}</p>
				{cta?.to && (
					<Link to={cta.to}>
						<button className="btn-cta bg-white text-yale-blue hover:opacity-90">
							{cta.label}
						</button>
					</Link>
				)}
			</div>
		</section>
	);
};

export default ServiceCTA;
