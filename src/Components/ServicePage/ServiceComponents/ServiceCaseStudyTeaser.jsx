import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCaseStudyTeaser = ({
	imageSrc = '/images/case-studies/example.png',
	imageAlt = 'Case study preview',
	title = 'Automation Cut Admin Time by 60%',
	summary = 'We replaced manual intake with an automated pipeline across CRM + email.',
	stats = [
		{ label: 'Admin Time', value: '-60%' },
		{ label: 'Lead Response', value: '↑ 3x' },
	],
	cta = { label: 'Read Full Case Study', to: '/casestudy/example' },
}) => {
	return (
		<section className="px-8 py-10" aria-label="Case study teaser">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
					<img
						src={imageSrc}
						alt={imageAlt}
						className="w-full h-auto"
					/>
				</div>

				<div>
					<h3 className="font-bold text-2xl xl:text-3xl mb-4">
						{title}
					</h3>
					<p className="mb-4">{summary}</p>

					{Array.isArray(stats) && stats.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
							{stats.map((s, idx) => (
								<div
									key={idx}
									className="rounded-lg bg-yale-blue text-white p-4 text-center"
								>
									<div className="text-xl font-extrabold">
										{s.value}
									</div>
									<div className="text-sm opacity-90">
										{s.label}
									</div>
								</div>
							))}
						</div>
					)}

					{cta?.to && (
						<Link to={cta.to}>
							<button className="btn-primary text-white px-6 py-2 rounded-md">
								{cta.label}
							</button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default ServiceCaseStudyTeaser;
