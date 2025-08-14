import React from 'react';
import { Link } from 'react-router-dom';

export default function PricingCTASection() {
	const handleCTA = async () => {
		try {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: 'custom_button_click',
				button_name: 'Book A FREE Consultation',
			});
			await new Promise((r) => setTimeout(r, 300));
			window.location.href =
				'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call';
		} catch (e) {
			console.error('GTM/redirect error:', e);
		}
	};

	return (
		<section
			aria-labelledby="cta-title"
			className="relative overflow-hidden"
		>
			{/* rich dark background w/ subtle gradient & glow */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#0b1f36] via-[#0d2745] to-[#0b1f36]" />
			<div className="pointer-events-none absolute -left-28 -top-20 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

			<div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
				{/* Headline + Subhead */}
				<div className="text-center">
					<h2
						id="cta-title"
						className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
					>
						Your next breakthrough starts here
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
						From design to launch to growth — we build sites that
						convert and systems that save time.
					</p>
				</div>

				{/* Trust strip */}
				<div className="mt-8 flex flex-wrap items-center justify-center gap-6 opacity-90">
					{/* Host these locally; swap to your actual verification links if required */}
					<a
						href="https://trustlock.co/verify/your-link"
						target="_blank"
						rel="noreferrer"
						aria-label="Money-back guarantee verification"
					>
						<img
							src="/images/trust/moneyback.png"
							alt="Money-back guarantee"
							className="h-10 w-auto"
							loading="lazy"
						/>
					</a>
					<a
						href="https://trustlock.co/verify/your-ssl-link"
						target="_blank"
						rel="noreferrer"
						aria-label="SSL secure verification"
					>
						<img
							src="/images/trust/ssl.png"
							alt="Secure SSL"
							className="h-10 w-auto"
							loading="lazy"
						/>
					</a>

					{/* Add a few partner logos for subtle authority (keep them small) */}
					<img
						src="/images/logos/google-partner.png"
						alt="Google Partner"
						className="h-6 w-auto opacity-80"
						loading="lazy"
					/>
					<img
						src="/images/logos/klaviyo.png"
						alt="Klaviyo"
						className="h-6 w-auto opacity-80"
						loading="lazy"
					/>
					<img
						src="/images/logos/stripe.png"
						alt="Stripe"
						className="h-6 w-auto opacity-80"
						loading="lazy"
					/>
				</div>

				{/* CTA Block */}
				<div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6">
					<div className="text-center">
						<p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
							Get guidance in 15 minutes
						</p>
						<p className="mt-2 text-white/90">
							Quick, no‑pressure call. We’ll scope your goals and
							suggest next steps.
						</p>

						<div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
							<button
								onClick={handleCTA}
								className="w-full rounded-xl bg-[#5BC0EB] px-6 py-3 text-sm font-semibold text-black shadow transition hover:brightness-95 sm:w-auto"
								id="pricing-cta-button"
							>
								Book a FREE consultation
							</button>
							<Link
								to="/contact"
								className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
							>
								Prefer email? Contact us →
							</Link>
						</div>
					</div>
				</div>

				{/* Micro reassurance */}
				<p className="mt-4 text-center text-xs text-white/60">
					No long sales calls. No hard sell. Just clarity on what will
					move the needle.
				</p>
			</div>
		</section>
	);
}
