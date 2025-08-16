import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/styles.css';

const Check = (props) => (
	<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
		<path
			fillRule="evenodd"
			d="M16.704 5.29a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2A1 1 0 016.304 9.29l2.493 2.493 6.493-6.492a1 1 0 011.414 0z"
			clipRule="evenodd"
		/>
	</svg>
);

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			{/* animated background accents */}
			<div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 animate-blob rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-cyan-300 opacity-25 blur-3xl md:opacity-20" />
			{/* NOTE: fixed class to animate-blob-2 */}
			<div className="pointer-events-none absolute right-20 top-1/2 h-80 w-80 animate-blob-2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-orange-300 opacity-25 blur-3xl md:opacity-20" />

			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
				{/* Left: Copy */}
				<div className="relative">
					<h3 className="font-semibold tracking-tight text-sky-600 md:text-lg">
						A New Wave Of Online Success
					</h3>
					<h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl">
						Websites that{' '}
						<span className="text-sky-700">increase revenue</span>
					</h1>
					<p className="mt-4 max-w-xl text-lg text-gray-600">
						Maximize ROI with sites designed to convert—fast,
						accessible, and built to grow with you.
					</p>
					<ul className="mt-6 space-y-2 text-sm text-gray-700">
						<li className="flex items-center gap-2">
							<Check className="h-5 w-5 text-emerald-500" />{' '}
							Conversion‑first design
						</li>
						<li className="flex items-center gap-2">
							<Check className="h-5 w-5 text-emerald-500" /> SEO +
							speed best practices
						</li>
						<li className="flex items-center gap-2">
							<Check className="h-5 w-5 text-emerald-500" />{' '}
							Launched on time, every time
						</li>
					</ul>
					<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
						<Link
							to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call"
							aria-label="Discuss your project on a Zoom discovery call"
						>
							<button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
								Discuss Your Project
							</button>
						</Link>
						<Link
							to="/contact"
							className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
						>
							Get a quick estimate →
						</Link>
					</div>
					{/* Trust badges */}

					<div
						role="group"
						aria-labelledby="trust-badges-title"
						className="mt-6 flex flex-wrap items-center justify-center gap-4"
					>
						{/* Invisible label for SR users */}
						<h3 id="trust-badges-title" className="sr-only">
							Trust badges
						</h3>

						<figure className="flex items-center">
							<img
								src="/images/hero/moneyback.png"
								alt="100% money‑back guarantee"
								className="h-[125px] lg:h-[225px] w-auto"
								width="200"
								height="40"
								loading="lazy"
								decoding="async"
							/>
							<figcaption className="sr-only">
								We stand behind our work with a 100% money‑back
								guarantee.
							</figcaption>
						</figure>

						<figure className="flex items-center">
							<img
								src="/images/hero/trustedby.png"
								alt="Trusted by Midland and Odessa businesses"
								className="h-[125px] lg:h-[225px] w-auto"
								width="220"
								height="40"
								loading="lazy"
								decoding="async"
							/>
							<figcaption className="sr-only">
								Trusted by businesses in Midland and Odessa.
							</figcaption>
						</figure>
					</div>
				</div>

				{/* Right: Premium credibility card */}
				<div className="relative">
					<div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur-md md:p-8">
						<p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
							Why teams choose NextWave
						</p>

						<div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
							<div className="rounded-xl bg-gray-50 p-4">
								<div className="text-sm font-semibold text-gray-700">
									Owner‑led
								</div>
								<div className="mt-1 text-xs text-gray-600">
									Work directly with Isaiah
								</div>
							</div>
							<div className="rounded-xl bg-gray-50 p-4">
								<div className="text-sm font-semibold text-gray-700">
									Transparent pricing
								</div>
								<div className="mt-1 text-xs text-gray-600">
									Clear scope & timelines
								</div>
							</div>
							<div className="rounded-xl bg-gray-50 p-4">
								<div className="text-sm font-semibold text-gray-700">
									Conversion‑focused
								</div>
								<div className="mt-1 text-xs text-gray-600">
									Design that drives results
								</div>
							</div>
						</div>

						<hr className="my-6 border-gray-200/70" />

						<div className="space-y-3">
							<div className="flex items-center gap-6 flex-wrap">
								<img
									src="/images/hero/google.png"
									alt="Google Partner"
									className="h-12 sm:h-14 md:h-16 w-auto opacity-80"
									loading="lazy"
								/>
								<img
									src="/images/hero/meta.png"
									alt="Facebook"
									className="h-12 sm:h-14 md:h-16 w-auto opacity-80"
									loading="lazy"
								/>
								<img
									src="/images/hero/openAI.png"
									alt="OpenAI"
									className="h-12 sm:h-14 md:h-16 w-auto opacity-80"
									loading="lazy"
								/>
								<img
									src="/images/hero/microsoft.png"
									alt="Microsoft"
									className="h-12 sm:h-14 md:h-16 w-auto opacity-80"
									loading="lazy"
								/>
								<img
									src="/images/hero/aws.png"
									alt="AWS"
									className="h-12 sm:h-14 md:h-16 w-auto opacity-80 hidden md:block"
									loading="lazy"
								/>
								<img
									src="/images/hero/klaviyo.png"
									alt="Klaviyo"
									className="h-12 sm:h-14 md:h-16 w-auto opacity-80 hidden md:block"
									loading="lazy"
								/>
							</div>

							<p className="text-sm text-gray-600">
								Built on the world’s most trusted platforms in
								search, social, AI, and business solutions.
							</p>
						</div>

						<div className="mt-6 grid gap-3 sm:grid-cols-2">
							<div className="rounded-xl bg-emerald-50 p-4">
								<p className="text-xs font-semibold uppercase text-emerald-700">
									Availability
								</p>
								<p className="mt-1 text-sm text-emerald-800">
									Accepting 1–2 new projects this month
								</p>
							</div>
							<div className="rounded-xl bg-gray-50 p-4">
								<p className="text-sm text-gray-700">
									“Clear, fast, and the site actually
									converts.”{' '}
									<span className="text-gray-500">
										— Client, 2024
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Reduce motion preference */}
			<style>{`
    @media (prefers-reduced-motion: reduce) {
      .animate-blob, .animate-blob-2 { animation: none !important; }
    }
  `}</style>
		</section>
	);
}
