import React from 'react';
import { Link } from 'react-router-dom';

export default function WebDesignPage() {
	return (
		<div className="px-6 lg:px-8">
			<section id="overview" className="py-10">
				<h1 className="text-3xl font-bold">Web Design & Development</h1>
				<p className="mt-2 max-w-3xl text-gray-600">
					Conversion‑first, fast, and scalable websites that grow with
					your business.
				</p>
			</section>

			<section id="process" className="py-10">
				<h2 className="text-2xl font-semibold">Our process</h2>
				<ol className="mt-4 space-y-3 text-gray-700">
					<li>
						<strong>1. Discovery:</strong> goals, audience, success
						metrics
					</li>
					<li>
						<strong>2. UX & copy:</strong> conversion‑focused flows
						and messaging
					</li>
					<li>
						<strong>3. Design:</strong> clean, premium UI
					</li>
					<li>
						<strong>4. Build:</strong> performance, accessibility,
						SEO best practices
					</li>
					<li>
						<strong>5. Launch & measure:</strong> analytics +
						iteration
					</li>
				</ol>
			</section>

			<section id="pricing" className="py-10">
				<h2 className="text-2xl font-semibold">Pricing</h2>
				<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border bg-white p-5 shadow-sm">
						<h3 className="font-semibold">Starter</h3>
						<p className="mt-1 text-sm text-gray-600">
							1–3 pages, fast launch
						</p>
						<p className="mt-4 text-2xl font-bold">$</p>
					</div>
					<div className="rounded-xl border bg-white p-5 shadow-sm">
						<h3 className="font-semibold">Growth</h3>
						<p className="mt-1 text-sm text-gray-600">
							5–10 pages, CMS, blog
						</p>
						<p className="mt-4 text-2xl font-bold">$$</p>
					</div>
					<div className="rounded-xl border bg-white p-5 shadow-sm">
						<h3 className="font-semibold">Custom</h3>
						<p className="mt-1 text-sm text-gray-600">
							Scope‑driven build
						</p>
						<p className="mt-4 text-2xl font-bold">$$$</p>
					</div>
				</div>
			</section>

			<section id="faq" className="py-10">
				<h2 className="text-2xl font-semibold">FAQs</h2>
				<details className="mt-3 rounded-lg border bg-white p-4">
					<summary className="cursor-pointer font-medium">
						How long does a site take?
					</summary>
					<p className="mt-2 text-gray-700">
						Most MVP builds ship in 2–4 weeks depending on scope.
					</p>
				</details>
				<details className="mt-3 rounded-lg border bg-white p-4">
					<summary className="cursor-pointer font-medium">
						Do you handle copy & SEO?
					</summary>
					<p className="mt-2 text-gray-700">
						Yes—conversion copy + technical SEO best practices.
					</p>
				</details>
			</section>

			<div className="my-10 flex flex-col gap-3 sm:flex-row">
				<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
					<button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-black/90">
						Book a quick call
					</button>
				</Link>
				<Link
					to="/case-studies?svc=Web%20Design%20%26%20Dev"
					className="text-sm font-semibold text-gray-700 underline-offset-4 hover:underline"
				>
					See recent web design work →
				</Link>
			</div>
		</div>
	);
}
