import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHero = ({
	eyebrow = 'A New Wave Of Online Success',
	headline = 'Service Headline That Drives Action',
	subheadline = 'Brief, benefit-driven subheadline tailored to Midland–Odessa SMBs.',
	primaryCta = { label: 'Book a Free Consultation', to: '/book' },
	secondaryCta, // { label, to }
	bgImageUrl, // optional background image
	stickyMobileCTA = true,
}) => {
	return (
		<section
			className={`relative px-8 py-12 md:py-16 ${bgImageUrl ? 'bg-cover bg-center' : ''}`}
			style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : {}}
			aria-label="Service hero"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
				<div className="text__section text-center md:text-left">
					<h3 className="subheader font-bold text-xl py-2 md:text-2xl xl:text-3xl text-bright-teal">
						{eyebrow}
					</h3>
					<h1 className="header font-extrabold text-4xl md:text-5xl xl:text-6xl">
						{headline}
					</h1>
					<p className="pb-4 md:text-xl">{subheadline}</p>

					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
						{primaryCta?.to && (
							<Link to={primaryCta.to}>
								<button className="btn-cta md:text-lg md:py-3">
									{primaryCta.label}
								</button>
							</Link>
						)}
						{secondaryCta?.to && (
							<Link to={secondaryCta.to}>
								<button className="btn-primary text-white md:text-lg md:py-3 rounded-md px-5">
									{secondaryCta.label}
								</button>
							</Link>
						)}
					</div>
				</div>

				{/* Optional right-side media slot for embeds/images */}
				<div className="mt-8 lg:mt-0">
					{/* Place your <VoomlyEmbed /> or an image here if needed */}
				</div>
			</div>

			{/* Sticky CTA for mobile */}
			{stickyMobileCTA && primaryCta?.to && (
				<div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
					<Link to={primaryCta.to}>
						<button className="w-full btn-cta py-3 text-base">
							{primaryCta.label}
						</button>
					</Link>
				</div>
			)}
		</section>
	);
};

export default ServiceHero;
