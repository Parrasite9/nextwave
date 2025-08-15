import React from 'react';

const ServiceTrustStrip = ({
	title = 'Serving Midland–Odessa Businesses',
	logos = [], // [{ src, alt }]
	testimonials = [], // [{ quote, author, role }]
}) => {
	return (
		<section
			className="px-8 py-12 bg-slate-50"
			aria-label="Local proof and trust"
		>
			<h2 className="mb-8 text-2xl xl:text-3xl font-bold">{title}</h2>

			{/* Logos grid */}
			{logos.length > 0 && (
				<div
					className="
            grid grid-cols-2 gap-4
            sm:grid-cols-3 sm:gap-6
            md:grid-cols-4
            lg:grid-cols-6
          "
				>
					{logos.map((l, idx) => (
						<div
							key={`${l.src}-${idx}`}
							className="
                group w-full rounded-lg border border-slate-200 bg-white/80
                shadow-sm backdrop-blur-sm
                flex items-center justify-center
                h-20 sm:h-20 md:h-24
                transition
              "
						>
							<img
								loading="lazy"
								decoding="async"
								src={l.src}
								alt={l.alt || 'Client logo'}
								className="
									max-h-full max-w-[80%] object-contain
									opacity-90 group-hover:opacity-100
									transition
									"
							/>
						</div>
					))}
				</div>
			)}

			{/* Testimonials */}
			{testimonials.length > 0 && (
				<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
					{testimonials.map((t, idx) => (
						<blockquote
							key={idx}
							className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
						>
							<p className="mb-3 italic">“{t.quote}”</p>
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
