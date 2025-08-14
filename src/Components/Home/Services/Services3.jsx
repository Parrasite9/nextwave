// import React from 'react';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import EmailIcon from '@mui/icons-material/Email';
// import { Link } from 'react-router-dom';

// const Services3 = () => {
// 	return (
// 		<div className="services2__container bg-lemon-chiffon">
// 			<div className="grid grid-cols-1 md:grid-cols-2 px-8">
// 				{/* Text Container */}
// 				<div className="order-1 flex flex-col justify-center md:order-2 py-4 md:px-8 md:py-8">
// 					<h3 className="mt-10 text-bright-teal font-semibold xl:text-xl">
// 						Cloud & AI-Driven Solutions
// 					</h3>
// 					<h2 className="font-bold text-darkGreen text-2xl mb-8 xl:text-3xl">
// 						Seamless Cloud Deployment
// 					</h2>
// 					<p className="mb-10">
// 						Our cloud solutions offer scalability, security, and
// 						flexibility, enabling your business to grow without
// 						limits. We make your transition to the cloud smooth and
// 						efficient.
// 					</p>

// 					{/* Icons and Text Grid */}
// 					<div className="grid grid-cols-5 grid-rows-2 gap-0 xl:flex">
// 						{/* Icon 1 */}
// 						<div className="row-start-1 col-start-1 flex items-center justify-center">
// 							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
// 								<PsychologyIcon
// 									className="text-white text-2xl"
// 									style={{ width: '40px', height: '40px' }}
// 								/>
// 							</div>
// 						</div>

// 						{/* Text 1 */}
// 						<div className="row-start-1 col-start-2 col-end-6 flex items-center">
// 							<div className="services2__icon__text p-5">
// 								<h2 className="font-semibold mb-2 text-bright-teal">
// 									AI-Driven Insights
// 								</h2>
// 								<p>
// 									Utilize powerful AI tools to analyze data,
// 									predict trends, and make smarter decisions,
// 									positioning your business at the forefront
// 									of digital innovation.
// 								</p>
// 							</div>
// 						</div>

// 						{/* Icon 2 */}
// 						<div className="row-start-2 col-start-1 flex items-center justify-center">
// 							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
// 								<EmailIcon
// 									className="text-white"
// 									style={{ width: '35px', height: '35px' }}
// 								/>
// 							</div>
// 						</div>

// 						{/* Text 2 */}
// 						<div className="row-start-2 col-start-2 col-end-6 flex items-center">
// 							<div className="services2__icon__text p-5">
// 								<h2 className="font-semibold mb-2 text-bright-teal">
// 									Targeted Email Marketing
// 								</h2>
// 								<p>
// 									Engage your audience with tailored email
// 									campaigns that deliver personalized
// 									experiences and drive meaningful engagement.
// 								</p>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="services2__button justify-center items-center mb-5">
// 						<Link to="/services/ai-automation">
// 							<button
// 								id="free-quote-service-button"
// 								className="btn-primary text-white mt-5 py-2 rounded-md flex justify-center w-full
//                 md:w-4/5 md:py-3 lg:justify-around lg:px-4 lg:w-3/5 xl:w-2/5 xl:px-4 2xl:w-1/2 2xl:px-12"
// 							>
// 								<span className="leading-none">
// 									Get A Free Project Quote
// 								</span>
// 								<ArrowForwardIosIcon fontSize="small" />
// 							</button>
// 						</Link>
// 					</div>
// 				</div>

// 				{/* Image Container */}
// 				<div className="order-2 md:order-1 flex items-center">
// 					<div className="grid grid-cols-1 gap-0 py-12 md:px-0 md:py-0 md:grid-cols-4 md:grid-rows-7 md:gap-2 lg:grid-cols-9 lg:grid-rows-6 lg:gap-2">
// 						{/* Image 1 */}
// 						<div className="hidden md:block md:flex md:items-center md:justify-center md:row-start-5 md:row-end-8 md:col-start-1 md:col-end-5 lg:col-start-3 lg:col-end-8 lg:row-start-4 lg:row-end-7">
// 							<img
// 								loading="lazy"
// 								className="w-2/3 object-cover my-2 md:my-0"
// 								src="/images/services/cloud2.svg"
// 								alt="Cloud"
// 							/>
// 						</div>

// 						{/* Image 2 */}
// 						<div className="md:flex md:items-center md:justify-center md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-4">
// 							<img
// 								loading="lazy"
// 								className="w-full object-cover mb-2 md:mb-0"
// 								src="/images/services/ai.svg"
// 								alt="A.I."
// 							/>
// 						</div>

// 						{/* Image 3 */}
// 						<div className="hidden md:block md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-5 lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4 lg:flex lg:items-center lg:justify-center">
// 							<img
// 								loading="lazy"
// 								className="w-2/3 object-cover mb-2 md:mb-0"
// 								src="/images/services/email.svg"
// 								alt="Email"
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Services3;

import React from 'react';
import { Link } from 'react-router-dom';

// tiny inline icons (no deps)
function IconZap(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M13 2L4 13h6l-1 9 9-11h-6l1-9z"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
function IconClock(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<circle
				cx="12"
				cy="12"
				r="9"
				stroke="currentColor"
				strokeWidth="1.6"
			/>
			<path
				d="M12 7v5l3 2"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
		</svg>
	);
}
function IconShield(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
				stroke="currentColor"
				strokeWidth="1.6"
			/>
		</svg>
	);
}

export default function ServicesAI() {
	return (
		<section className="relative overflow-hidden bg-[#0b1f36] text-white">
			{/* soft animated accents (uses your .animate-blob classes) */}
			<div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 animate-blob rounded-full bg-gradient-to-tr from-sky-500/20 via-cyan-400/15 to-emerald-300/10 blur-3xl" />
			<div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 animate-blob-2 rounded-full bg-gradient-to-tr from-fuchsia-500/15 via-rose-400/10 to-orange-300/10 blur-3xl" />

			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
				{/* LEFT: “What we automate” board */}
				<div className="order-2 lg:order-1">
					<div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md">
						<div className="mb-4 flex items-center justify-between">
							<p className="text-sm font-semibold text-white/90">
								What we automate
							</p>
							<span className="text-xs text-white/60">
								examples
							</span>
						</div>

						{/* concise tiles (line-clamped, mobile-first) */}
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="rounded-xl border border-white/10 bg-white/10 p-4">
								<p className="text-[11px] uppercase tracking-wide text-white/70">
									Leads
								</p>
								<h4 className="mt-1 line-clamp-2 text-sm font-semibold">
									Capture → qualify → route to inbox/CRM
								</h4>
								<p className="mt-1 line-clamp-2 text-xs text-white/70">
									Auto‑enrich, score, and assign without
									manual triage.
								</p>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/10 p-4">
								<p className="text-[11px] uppercase tracking-wide text-white/70">
									Follow‑ups
								</p>
								<h4 className="mt-1 line-clamp-2 text-sm font-semibold">
									Quote/estimate reminders that actually get
									replies
								</h4>
								<p className="mt-1 line-clamp-2 text-xs text-white/70">
									Timed nudges + AI‑personalized copy.
								</p>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/10 p-4">
								<p className="text-[11px] uppercase tracking-wide text-white/70">
									Scheduling
								</p>
								<h4 className="mt-1 line-clamp-2 text-sm font-semibold">
									Missed‑call texts & appointment
									confirmations
								</h4>
								<p className="mt-1 line-clamp-2 text-xs text-white/70">
									Reduce no‑shows with smart reminders.
								</p>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/10 p-4">
								<p className="text-[11px] uppercase tracking-wide text-white/70">
									Ops
								</p>
								<h4 className="mt-1 line-clamp-2 text-sm font-semibold">
									Data cleanup, tags, and handoffs across
									tools
								</h4>
								<p className="mt-1 line-clamp-2 text-xs text-white/70">
									Keep CRM, email, and billing in sync.
								</p>
							</div>
						</div>

						{/* KPI strip */}
						<div className="mt-5 grid grid-cols-3 gap-3">
							<div className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
								<div className="text-lg font-extrabold">
									18h
								</div>
								<div className="mt-0.5 text-[11px] text-white/80">
									saved / wk
								</div>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
								<div className="text-lg font-extrabold">
									+27%
								</div>
								<div className="mt-0.5 text-[11px] text-white/80">
									reply rate
								</div>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
								<div className="text-lg font-extrabold">
									~$1.7k
								</div>
								<div className="mt-0.5 text-[11px] text-white/80">
									ops/mo
								</div>
							</div>
						</div>
					</div>

					{/* glow under card (desktop only) */}
					<div className="absolute inset-x-6 -bottom-6 hidden h-20 rounded-full bg-sky-300/20 blur-2xl lg:block" />
				</div>

				{/* RIGHT: copy + value cards + CTA */}
				<div className="order-1 lg:order-2">
					<p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
						AI & Automation
					</p>
					<h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
						Make busywork disappear.{' '}
						<span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
							Focus on customers
						</span>
						.
					</h2>
					<p className="mt-4 max-w-xl text-white/80">
						We connect your tools (forms, calendars, email, CRM,
						payments) and add just‑enough AI so leads get handled,
						follow‑ups go out, and data stays clean—without adding
						headcount.
					</p>

					{/* value points */}
					<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
						<div className="rounded-xl border border-white/10 bg-white/5 p-4">
							<IconZap className="h-6 w-6 text-sky-300" />
							<h3 className="mt-3 text-sm font-semibold">
								Faster response
							</h3>
							<p className="mt-1 text-xs text-white/70">
								Route & reply within minutes.
							</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 p-4">
							<IconClock className="h-6 w-6 text-emerald-300" />
							<h3 className="mt-3 text-sm font-semibold">
								Less manual work
							</h3>
							<p className="mt-1 text-xs text-white/70">
								Tag, sync, and schedule automatically.
							</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 p-4">
							<IconShield className="h-6 w-6 text-sky-200" />
							<h3 className="mt-3 text-sm font-semibold">
								Safe & auditable
							</h3>
							<p className="mt-1 text-xs text-white/70">
								Least‑privilege, logged actions.
							</p>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
						<Link to="/services/ai-automation">
							<button className="rounded-xl bg-sky-blue px-5 py-3 text-sm font-semibold text-black shadow hover:brightness-95">
								Explore automation services
							</button>
						</Link>
						<Link
							to="/contact"
							className="text-sm font-semibold text-sky-200 underline-offset-4 hover:text-white hover:underline"
						>
							Book a quick consult →
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
