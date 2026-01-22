import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZOOM_LINK =
	'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call';

export default function GiveawayThankYou() {
	return (
		<>
			<Helmet>
				<title>Application Received | NextWave Web Studio</title>
				<meta
					name="description"
					content="Your application was received. Book a short Zoom call to speed up review and confirm fit."
				/>
				<meta name="robots" content="noindex,nofollow" />
			</Helmet>

			<section className="relative overflow-hidden">
				<div className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
				<div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

				<div className="relative mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
					<div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
						<p className="text-sm font-semibold tracking-tight text-sky-600">
							Application received
						</p>

						<h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
							Your application has been submitted
						</h1>

						<p className="mt-4 text-base text-gray-600 md:text-lg">
							Thank you for applying. I will review applications and select three
							businesses based on fit and readiness.
						</p>

						<div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
							<h2 className="text-base font-bold text-gray-900">
								Want to speed things up
							</h2>
							<p className="mt-2 text-sm text-gray-700">
								You can book a short Zoom call. This is not a sales call. It helps
								me understand your business, confirm fit, and avoid building the
								wrong thing if you are selected.
							</p>
							<p className="mt-2 text-sm text-gray-700">
								If you do not book a call, I will still review your application
								and reach out if selected.
							</p>
						</div>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
							<a
								href={ZOOM_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex w-full items-center justify-center rounded-xl bg-[#5BC0EB] px-6 py-3 text-sm font-semibold text-black shadow transition hover:brightness-95 sm:w-auto"
							>
								Book a Zoom call
							</a>

							<a
								href="mailto:hello@nextwavewebstudio.com"
								className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 sm:w-auto"
							>
								Prefer email
							</a>
						</div>

						<p className="mt-5 text-xs text-gray-500">
							No pressure. No hard sell. Just clarity.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
