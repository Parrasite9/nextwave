// import React from 'react';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import { Link } from 'react-router-dom';

// const Services2 = () => {
// 	return (
// 		<div className="services2__container bg-lemon-chiffon">
// 			<div className="grid grid-cols-1 md:grid-cols-2 px-8">
// 				{/* Text Container */}
// 				<div className="order-1 flex flex-col justify-center md:order-2 py-4 md:px-8 md:py-8">
// 					<h3 className="mt-10 text-bright-teal font-semibold xl:text-xl">
// 						Web Design & Development
// 					</h3>
// 					<h2 className="font-bold text-darkGreen text-2xl mb-8 xl:text-3xl">
// 						Crafting Digital Experiences That Connect and Convert
// 					</h2>
// 					<p className="mb-10">
// 						At NextWave, we believe in building websites that go
// 						beyond aesthetics. Our goal is to create digital spaces
// 						that not only look stunning but are strategically
// 						developed to drive results. From the initial design to
// 						the final line of code, we work with you to develop a
// 						site that supports your business goals and elevates user
// 						experience.
// 					</p>

// 					{/* Icons and Text Grid */}
// 					<div className="grid grid-cols-5 grid-rows-2 gap-0 xl:flex">
// 						{/* Icon 1 */}
// 						<div className="row-start-1 col-start-1 flex items-center justify-center">
// 							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
// 								<GroupAddIcon
// 									className="text-white text-2xl"
// 									style={{ width: '30px', height: '30px' }}
// 								/>
// 							</div>
// 						</div>

// 						{/* Text 1 */}
// 						<div className="row-start-1 col-start-2 col-end-6 flex items-center">
// 							<div className="services2__icon__text p-5">
// 								<h2 className="font-semibold mb-2 text-bright-teal">
// 									User-Centric Design
// 								</h2>
// 								<p>
// 									Our designs prioritize user experience,
// 									creating intuitive, seamless interactions
// 									that keep users engaged and returning.
// 								</p>
// 							</div>
// 						</div>

// 						{/* Icon 2 */}
// 						<div className="row-start-2 col-start-1 flex items-center justify-center">
// 							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
// 								<ManageAccountsIcon
// 									className="text-white"
// 									style={{ width: '35px', height: '35px' }}
// 								/>
// 							</div>
// 						</div>

// 						{/* Text 2 */}
// 						<div className="row-start-2 col-start-2 col-end-6 flex items-center">
// 							<div className="services2__icon__text p-5">
// 								<h2 className="font-semibold mb-2 text-bright-teal">
// 									Ongoing Support & Growth
// 								</h2>
// 								<p>
// 									Our team provides continual support,
// 									ensuring your website adapts as your
// 									business grows and meets the needs of your
// 									expanding audience.
// 								</p>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="services2__button justify-center items-center mb-5">
// 						<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
// 							<button
// 								id="zoom-service-button"
// 								className="btn-primary text-white mt-5 py-2 rounded-md flex justify-center w-full
//                 md:w-4/5 md:py-3 lg:justify-around lg:px-4 lg:w-3/5 xl:w-2/5 xl:px-4 2xl:w-1/2 2xl:px-12"
// 							>
// 								<span className="leading-none">
// 									No Pressure Zoom Call
// 								</span>
// 								<ArrowForwardIosIcon fontSize="small" />
// 							</button>
// 						</Link>
// 					</div>
// 				</div>

// 				{/* Image Container */}
// 				<div className="order-2 flex flex-col justify-center items-center md:order-1">
// 					<div className="grid grid-cols-1 gap-0 py-12 md:px-0 md:py-0 md:grid-cols-4 md:grid-rows-7 md:gap-2 lg:grid-cols-9 lg:grid-rows-6 lg:gap-2">
// 						{/* Image 1 */}
// 						<div className="md:row-start-5 md:row-end-8 md:col-start-1 md:col-end-5 lg:col-start-3 lg:col-end-8 lg:row-start-4 lg:row-end-7">
// 							<img
// 								loading="lazy"
// 								className="w-full object-cover my-2 md:my-0"
// 								src="/images/services/design.svg"
// 								alt="Design"
// 							/>
// 						</div>

// 						{/* Image 2 */}
// 						<div className="hidden md:block md:flex md:items-center md:justify-center md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-4">
// 							<img
// 								loading="lazy"
// 								className="w-full object-cover mb-2 md:mb-0"
// 								src="/images/services/landingPage.svg"
// 								alt="LandingPage"
// 							/>
// 						</div>

// 						{/* Image 3 */}
// 						<div className="hidden md:block md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-5 lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4 lg:flex lg:items-center lg:justify-center">
// 							<img
// 								loading="lazy"
// 								className="w-full object-cover mb-2 md:mb-0"
// 								src="/images/services/mobileDev.svg"
// 								alt="MobileDev"
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Services2;

// src/Components/Home/Services2.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Bullet = ({ k, title, body, to }) => (
// 	<Link
// 		to={to}
// 		className="group block rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300 p-5 md:p-6"
// 	>
// 		<div className="flex items-start gap-4">
// 			<div className="shrink-0">
// 				<div className="h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-300 text-yale-blue font-extrabold text-lg md:text-xl shadow-md group-hover:scale-105 group-hover:shadow-lg transition">
// 					{k}
// 				</div>
// 			</div>
// 			<div>
// 				<h4 className="text-white/95 font-semibold text-lg md:text-xl leading-snug">
// 					{title}
// 				</h4>
// 				<p className="mt-1 text-sm md:text-[15px] text-white/70">
// 					{body}
// 				</p>
// 				<span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-sky-300 group-hover:text-white transition">
// 					Learn more →
// 				</span>
// 			</div>
// 		</div>
// 	</Link>
// );

// export default function Services2() {
// 	return (
// 		<section className="relative overflow-hidden">
// 			{/* Section background (dark, premium) */}
// 			<div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
// 				<div className="relative rounded-3xl bg-gradient-to-br from-yale-blue to-[#0A2D4F] text-white shadow-xl ring-1 ring-black/10 overflow-hidden">
// 					{/* Left decorative column (keeps the “visual-left” rhythm) */}
// 					<div className="absolute inset-y-0 left-0 w-[28%] hidden lg:block">
// 						{/* glow blobs */}
// 						<div className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-sky-400/30 blur-2xl animate-blob" />
// 						<div className="pointer-events-none absolute bottom-8 left-6 h-48 w-48 rounded-full bg-cyan-300/20 blur-2xl animate-blob-2" />
// 						{/* vertical accent rail */}
// 						<div className="absolute inset-y-0 right-0 w-px bg-white/10" />
// 						{/* subtle grid */}
// 						<div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:28px_28px]" />
// 					</div>

// 					{/* Content grid */}
// 					<div className="relative grid lg:grid-cols-12">
// 						{/* Left spacer (visual) on desktop; on mobile it becomes a top banner */}
// 						<div className="lg:col-span-4">
// 							<div className="px-6 pt-10 pb-2 lg:py-14">
// 								<div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
// 									Web Design & Development
// 								</div>
// 								<h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold leading-tight">
// 									Crafting experiences that
// 									<span className="text-sky-300">
// 										{' '}
// 										connect & convert
// 									</span>
// 								</h2>
// 								<p className="mt-3 text-white/70 max-w-sm">
// 									Premium design, technical precision, and
// 									ruthless focus on outcomes. Built fast,
// 									built right, built to grow.
// 								</p>
// 							</div>
// 						</div>

// 						{/* Right column: bold “bullets” that pop + link to pages */}
// 						<div className="lg:col-span-8">
// 							<div className="px-6 pb-10 lg:py-14 lg:pl-10">
// 								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
// 									<Bullet
// 										k="01"
// 										title="High‑conversion websites"
// 										body="Clear messaging, friction‑less flows, and layouts engineered for action."
// 										to="/services/web-design-development"
// 									/>
// 									<Bullet
// 										k="02"
// 										title="Dashboards & data"
// 										body="Surface the numbers that matter. Real‑time clarity, better decisions."
// 										to="/services/dashboards"
// 									/>
// 									<Bullet
// 										k="03"
// 										title="AI automation"
// 										body="Cut busywork with smart workflows. Faster ops, fewer errors."
// 										to="/services/ai-automation"
// 									/>
// 									<Bullet
// 										k="04"
// 										title="Local SEO & growth"
// 										body="Be found where it counts. Search, maps, and reviews working together."
// 										to="/services/local-seo"
// 									/>
// 								</div>

// 								{/* CTA row */}
// 								<div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
// 									<Link
// 										to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call"
// 										className="inline-flex items-center justify-center rounded-xl bg-sandy-brown px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:brightness-110 active:brightness-95 transition"
// 									>
// 										No‑pressure Zoom Call
// 									</Link>

// 									<Link
// 										to="/case-studies"
// 										className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/0 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition"
// 									>
// 										See wins in action
// 										<span className="ml-1">→</span>
// 									</Link>

// 									<p className="text-[12px] sm:ml-auto text-white/60">
// 										Owner‑led. Clear scope. On‑time
// 										delivery.
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* bottom sheen */}
// 					<div className="pointer-events-none absolute -bottom-10 right-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

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
						title="Scale & edit easily"
						desc="Flexible sections and CMS options so you’re never stuck waiting."
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
						to="/case-studies?svc=Web%20Design%20%26%20Dev"
						className="text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
					>
						See recent examples →
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
