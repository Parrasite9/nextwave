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
					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
						<Link to="/services/local-seo">
							<button className="rounded-xl bg-sky-blue px-5 py-3 text-sm font-semibold text-black shadow hover:brightness-95">
								See SEO packages
							</button>
						</Link>
						<Link
							to="/contact"
							className="text-sm font-semibold text-sky-600 underline-offset-4 hover:text-sky-800 hover:underline sm:py-3"
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
