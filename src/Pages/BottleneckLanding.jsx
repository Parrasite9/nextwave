import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

export default function BottleneckLanding() {
	// const navigate = useNavigate();

	// simple UTM/source builder
	const quizHref = useMemo(() => {
		const p = new URLSearchParams({
			source: 'bottleneck_quiz',
			utm_source: 'website',
			utm_medium: 'landing_page',
			utm_campaign: 'bottleneck_quiz',
		});
		// Update this path to wherever your quiz starts:
		// e.g. "/quiz/bottleneck" or "/estimate"
		return `/bottleneck/quiz?${p.toString()}`;
	}, []);

	const handleStart = (e) => {
		// optional analytics
		try {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: 'bottleneck_quiz_cta_click',
				source: 'landing',
			});
			if (window._learnq) {
				window._learnq.push([
					'track',
					'Bottleneck Quiz CTA',
					{ source: 'landing' },
				]);
			}
		} catch {}

		// If you prefer programmatic nav instead of Link:
		// navigate(quizHref);
	};

	const bullets = [
		{
			title: 'Pinpoint your #1 bottleneck',
			text: 'Know exactly what’s holding you back — time, growth strategy, or systems.',
		},
		{
			title: 'Get tailored recommendations',
			text: 'Actionable guidance you can put to work immediately.',
		},
		{
			title: 'Clarity in 3 minutes',
			text: 'Short, focused questions. No fluff. Real answers.',
		},
	];

	return (
		<>
			<Helmet>
				<title>Business Bottleneck Quiz | NextWave Web Studio</title>
				<meta
					name="description"
					content="Find out what's really holding your business back—time, growth, or systems—in a 3-minute quiz. Get tailored recommendations you can act on."
				/>
			</Helmet>

			<main className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9fb] to-white">
				{/* soft background accents */}
				<div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200 to-cyan-100 opacity-50 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-200 to-sky-100 opacity-50 blur-3xl" />

				<section className="relative mx-auto max-w-6xl px-5 pt-14 sm:px-6 md:pt-20">
					{/* HERO */}
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
							<span className="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
								What’s Really Holding Your Business Back?
							</span>
						</h1>
						<p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
							Most owners think they need more leads — but the
							real bottleneck could be{' '}
							<span className="font-semibold">
								time, growth strategy, or systems.
							</span>{' '}
							Find out in 3 minutes with our free quiz.
						</p>

						<div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-3">
							<Link
								to={quizHref}
								onClick={handleStart}
								className="rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700"
							>
								Take the Bottleneck Quiz Now →
							</Link>
							<a
								href="#how-it-works"
								className="text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
							>
								How it works
							</a>
						</div>

						{/* trust strip (swap logos as needed) */}
						<div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur">
							<p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
								Built on industry leaders
							</p>
							<div className="mt-3 flex flex-wrap items-center justify-center gap-6 opacity-90">
								<img
									src="/images/hero/google.png"
									alt="Google"
									className="h-10 w-auto md:h-16 "
								/>
								<img
									src="/images/hero/Klaviyo.png"
									alt="Klaviyo"
									className="h-10 w-auto md:h-16"
								/>
								<img
									src="/images/hero/aws.png"
									alt="AWS"
									className="h-10 w-auto md:h-16"
								/>
								<img
									src="/images/hero/microsoft.png"
									alt="Microsoft"
									className="h-10 w-auto md:h-16"
								/>
								<img
									src="/images/hero/meta.png"
									alt="Meta"
									className="h-10 w-auto md:h-16"
								/>
							</div>
						</div>
					</div>

					{/* BENEFITS */}
					<div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:mt-14 md:grid-cols-3">
						{bullets.map((b, i) => (
							<div
								key={i}
								className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur"
							>
								<div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
									✓
								</div>
								<h3 className="mt-3 text-base font-semibold text-gray-900">
									{b.title}
								</h3>
								<p className="mt-1 text-sm text-gray-700">
									{b.text}
								</p>
							</div>
						))}
					</div>

					{/* HOW IT WORKS */}
					<section
						id="how-it-works"
						className="mx-auto mt-16 max-w-5xl rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur md:p-8"
					>
						<h2 className="text-2xl font-extrabold">
							How it works
						</h2>
						<div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
							<Step num="1" title="Answer a few questions">
								Short, focused prompts about time, growth, and
								systems.
							</Step>
							<Step num="2" title="See your bottleneck">
								We classify your #1 constraint: <em>Time</em>,{' '}
								<em>Growth</em>, or <em>Systems</em>.
							</Step>
							<Step num="3" title="Get next steps">
								Clear, practical recommendations you can act on
								today.
							</Step>
						</div>
						<div className="mt-6">
							<Link
								to={quizHref}
								onClick={handleStart}
								className="inline-flex items-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90"
							>
								Start the Quiz →
							</Link>
							<p className="mt-2 text-[11px] leading-relaxed text-gray-500">
								We’ll email your result summary. Unsubscribe
								anytime.
							</p>
						</div>
					</section>

					{/* SOCIAL PROOF */}
					<div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-200 bg-white/70 p-5 text-sm text-gray-700 shadow-sm backdrop-blur">
						“We came in for a website, but left with a system that
						actually books clients. Clear process, fast delivery,
						and it converts.”
						<span className="text-gray-500"> — Client, 2024</span>
					</div>

					{/* FAQ */}
					<section className="mx-auto mt-14 max-w-5xl">
						<h2 className="text-2xl font-extrabold">FAQ</h2>
						<div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
							<Faq
								q="How long does the quiz take?"
								a="About 3 minutes — quick and focused."
							/>
							<Faq
								q="Will I get spammed?"
								a="No. We’ll send your result and helpful resources. Unsubscribe any time."
							/>
							<Faq
								q="Is this only about AI?"
								a="No. It’s about outcomes — time saved, growth, and stable systems. Tools support the strategy."
							/>
							<Faq
								q="What happens after the quiz?"
								a="You’ll get your bottleneck type and a short action plan. If you want help implementing, we can talk."
							/>
						</div>
					</section>

					{/* FINAL CTA */}
					<section className="mx-auto my-16 max-w-4xl rounded-3xl border border-gray-200 bg-gradient-to-r from-sky-50 to-teal-50 p-8 text-center shadow-sm">
						<h3 className="text-xl font-extrabold md:text-2xl">
							Get clarity on your #1 bottleneck — in minutes.
						</h3>
						<p className="mx-auto mt-2 max-w-2xl text-gray-700">
							The right next step depends on the right diagnosis.
							Start with the quiz.
						</p>
						<div className="mt-6">
							<Link
								to={quizHref}
								onClick={handleStart}
								className="rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700"
							>
								Take the Bottleneck Quiz →
							</Link>
						</div>
					</section>
				</section>
			</main>
		</>
	);
}

function Step({ num, title, children }) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
			<div className="flex items-center gap-3">
				<div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
					{num}
				</div>
				<h3 className="text-base font-semibold">{title}</h3>
			</div>
			<p className="mt-2 text-sm text-gray-700">{children}</p>
		</div>
	);
}

function Faq({ q, a }) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
			<h4 className="text-sm font-semibold text-gray-900">{q}</h4>
			<p className="mt-1 text-sm text-gray-700">{a}</p>
		</div>
	);
}
