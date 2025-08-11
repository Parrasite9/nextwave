import React from 'react';
import { Link } from 'react-router-dom';

const ServiceStickyCTA = ({
	label = 'Book a Free Consultation',
	to = '/book',
}) => {
	if (!to) return null;
	return (
		<div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
			<Link to={to}>
				<button className="w-full btn-cta py-3 text-base">
					{label}
				</button>
			</Link>
		</div>
	);
};

export default ServiceStickyCTA;
