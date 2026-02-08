// src/Pages/FreeWebsiteGiveawayLubbock.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function CheckIcon(props) {
	return (
		<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M16.704 5.29a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2A1 1 0 016.304 9.29l2.493 2.493 6.493-6.492a1 1 0 011.414 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function SectionHeader({ eyebrow, title, subtitle, center = false }) {
	return (
		<div className={center ? 'text-center' : ''}>
			{eyebrow ? (
				<p className="text-sm font-semibold tracking-tight text-sky-600 md:text-base">
					{eyebrow}
				</p>
			) : null}
			<h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
				{title}
			</h2>
			{subtitle ? (
				<p className="mt-3 text-base text-gray-600 md:text-lg">
					{subtitle}
				</p>
			) : null}
		</div>
	);
}

function Tile({ title, subtitle }) {
	return (
		<div className="rounded-xl bg-gray-50 p-4">
			<div className="text-sm font-semibold text-gray-800">{title}</div>
			{subtitle ? (
				<div className="mt-1 text-xs text-gray-600">{subtitle}</div>
			) : null}
		</div>
	);
}

function StepCard({ step, title, body }) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
			<div className="flex items-start gap-3">
				<div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900 text-sm font-semibold text-white">
					{step}
				</div>
				<div>
					<h3 className="text-base font-bold text-gray-900">{title}</h3>
					<p className="mt-1 text-sm text-gray-600">{body}</p>
				</div>
			</div>
		</div>
	);
}

function FAQItem({ q, a }) {
	return (
		<details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
			<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
				<h3 className="text-base font-semibold text-gray-900">{q}</h3>
				<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition group-open:rotate-45">
					+
				</span>
			</summary>
			<p className="mt-3 text-sm leading-relaxed text-gray-600">{a}</p>
		</details>
	);
}

export default function FreeWebsiteGiveawayLubbock() {
	const processRef = useRef(null);

	const scrollToProcess = () => {
		const el = processRef.current;
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<>
			<Helmet>
				<title>Free Website Giveaway | NextWave Web Studio</title>
				<meta
					name="description"
					content="Three Lubbock businesses will receive a professionally built 3 page website with the build fee waived. Application only. Selected by fit and readiness."
				/>
			</Helmet>

			{/* HERO */}
			<section className="relative overflow-hidden">
				{/* background accents */}
				<div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 animate-blob rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-cyan-300 opacity-25 blur-3xl md:opacity-20" />
				<div className="pointer-events-none absolute right-20 top-1/2 h-80 w-80 animate-blob2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-orange-300 opacity-25 blur-3xl md:opacity-20" />

				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
					{/* Left: Copy */}
					<div className="relative">
						<p className="font-semibold tracking-tight text-sky-600 md:text-lg">
							Happily Serving Lubbock Businesses
						</p>

						<h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
							3 businesses will receive a{' '}
							<span className="text-sky-700">3 page website build</span>{' '}
							with the build fee waived
						</h1>

						<p className="mt-4 max-w-xl text-lg text-gray-600">
							I am a local software and web developer offering a limited build
							only opportunity for established businesses that want a clean,
							modern website they can actually use.
						</p>

						<ul className="mt-6 space-y-2 text-sm text-gray-700">
							<li className="flex items-center gap-2">
								<CheckIcon className="h-5 w-5 text-emerald-500" />
								Three pages: Home, Services, Contact
							</li>
							<li className="flex items-center gap-2">
								<CheckIcon className="h-5 w-5 text-emerald-500" />
								Copywriting included
							</li>
							<li className="flex items-center gap-2">
								<CheckIcon className="h-5 w-5 text-emerald-500" />
								Delivered within 30 days after assets are received
							</li>
						</ul>

						<div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
							<Link to="/free-website-giveaway/apply" aria-label="Start the application">
								<button className="w-full rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto">
									Start application
								</button>
							</Link>

							<button
								type="button"
								onClick={scrollToProcess}
								className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
							>
								See how selection works
							</button>
						</div>

						<p className="mt-4 text-sm text-gray-600">
							Build only. Hosting and maintenance are separate.
						</p>
						<p className="mt-2 text-sm text-gray-600">
							Applications are reviewed for fit and readiness. Not first come,
							not random.
						</p>
					</div>

					{/* Right: Credibility Card */}
					<div className="relative">
						<div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur-md md:p-8">
							<p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
								What is included
							</p>

							<div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
								<Tile title="Three page site" subtitle="Home, Services, Contact" />
								<Tile title="Clean modern design" subtitle="Built to feel premium" />
								<Tile title="Conversion focused" subtitle="Clear next steps" />
								<Tile title="Copy included" subtitle="You provide the facts" />
								<Tile title="Owner built" subtitle="Work directly with Isaiah" />
								<Tile title="30 day window" subtitle="After assets are received" />
							</div>

							<hr className="my-6 border-gray-200/70" />

							<p className="text-sm font-semibold text-gray-800">You will need</p>
							<ul className="mt-3 space-y-2 text-sm text-gray-700">
								<li className="flex items-center gap-2">
									<span className="inline-flex h-2 w-2 rounded-full bg-sky-500" />
									Logo
								</li>
								<li className="flex items-center gap-2">
									<span className="inline-flex h-2 w-2 rounded-full bg-sky-500" />
									Photos
								</li>
								<li className="flex items-center gap-2">
									<span className="inline-flex h-2 w-2 rounded-full bg-sky-500" />
									Service list and pricing
								</li>
								<li className="flex items-center gap-2">
									<span className="inline-flex h-2 w-2 rounded-full bg-sky-500" />
									Domain access if you already have one
								</li>
							</ul>

							<div className="mt-6 rounded-2xl bg-gray-50 p-4">
								<p className="text-sm font-semibold text-gray-800">Quick note</p>
								<p className="mt-1 text-sm text-gray-600">
									This is a limited build only opportunity. If you want hosting
									and ongoing updates after the build, that can be added later.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Reduce motion preference */}
				<style>{`
          @media (prefers-reduced-motion: reduce) {
            .animate-blob, .animate-blob2 { animation: none !important; }
          }
        `}</style>
			</section>

			{/* WHAT YOU GET */}
			<section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20" id="included">
				<SectionHeader
					eyebrow="Included"
					title="What you get in the build"
					subtitle="A simple, professional site built to communicate clearly and drive action."
				/>

				<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-900">Home page</h3>
						<p className="mt-2 text-sm text-gray-600">
							Clearly explains what you do, who it is for, and what to do next.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-900">Services page</h3>
						<p className="mt-2 text-sm text-gray-600">
							Simple service layout that helps people decide quickly.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-900">Contact page</h3>
						<p className="mt-2 text-sm text-gray-600">
							Clear call to action with the contact details you prefer.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-900">Copywriting included</h3>
						<p className="mt-2 text-sm text-gray-600">
							You provide the details. I write the copy so it reads clean and professional.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-900">Basic SEO structure</h3>
						<p className="mt-2 text-sm text-gray-600">
							Clean headings, page hierarchy, and metadata foundation.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
						<h3 className="text-base font-bold text-gray-900">Mobile and speed focused</h3>
						<p className="mt-2 text-sm text-gray-600">
							Designed to look sharp on phones and load fast.
						</p>
					</div>
				</div>

				<div className="mt-10 flex justify-center">
					<Link to="/free-website-giveaway/apply" aria-label="Start the application">
						<button className="rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
							Start application
						</button>
					</Link>
				</div>
			</section>

			{/* NOT INCLUDED */}
			<section className="bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20" id="not-included">
					<SectionHeader
						eyebrow="Boundaries"
						title="What is not included"
						subtitle="Clear scope keeps delivery fast and the end result clean."
					/>

					<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
							<ul className="space-y-3 text-sm text-gray-700">
								<li className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gray-900" />
									Hosting
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gray-900" />
									Ongoing maintenance
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gray-900" />
									Ongoing edits after delivery
								</li>
							</ul>
						</div>

						<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
							<ul className="space-y-3 text-sm text-gray-700">
								<li className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gray-900" />
									Ads or marketing management
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gray-900" />
									SEO campaigns
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gray-900" />
									Logo design or photography
								</li>
							</ul>
						</div>
					</div>

					<p className="mt-6 text-sm text-gray-600">
						Hosting and maintenance can be added after the build if needed.
					</p>
				</div>
			</section>

			{/* PROCESS */}
			<section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20" ref={processRef}>
				<div id="process" />
				<SectionHeader
					eyebrow="Selection"
					title="How selection works"
					subtitle="A short process that keeps it fair and keeps timelines realistic."
				/>

				<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
					<StepCard
						step="1"
						title="Apply"
						body="Submit the short application so I can understand your business and goals."
					/>
					<StepCard
						step="2"
						title="Review"
						body="Applications are reviewed for fit, readiness, and clarity."
					/>
					<StepCard
						step="3"
						title="Kickoff call"
						body="Selected businesses complete a short Zoom call so I can build the right thing."
					/>
					<StepCard
						step="4"
						title="Build and handoff"
						body="I build the site, you review, we finalize, and you receive the files."
					/>
				</div>

				<div className="mt-10 flex justify-center">
					<Link to="/free-website-giveaway/apply" aria-label="Start the application">
						<button className="rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
							Start application
						</button>
					</Link>
				</div>
			</section>

			{/* FIT */}
			<section className="bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20" id="fit">
					<SectionHeader
						eyebrow="Fit"
						title="Who this is for"
						subtitle="This giveaway is designed for established businesses that want a simple, clean site."
					/>

					<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 className="text-base font-bold text-gray-900">Good fit</h3>
							<ul className="mt-4 space-y-2 text-sm text-gray-700">
								<li className="flex items-center gap-2">
									<CheckIcon className="h-5 w-5 text-emerald-500" />
									Established business
								</li>
								<li className="flex items-center gap-2">
									<CheckIcon className="h-5 w-5 text-emerald-500" />
									Clear services and pricing
								</li>
								<li className="flex items-center gap-2">
									<CheckIcon className="h-5 w-5 text-emerald-500" />
									Ready with logo and photos
								</li>
								<li className="flex items-center gap-2">
									<CheckIcon className="h-5 w-5 text-emerald-500" />
									Wants a clean 3 page site
								</li>
							</ul>
						</div>

						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 className="text-base font-bold text-gray-900">Not a fit</h3>
							<ul className="mt-4 space-y-2 text-sm text-gray-700">
								<li className="flex items-center gap-2">
									<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-700">
										×
									</span>
									Ecommerce or complex features
								</li>
								<li className="flex items-center gap-2">
									<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-700">
										×
									</span>
									Needs ongoing free updates
								</li>
								<li className="flex items-center gap-2">
									<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-700">
										×
									</span>
									Not ready to provide assets
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-10 flex justify-center">
						<Link to="/free-website-giveaway/apply" aria-label="Start the application">
							<button className="rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
								Start application
							</button>
						</Link>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20" id="faq">
				<SectionHeader
					eyebrow="FAQ"
					title="Common questions"
					subtitle="Clear answers up front so there is no confusion later."
				/>

				<div className="mt-10 grid grid-cols-1 gap-4">
					<FAQItem
						q="Is this really free?"
						a="Yes. The build fee is waived for three selected businesses. This is a build only offer. Hosting and maintenance are separate."
					/>
					<FAQItem
						q="What is the catch?"
						a="There is no catch. I am doing this to build local case studies and long term relationships. Applications are reviewed for fit and readiness."
					/>
					<FAQItem
						q="How long does it take?"
						a="Up to 30 days once assets are received. Fast responses during the build help keep the timeline on track."
					/>
					<FAQItem
						q="Do I own the website files?"
						a="Yes. You own the website files at delivery."
					/>
					<FAQItem
						q="Can you host it after?"
						a="Yes. Hosting and maintenance can be added after the build if you want a hands off setup."
					/>
				</div>

				<div className="mt-10 flex justify-center">
					<Link to="/free-website-giveaway/apply" aria-label="Start the application">
						<button className="rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
							Start application
						</button>
					</Link>
				</div>
			</section>
		</>
	);
}