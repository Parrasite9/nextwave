// src/Pages/GiveawayApplication.jsx
import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

/**
 * Replace this with your real Tally embed URL.
 * You can find it in Tally -> Share -> Embed -> "Embed URL"
 *
 * Example formats often look like:
 * https://tally.so/embed/<FORM_ID>?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1
 */
const TALLY_EMBED_URL = 'https://tally.so/embed/q4Rde9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

/**
 * Optional: add UTM/source into the embed so Tally captures it.
 * Tally will store these as hidden fields if configured, or at least preserve them in submission metadata.
 */
function useEmbedUrlWithParams(baseUrl) {
	return useMemo(() => {
		try {
			const url = new URL(baseUrl);
			url.searchParams.set('source', 'free_website_giveaway');

			// If you want to pass through UTM params from your landing traffic:
			const qs = new URLSearchParams(window.location.search);
			['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
				const v = qs.get(k);
				if (v) url.searchParams.set(k, v);
			});

			return url.toString();
		} catch {
			return baseUrl;
		}
	}, [baseUrl]);
}

export default function GiveawayApplication() {
	const embedUrl = useEmbedUrlWithParams(TALLY_EMBED_URL);

	useEffect(() => {
		// Tally embed script (required for dynamic height and nicer embed behavior)
		// Safe to include on this page only.
		const existing = document.querySelector('script[data-tally-embed="true"]');
		if (existing) return;

		const s = document.createElement('script');
		s.src = 'https://tally.so/widgets/embed.js';
		s.async = true;
		s.setAttribute('data-tally-embed', 'true');
		document.body.appendChild(s);

		return () => {
			// Keep script in place to avoid reloading if they navigate back and forth.
			// If you prefer strict cleanup, you can remove it here.
		};
	}, []);

	return (
		<>
			<Helmet>
				<title>Free Website Giveaway Application | NextWave Web Studio</title>
				<meta
					name="description"
					content="Apply for the free website giveaway. Three businesses will be selected based on fit and readiness."
				/>
				<meta name="robots" content="noindex,nofollow" />
			</Helmet>

			{/* Header bar */}
			<section className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
					<Link
						to="/free-website-giveaway"
						className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
					>
						<span aria-hidden="true">←</span>
						Back
					</Link>

					<div className="text-sm font-semibold text-gray-800">
						Free Website Giveaway Application
					</div>

					<div className="hidden text-sm text-gray-600 md:block">
						Takes about 2 to 3 minutes
					</div>
				</div>
			</section>

			{/* Page body */}
			<section className="relative overflow-hidden">
				{/* subtle background accents */}
				<div className="pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />
				<div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

				<div className="relative mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-14">
					{/* Intro */}
					<div className="mx-auto max-w-3xl">
						<p className="text-sm font-semibold tracking-tight text-sky-600">
							Midland and Odessa businesses
						</p>

						<h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
							Application
						</h1>

						<p className="mt-3 text-base text-gray-600 md:text-lg">
							This is a short application to determine fit for a 3 page website build
							with the build fee waived. Three businesses will be selected based on fit and readiness.
						</p>

						<div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
									Build only
								</p>
								<p className="mt-1 text-sm text-gray-700">
									Hosting and maintenance are separate.
								</p>
							</div>
							<div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
									Selection
								</p>
								<p className="mt-1 text-sm text-gray-700">
									Reviewed for fit and readiness, not first come.
								</p>
							</div>
						</div>

						<p className="mt-4 text-xs text-gray-500">
							By submitting, you agree to receive updates about your application by email.
						</p>
					</div>

					{/* Embed card */}
					<div className="mx-auto mt-8 max-w-3xl">
						<div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
							{/* Safety check: avoid rendering if URL not set */}
							{TALLY_EMBED_URL.includes('REPLACE_ME') ? (
								<div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
									<p className="text-sm font-semibold text-amber-900">
										Tally embed not configured
									</p>
									<p className="mt-2 text-sm text-amber-900/80">
										Replace <span className="font-mono">TALLY_EMBED_URL</span> in{' '}
										<span className="font-mono">src/Pages/GiveawayApplication.jsx</span>{' '}
										with your real Tally embed URL.
									</p>
								</div>
							) : (
								<iframe
									title="Free Website Giveaway Application"
									src={embedUrl}
									className="w-full"
									style={{
										minHeight: 720,
										border: 0,
										borderRadius: 16,
									}}
									loading="lazy"
								/>
							)}
						</div>

						{/* Footer helper */}
						<div className="mt-4 text-center text-xs text-gray-500">
							Having trouble with the form? Email{' '}
							<a
								href="mailto:hello@nextwavewebstudio.com"
								className="font-semibold text-gray-700 underline underline-offset-2 hover:text-gray-900"
							>
								hello@nextwavewebstudio.com
							</a>
							.
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
