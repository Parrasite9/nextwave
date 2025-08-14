// import React from 'react';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
// import InsightsIcon from '@mui/icons-material/Insights';
// import { Link } from 'react-router-dom';

// const Services = () => {
// 	return (
// 		<div className="services__container">
// 			<div className="grid grid-cols-1 md:grid-cols-2 px-8">
// 				{/* Text Container */}
// 				<div className="order-1 flex flex-col justify-center py-4 md:px-8 md:py-8">
// 					<h3 className="mt-10 text-bright-teal font-semibold xl:text-xl">
// 						Online Presence & Visibility
// 					</h3>
// 					<h2 className="font-bold text-2xl mb-8 xl:text-3xl">
// 						Optimizing Your Reach for Maximum Impact
// 					</h2>
// 					<p className="mb-10">
// 						At NextWave, we use proven digital strategies to amplify
// 						your online presence. From SEO to data-driven content
// 						creation, we help you reach a wider audience, attract
// 						valuable traffic, and convert visitors into loyal
// 						customers.
// 					</p>

// 					{/* Icons and Text Grid */}
// 					<div className="grid grid-cols-5 grid-rows-2 gap-0 xl:flex">
// 						{/* Icon 1 */}
// 						<div className="row-start-1 col-start-1 flex items-center justify-center">
// 							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
// 								<ScreenSearchDesktopIcon
// 									className="text-white text-2xl"
// 									style={{ width: '30px', height: '30px' }}
// 								/>
// 							</div>
// 						</div>

// 						{/* Text 1 */}
// 						<div className="row-start-1 col-start-2 col-end-6 flex items-center">
// 							<div className="services__icon__text p-5">
// 								<h2 className="font-semibold mb-2 text-bright-teal">
// 									Search Engine Optimization
// 								</h2>
// 								<p>
// 									Boost your visibility on search engines with
// 									targeted keywords, on-page optimization, and
// 									link-building strategies designed to attract
// 									organic traffic.
// 								</p>
// 							</div>
// 						</div>

// 						{/* Icon 2 */}
// 						<div className="row-start-2 col-start-1 flex items-center justify-center">
// 							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
// 								<InsightsIcon
// 									className="text-white"
// 									style={{ width: '35px', height: '35px' }}
// 								/>
// 							</div>
// 						</div>

// 						{/* Text 2 */}
// 						<div className="row-start-2 col-start-2 col-end-6 flex items-center">
// 							<div className="services__icon__text p-5">
// 								<h2 className="font-semibold mb-2 text-bright-teal">
// 									Analytics & Insights
// 								</h2>
// 								<p>
// 									Leverage Google Analytics to gain insights
// 									into user behavior, optimize engagement, and
// 									measure the performance of your digital
// 									strategies in real time.
// 								</p>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="services__button justify-center items-center mb-5">
// 						<Link to="/requestGBP">
// 							<button
// 								id="google-report-service-button"
// 								className="btn-primary text-white mt-5 py-2 rounded-md flex justify-center w-full
//                  md:py-3 lg:justify-around lg:px-12 xl:w-3/5 2xl:w-1/2"
// 							>
// 								<span className="leading-none">
// 									Free Google Business Insights
// 								</span>
// 								<ArrowForwardIosIcon fontSize="small" />
// 							</button>
// 						</Link>
// 					</div>
// 				</div>

// 				{/* Image Container */}
// 				<div className="order-2 flex flex-col justify-center">
// 					<div className="grid grid-cols-1 gap-0 py-12 md:px-0 md:py-0 md:grid-cols-4 md:grid-rows-7 md:gap-2 lg:grid-cols-9 lg:grid-rows-6 lg:gap-2">
// 						{/* Image 1 */}
// 						<div className="md:row-start-5 md:row-end-8 md:col-start-1 md:col-end-5 lg:col-start-3 lg:col-end-8 lg:row-start-4 lg:row-end-7 flex justify-center items-center">
// 							<img
// 								loading="lazy"
// 								className="w-full h-auto object-cover my-2 md:my-0"
// 								src="/images/services/analytics.svg"
// 								alt="analytics"
// 							/>
// 						</div>

// 						{/* Image 2 */}
// 						<div className="hidden md:block md:flex md:items-center md:justify-center md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-4">
// 							<img
// 								loading="lazy"
// 								className="w-full h-auto object-cover mb-2 md:mb-0"
// 								src="/images/services/seo.svg"
// 								alt="Search Engine Optimization"
// 							/>
// 						</div>

// 						{/* Image 3 */}
// 						<div className="hidden md:block md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-5 lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4 lg:flex lg:items-center lg:justify-center">
// 							<img
// 								loading="lazy"
// 								className="w-full h-auto object-cover mb-2 md:mb-0"
// 								src="/images/services/searching.svg"
// 								alt="Searching"
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Services;

import React from 'react';
import { Link } from 'react-router-dom';

function IconSearch(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<circle
				cx="11"
				cy="11"
				r="6"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M20 20l-3.5-3.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}
function IconMapPin(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M12 22s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<circle
				cx="12"
				cy="10"
				r="2.5"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	);
}
function IconBolt(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M13 2L4 13h6l-1 9 9-11h-6l1-9z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
function TrendUp(props) {
	return (
		<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
			<path
				d="M3 13l5-5 4 4 5-6"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default function ServicesSEO() {
	return (
		<section className="relative overflow-hidden bg-white text-gray-900">
			{/* subtle background accents */}
			<div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-400/20 via-cyan-300/15 to-emerald-200/10 blur-3xl" />
			<div className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-400/15 via-rose-300/10 to-orange-200/10 blur-3xl" />

			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
				{/* LEFT: copy */}
				<div>
					<p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
						SEO & Local Optimization
					</p>
					<h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
						Rank higher.{' '}
						<span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
							Get found. Grow
						</span>
						.
					</h2>
					<p className="mt-4 max-w-xl text-gray-600">
						We focus on the levers that move rankings and revenue:
						technical fixes, content that answers intent, and local
						signals that put you ahead in Maps and Search.
					</p>

					{/* value cards */}
					<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
						<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
							<IconSearch className="h-6 w-6 text-sky-500" />
							<h3 className="mt-3 text-sm font-semibold">
								Technical SEO
							</h3>
							<p className="mt-1 text-xs text-gray-600">
								Fix crawl, speed, and structure for clean
								indexing.
							</p>
						</div>
						<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
							<IconMapPin className="h-6 w-6 text-emerald-500" />
							<h3 className="mt-3 text-sm font-semibold">
								Local SEO
							</h3>
							<p className="mt-1 text-xs text-gray-600">
								Maps, citations, and reviews that drive visits.
							</p>
						</div>
						<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
							<IconBolt className="h-6 w-6 text-sky-500" />
							<h3 className="mt-3 text-sm font-semibold">
								Content that wins
							</h3>
							<p className="mt-1 text-xs text-gray-600">
								Intent-matched pages that convert, not just
								rank.
							</p>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
						<Link to="/services/local-seo">
							<button className="rounded-xl bg-sky-blue px-5 py-3 text-sm font-semibold text-black shadow hover:brightness-95">
								See SEO packages
							</button>
						</Link>
						<Link
							to="/contact"
							className="text-sm font-semibold text-sky-600 underline-offset-4 hover:text-sky-800 hover:underline"
						>
							Get a free audit →
						</Link>
					</div>
				</div>

				{/* RIGHT: “SEO snapshot” visual (desktop) */}
				<div className="relative hidden lg:block">
					<div className="relative z-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
						<div className="mb-4 flex items-center justify-between">
							<p className="text-sm font-semibold text-gray-800">
								Live keyword snapshot
							</p>
							<span className="text-xs text-gray-500">
								sample
							</span>
						</div>

						<div className="space-y-3">
							{[
								{
									kw: 'local plumber midland tx',
									pos: 2,
									change: '+3',
								},
								{
									kw: 'emergency plumbing odessa',
									pos: 4,
									change: '+5',
								},
								{
									kw: 'water heater install near me',
									pos: 5,
									change: '+2',
								},
								{
									kw: 'drain cleaning midland',
									pos: 3,
									change: '+4',
								},
								{
									kw: '24/7 plumber odessa',
									pos: 1,
									change: '+1',
								},
							].map((row, i) => (
								<div
									key={row.kw}
									className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
								>
									<div className="truncate text-sm">
										{row.kw}
									</div>
									<div className="text-right text-sm font-semibold tabular-nums">
										#{row.pos}
									</div>
									<div className="flex items-center gap-1 text-emerald-500">
										<TrendUp className="h-4 w-4" />
										<span className="text-xs font-semibold">
											{row.change}
										</span>
									</div>
								</div>
							))}
						</div>

						{/* tiny bar chart */}
						<div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
							<p className="mb-3 text-xs font-semibold text-gray-600">
								Visibility growth (last 8 weeks)
							</p>
							<div className="flex h-24 items-end gap-1.5">
								{[
									20, 24, 23, 28, 34, 39, 44, 52, 58, 63, 70,
									78,
								].map((h, idx) => (
									<div
										key={idx}
										className="w-3 rounded-sm bg-gradient-to-t from-sky-400/70 to-emerald-300/70"
										style={{
											height: `${Math.min(h, 90)}%`,
										}}
									/>
								))}
							</div>
						</div>
					</div>

					{/* glow under the card */}
					<div className="absolute inset-x-6 -bottom-8 h-20 rounded-full bg-sky-200/30 blur-2xl" />
				</div>
			</div>
		</section>
	);
}
