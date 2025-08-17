// src/Components/Home/Services2.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Web Design & Development — premium, focused section
 * - Mobile-first
 * - Dark, high-contrast “craftsmanship” vibe
 * - Clear bullets, proof strip, single CTA
 * - Subtle motion on hover (no custom CSS required)
 */
export default function Services2() {
	return (
		<section className="relative overflow-hidden">
			{/* subtle gradient backdrop */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0D3B66] via-[#0D3B66]/95 to-[#142a43] opacity-95" />

			{/* soft glow accents */}
			<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20">
				{/* Accent rail + heading */}
				<div className="flex items-center gap-3">
					<span className="h-6 w-1.5 rounded-full bg-sandy-brown" />
					<p className="text-xs font-semibold uppercase tracking-wider text-white/70">
						Web Design & Development
					</p>
				</div>

				<div className="mt-3 max-w-2xl">
					<h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
						Crafting websites that feel premium — and convert.
					</h2>
					<p className="mt-3 text-base text-white/80 md:text-lg">
						Strategy-led design, clean code, and fast performance.
						We build sites that look the part and move the needle.
					</p>
				</div>

				{/* Benefits (mobile: stacked / desktop: 3-up) */}
				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<Benefit
						title="Conversion‑first UX"
						desc="Clear paths, fewer drop‑offs, more booked calls and purchases."
					/>
					<Benefit
						title="Fast & SEO‑ready"
						desc="Performance best practices baked in: Core Web Vitals, semantic HTML."
					/>
					<Benefit
						title="Built to grow with you"
						desc="Your site won’t need a rebuild every time you level up — we design with future growth in mind."
					/>
				</div>

				{/* Proof strip */}
				<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
					<Stat label="Avg. load time" value="~1.2s" />
					<Stat label="Mobile Lighthouse" value="90+ score" />
					<Stat label="Delivery rate" value="On‑time" />
				</div>

				{/* CTA row */}
				<div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
					<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
						<button
							className="rounded-xl bg-sandy-brown px-6 py-3 font-semibold text-black shadow-sm transition hover:brightness-95 active:scale-[0.99]"
							id="zoom-service-button"
						>
							Start your website project
						</button>
					</Link>

					<Link
						to="/services/web-design"
						className="text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
					>
						Design That Works →
					</Link>
				</div>
			</div>
		</section>
	);
}

/* ---------- tiny helpers ---------- */

function Benefit({ title, desc }) {
	return (
		<div className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10">
			<div className="flex items-start gap-3">
				{/* icon dot */}
				<span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sandy-brown shadow-[0_0_0_4px_rgba(238,150,75,0.15)] transition group-hover:scale-110" />
				<div>
					<h3 className="text-base font-semibold text-white">
						{title}
					</h3>
					<p className="mt-1 text-sm leading-relaxed text-white/80">
						{desc}
					</p>
				</div>
			</div>
		</div>
	);
}

function Stat({ label, value }) {
	return (
		<div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90 backdrop-blur-sm">
			<div className="text-sm text-white/70">{label}</div>
			<div className="mt-1 text-xl font-extrabold text-white">
				{value}
			</div>
		</div>
	);
}
