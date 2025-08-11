import React from 'react';

const ServiceTrustStrip = ({
	title = 'Serving Midland–Odessa Businesses',
	logos = [], // [{src, alt}]
	testimonials = [], // [{quote, author, role}]
}) => {
	return (
		<section
			className="px-8 py-10 bg-slate-50"
			aria-label="Local proof and trust"
		>
			<h2 className="font-bold text-2xl xl:text-3xl mb-6">{title}</h2>

			{/* Logos row */}
			{logos.length > 0 && (
				<div className="flex flex-wrap items-center gap-6 mb-6">
					{logos.map((l, idx) => (
						<img
							key={idx}
							src={l.src}
							alt={l.alt || 'Client logo'}
							className="h-10 w-auto opacity-80"
						/>
					))}
				</div>
			)}

			{/* Testimonials */}
			{testimonials.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{testimonials.map((t, idx) => (
						<blockquote
							key={idx}
							className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
						>
							<p className="italic mb-3">“{t.quote}”</p>
							<footer className="text-sm text-slate-600">
								— {t.author}
								{t.role ? `, ${t.role}` : ''}
							</footer>
						</blockquote>
					))}
				</div>
			)}
		</section>
	);
};

export default ServiceTrustStrip;
