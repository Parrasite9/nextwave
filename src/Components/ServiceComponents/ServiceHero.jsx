import React from 'react';
import { Link } from 'react-router-dom';

function CtaButton({ cta, variant = 'primary', className = '' }) {
	if (!cta?.to) return null;

	// Same sizing for BOTH variants (+ min width so labels don’t affect size)
	const base =
		'inline-flex items-center justify-center whitespace-nowrap ' +
		'px-6 py-3 text-base md:text-lg font-semibold rounded-lg leading-none text-center ' +
		'min-w-[180px]';

	// High-contrast primary; subtle secondary
	const variantClass =
		variant === 'primary'
			? [
					'text-white',
					'bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500',
					'shadow-[0_10px_30px_-10px_rgba(245,158,11,0.55)]',
					'hover:brightness-110',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
				].join(' ')
			: [
					'border-2 border-orange-500 text-orange-600',
					'hover:bg-orange-50',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
					'bg-white', // keep it light so it contrasts the page
				].join(' ');

	const classes = `${base} ${variantClass} ${className}`.trim();

	const isExternal = /^https?:\/\//i.test(cta.to);
	const target = cta.target ?? (isExternal ? '_blank' : undefined);
	const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

	return isExternal ? (
		<a href={cta.to} target={target} rel={rel} className={classes}>
			{cta.label}
		</a>
	) : (
		<Link to={cta.to} target={target} className="inline-block">
			<button className={classes}>{cta.label}</button>
		</Link>
	);
}

const ServiceHero = ({
	eyebrow = 'A New Wave Of Online Success',
	headline = 'Service Headline That Drives Action',
	subheadline = 'Brief, benefit-driven subheadline tailored to Midland–Odessa SMBs.',
	primaryCta = { label: 'Book a Free Consultation', to: '/book' },
	secondaryCta, // { label, to, target? }
	bgImageUrl,
	stickyMobileCTA = true,
}) => {
	return (
		<section
			className={`relative px-8 py-12 md:py-16 ${bgImageUrl ? 'bg-cover bg-center' : ''}`}
			style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : {}}
			aria-label="Service hero"
		>
			<div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
				<div className="text__section text-center md:text-left">
					<h3 className="subheader py-2 text-xl font-bold text-bright-teal md:text-2xl xl:text-3xl">
						{eyebrow}
					</h3>
					<h1 className="header text-4xl font-extrabold md:text-5xl xl:text-6xl">
						{headline}
					</h1>
					<p className="pb-4 md:text-xl">{subheadline}</p>

					<div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
						<CtaButton cta={primaryCta} variant="primary" />
						<CtaButton cta={secondaryCta} variant="secondary" />
					</div>
				</div>

				<div className="mt-8 lg:mt-0">{/* media slot */}</div>
			</div>

			{stickyMobileCTA && primaryCta?.to && (
				<div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
					<CtaButton
						cta={primaryCta}
						variant="primary"
						className="w-full"
					/>
				</div>
			)}
		</section>
	);
};

export default ServiceHero;
