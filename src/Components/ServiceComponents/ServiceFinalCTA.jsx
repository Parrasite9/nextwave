// import React from 'react';
// import { Link } from 'react-router-dom';

// const ServiceFinalCTA = ({
// 	phone = '(432) 555-0199',
// 	cta = { label: 'Discuss Your Project', to: '/book' },
// }) => {
// 	return (
// 		<section className="px-8 py-10" aria-label="Final call to action">
// 			<div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
// 				<div>
// 					<h3 className="header font-bold text-2xl">
// 						Ready to Start?
// 					</h3>
// 					<p className="opacity-90">
// 						We’ll map your fastest path to ROI.
// 					</p>
// 				</div>

// 				<div className="flex items-center gap-3">
// 					{cta?.to && (
// 						<Link to={cta.to}>
// 							<button className="btn-cta md:py-3">
// 								{cta.label}
// 							</button>
// 						</Link>
// 					)}
// 					{phone && (
// 						<a
// 							className="text-deep-ocean-blue font-semibold"
// 							href={`tel:${phone.replace(/[^\d+]/g, '')}`}
// 						>
// 							{phone}
// 						</a>
// 					)}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default ServiceFinalCTA;

import React from 'react';
import { Link } from 'react-router-dom';

function CtaButton({ cta, className = '' }) {
	if (!cta?.to) return null;

	const isExternal = /^https?:\/\//i.test(cta.to);
	const classes = `btn-cta md:py-3 ${className}`;

	// Respect explicit target, default to _blank for external links
	const target = cta.target ?? (isExternal ? '_blank' : undefined);
	const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

	return isExternal ? (
		<a href={cta.to} target={target} rel={rel} className={classes}>
			{cta.label}
		</a>
	) : (
		<Link to={cta.to} target={target}>
			<button className={classes}>{cta.label}</button>
		</Link>
	);
}

const ServiceFinalCTA = ({
	phone = '(432) 555-0199',
	cta = { label: 'Discuss Your Project', to: '/book' },
}) => {
	return (
		<section className="px-8 py-10" aria-label="Final call to action">
			<div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<div>
					<h3 className="header font-bold text-2xl">
						Ready to Start?
					</h3>
					<p className="opacity-90">
						We’ll map your fastest path to ROI.
					</p>
				</div>

				<div className="flex items-center gap-3">
					<CtaButton cta={cta} />
					{phone && (
						<a
							className="text-deep-ocean-blue font-semibold"
							href={`tel:${phone.replace(/[^\d+]/g, '')}`}
						>
							{phone}
						</a>
					)}
				</div>
			</div>
		</section>
	);
};

export default ServiceFinalCTA;
