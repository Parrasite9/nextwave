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
			<div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 animate-blob rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-cyan-300 opacity-20 blur-3xl" />
			<div className="pointer-events-none absolute right-20 top-1/2 h-80 w-80 animate-blob2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-orange-300 opacity-20 blur-3xl" />

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
						<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
							<button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-black/90">
								Discuss Your Project
							</button>
						</Link>
						<Link
							to="/contact"
							className="text-sm font-semibold text-gray-700 underline-offset-4 hover:underline"
						>
							Get a quick estimate →
						</Link>
					</div>

					{/* Trust badges */}
					<div className="mt-6 flex flex-wrap items-center gap-4">
						<a
							href="https://trustlock.co/verify/your-link"
							target="_blank"
							rel="noreferrer"
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
						>
							<img
								src="/images/trust/ssl.png"
								alt="Secure SSL"
								className="h-10 w-auto"
								loading="lazy"
							/>
						</a>
					</div>
				</div>

				{/* Right: Premium credibility card (no inflated stats) */}
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

						{/* Authority bar (logos) */}
						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<img
									src="/images/logos/google-partner.png"
									alt="Google Partner"
									className="h-7 w-auto opacity-80"
									loading="lazy"
								/>
								<img
									src="/images/logos/klaviyo.png"
									alt="Klaviyo"
									className="h-7 w-auto opacity-80"
									loading="lazy"
								/>
								<img
									src="/images/logos/stripe.png"
									alt="Stripe"
									className="h-7 w-auto opacity-80"
									loading="lazy"
								/>
							</div>
							<p className="text-sm text-gray-600">
								Trusted by growth‑minded teams across ecommerce,
								services, and SaaS.
							</p>
						</div>

						{/* Availability + micro‑testimonial */}
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
		</section>
	);
}
