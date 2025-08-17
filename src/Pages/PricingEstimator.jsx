import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Zoom link used in the final CTA
const ZOOM_LINK =
	'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call';

/**
 * Steps:
 * 0) Business basics
 * 1) Primary goal / ROI focus
 * 2) Current website & traffic
 * 3) What you need (services/priorities)
 * 4) Budget & timeline
 * 5) Email wall (unlock estimate)
 * 6) Result / estimate
 *
 * Progress bar shows 6 “active” steps (0..5). Step 6 is the result screen.
 */

export default function PricingEstimator() {
	const [step, setStep] = useState(0);

	// form state
	const [form, setForm] = useState({
		bizName: '',
		industry: '',
		location: '',
		goal: 'more-leads', // more-leads | online-sales | save-time | improve-image
		roiPreference: 'money', // money | time | both
		hasSite: 'yes', // yes | no
		monthlyVisitors: '',
		priorities: [], // ['web', 'local-seo', 'seo', 'automation', 'dashboards', 'maintenance']
		budget: '',
		timeline: 'this-month', // this-month | 1-3-months | flexible
		email: '',
		name: '',
	});

	const stepsCount = 6; // 0..5 are the questionnaire; 6 is "result"
	const formCompleted = step === 6;

	const progress = useMemo(() => {
		const capped = Math.min(step, stepsCount - 1);
		return ((capped + 1) / stepsCount) * 100;
	}, [step, stepsCount]);

	const togglePriority = (key) =>
		setForm((f) => {
			const exists = f.priorities.includes(key);
			return {
				...f,
				priorities: exists
					? f.priorities.filter((x) => x !== key)
					: [...f.priorities, key],
			};
		});

	const next = () => setStep((s) => Math.min(s + 1, 6));
	const back = () => setStep((s) => Math.max(s - 1, 0));

	// lightweight “estimator” heuristic (purely indicative copy, not a quote)
	const estimate = useMemo(() => {
		// base ranges
		let low = 1500;
		let high = 4500;

		// priorities
		const p = new Set(form.priorities);
		if (p.has('web')) {
			low += 1500;
			high += 3000;
		}
		if (p.has('local-seo')) {
			low += 600;
			high += 1800;
		}
		if (p.has('seo')) {
			low += 900;
			high += 2400;
		}
		if (p.has('automation')) {
			low += 1200;
			high += 3500;
		}
		if (p.has('dashboards')) {
			low += 900;
			high += 2500;
		}
		if (p.has('maintenance')) {
			low += 300;
			high += 900;
		}

		// urgency bump
		if (form.timeline === 'this-month') {
			low += 300;
			high += 600;
		}

		// small nudge if “save time / both”
		if (form.roiPreference !== 'money') {
			low += 100;
			high += 300;
		}

		// Show a monthly alt if it looks like a bundle
		const showMonthly =
			p.has('maintenance') ||
			p.has('local-seo') ||
			p.has('seo') ||
			p.has('automation');
		const monthly = Math.round((low * 0.08 + high * 0.04) / 2 / 10) * 10; // soft heuristic

		return { low, high, showMonthly, monthly };
	}, [form.priorities, form.timeline, form.roiPreference]);

	// basic guards for required fields per step
	const canNext = useMemo(() => {
		switch (step) {
			case 0:
				return !!form.bizName && !!form.industry && !!form.location;
			case 1:
				return !!form.goal && !!form.roiPreference;
			case 2:
				return (
					!!form.hasSite &&
					(form.hasSite === 'no' || form.monthlyVisitors !== '')
				);
			case 3:
				return form.priorities.length > 0;
			case 4:
				return !!form.budget && !!form.timeline;
			case 5:
				// simple email check
				return /\S+@\S+\.\S+/.test(form.email) && !!form.name;
			default:
				return true;
		}
	}, [step, form]);

	// ---------- NEW: Klaviyo wiring ----------
	const [sending, setSending] = useState(false);

	function klaviyoIdentifyAndTrack(phase, extra = {}) {
		if (!window._learnq) return;

		// identify
		window._learnq.push([
			'identify',
			{
				$email: form.email,
				$first_name: form.name?.split(' ')[0] || undefined,
				$last_name:
					form.name?.split(' ').slice(1).join(' ') || undefined,
				$consent: ['email'], // mark as opted in
				signup_source: 'pricing_estimator', // easy segmentation
				'Business Name': form.bizName || undefined,
				Industry: form.industry || undefined,
				Location: form.location || undefined,
				Goal: form.goal || undefined,
				ROI_Preference: form.roiPreference || undefined,
				Has_Site: form.hasSite || undefined,
				Monthly_Visitors: form.monthlyVisitors || undefined,
				Priorities: form.priorities.join(', ') || undefined,
				Budget_Band: form.budget || undefined,
				Timeline: form.timeline || undefined,
			},
		]);

		// track
		window._learnq.push([
			'track',
			'Estimator',
			{
				phase, // 'email_captured' | 'completed'
				...extra,
			},
		]);
	}

	async function subscribeToKlaviyoEstimate({ estimate }) {
		// Reuse the same API + UTM pattern as your working signup form
		const utm = new URLSearchParams({
			utm_source: 'klaviyo',
			utm_medium: 'form',
			utm_campaign: 'pricing_estimator',
			utm_content: 'estimate_submit',
		});

		const payload = {
			// required
			email: form.email,
			source: 'pricing_estimator',
			consent: ['email'],
			// useful attributes (names are flexible — your Lambda can map them to Klaviyo profile props)
			name: form.name,
			businessName: form.bizName,
			industry: form.industry,
			location: form.location,
			goal: form.goal,
			roiPreference: form.roiPreference,
			hasSite: form.hasSite,
			monthlyVisitors: form.monthlyVisitors,
			priorities: form.priorities,
			budget: form.budget,
			timeline: form.timeline,

			// estimator outputs
			estimateLow: estimate.low,
			estimateHigh: estimate.high,
			estimateMonthly: estimate.showMonthly ? estimate.monthly : null,

			// optional: keep this consistent with your other flow
			initial_zoom_booking_status: 'not_booked_yet',
		};

		const res = await fetch(
			`https://g59t3yegkl.execute-api.us-east-1.amazonaws.com/production/subscribe?${utm.toString()}`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			},
		);

		if (!res.ok) {
			console.warn('Klaviyo subscribe failed', await res.text());
		}
	}

	// -----------------------------------------

	return (
		<>
			<Helmet>
				<title>Get a Quick Estimate | NextWave Web Studio</title>
				<meta
					name="description"
					content="Answer a few questions to get a tailored ballpark estimate and a clear next step. No spam—just clarity."
				/>
			</Helmet>

			<section className="relative mx-auto max-w-3xl px-6 py-10 md:py-14">
				{/* Progress bar */}
				{step < 6 && (
					<div className="sticky top-[64px] z-30 mb-6 bg-white/70 backdrop-blur-md">
						<div className="flex items-center justify-between text-xs text-gray-600 py-2">
							<span>
								Step {step + 1} of {stepsCount}
							</span>
							<span>{Math.round(progress)}%</span>
						</div>
						<div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
							<div
								className="h-full bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 transition-all duration-300"
								style={{ width: `${progress}%` }}
								aria-hidden="true"
							/>
						</div>
					</div>
				)}

				{/* Header */}
				{!formCompleted && (
					<div className="mb-6 text-center">
						<h1 className="text-3xl font-extrabold md:text-4xl">
							Get a quick estimate
						</h1>
						<p className="mx-auto mt-2 max-w-2xl text-gray-600">
							It takes ~2 minutes. You’ll see a ballpark range and
							a simple plan—no email until the last step.
						</p>
					</div>
				)}

				{/* Card */}
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
					{step === 0 && (
						<StepWrap title="Tell us about your business">
							<Field label="Business name">
								<input
									className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-400"
									value={form.bizName}
									onChange={(e) =>
										setForm({
											...form,
											bizName: e.target.value,
										})
									}
								/>
							</Field>
							<Field label="Industry">
								<input
									className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-400"
									value={form.industry}
									onChange={(e) =>
										setForm({
											...form,
											industry: e.target.value,
										})
									}
								/>
							</Field>
							<Field label="City / Area">
								<input
									className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-400"
									value={form.location}
									onChange={(e) =>
										setForm({
											...form,
											location: e.target.value,
										})
									}
								/>
							</Field>
							<Nav backHidden onNext={next} canNext={canNext} />
						</StepWrap>
					)}

					{step === 1 && (
						<StepWrap title="What’s the main outcome you want?">
							<Choices
								name="goal"
								value={form.goal}
								onChange={(goal) => setForm({ ...form, goal })}
								options={[
									{
										value: 'more-leads',
										label: 'More calls & form leads',
									},
									{
										value: 'online-sales',
										label: 'Sell products/services online',
									},
									{
										value: 'save-time',
										label: 'Save time with automation',
									},
									{
										value: 'improve-image',
										label: 'Improve brand & credibility',
									},
								]}
							/>
							<Field label="Which ROI matters most?">
								<Choices
									name="roiPreference"
									value={form.roiPreference}
									onChange={(roiPreference) =>
										setForm({ ...form, roiPreference })
									}
									options={[
										{
											value: 'money',
											label: 'Revenue first',
										},
										{ value: 'time', label: 'Time saved' },
										{ value: 'both', label: 'Both' },
									]}
								/>
							</Field>
							<Nav
								onBack={back}
								onNext={next}
								canNext={canNext}
							/>
						</StepWrap>
					)}

					{step === 2 && (
						<StepWrap title="Current website & traffic">
							<Field label="Do you have a website now?">
								<Choices
									name="hasSite"
									value={form.hasSite}
									onChange={(hasSite) =>
										setForm({
											...form,
											hasSite,
											monthlyVisitors: '',
										})
									}
									options={[
										{ value: 'yes', label: 'Yes' },
										{ value: 'no', label: 'No' },
									]}
								/>
							</Field>
							{form.hasSite === 'yes' && (
								<Field label="Approx. monthly visitors (optional)">
									<input
										type="number"
										min="0"
										className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-400"
										value={form.monthlyVisitors}
										onChange={(e) =>
											setForm({
												...form,
												monthlyVisitors: e.target.value,
											})
										}
										placeholder="e.g., 500"
									/>
								</Field>
							)}
							<Nav
								onBack={back}
								onNext={next}
								canNext={canNext}
							/>
						</StepWrap>
					)}

					{step === 3 && (
						<StepWrap title="What do you need help with? (pick all that apply)">
							<MultiPill
								selected={form.priorities}
								onToggle={togglePriority}
								options={[
									{
										value: 'web',
										label: 'New website / redesign',
									},
									{
										value: 'local-seo',
										label: 'Google Business Profile / Local SEO',
									},
									{
										value: 'seo',
										label: 'SEO (organic rankings)',
									},
									{
										value: 'automation',
										label: 'AI & Automation',
									},
									{
										value: 'dashboards',
										label: 'Dashboards / reporting',
									},
									{
										value: 'maintenance',
										label: 'Maintenance & updates',
									},
								]}
							/>
							<Nav
								onBack={back}
								onNext={next}
								canNext={canNext}
							/>
						</StepWrap>
					)}

					{step === 4 && (
						<StepWrap title="Budget & timeline">
							<Field label="Rough monthly or project budget">
								<select
									className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-400"
									value={form.budget}
									onChange={(e) =>
										setForm({
											...form,
											budget: e.target.value,
										})
									}
								>
									<option value="">Select…</option>
									<option value="starter">$1k–$3k</option>
									<option value="growth">$3k–$7k</option>
									<option value="pro">$7k–$15k</option>
									<option value="custom">
										Custom / not sure
									</option>
								</select>
							</Field>
							<Field label="Timeline">
								<Choices
									name="timeline"
									value={form.timeline}
									onChange={(timeline) =>
										setForm({ ...form, timeline })
									}
									options={[
										{
											value: 'this-month',
											label: 'This month',
										},
										{
											value: '1-3-months',
											label: '1–3 months',
										},
										{
											value: 'flexible',
											label: 'Flexible',
										},
									]}
								/>
							</Field>
							<Nav
								onBack={back}
								onNext={next}
								canNext={canNext}
							/>
						</StepWrap>
					)}

					{step === 5 && (
						<StepWrap title="Where should we send your estimate?">
							<p className="mb-4 text-sm text-gray-600">
								We’ll email your tailored ballpark and a simple
								plan. No spam—unsubscribe anytime.
							</p>
							<Field label="Your name">
								<input
									className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-400"
									value={form.name}
									onChange={(e) =>
										setForm({
											...form,
											name: e.target.value,
										})
									}
								/>
							</Field>
							<Field label="Work email">
								<input
									type="email"
									className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-400"
									value={form.email}
									onChange={(e) =>
										setForm({
											...form,
											email: e.target.value,
										})
									}
								/>
							</Field>
							<Nav
								onBack={back}
								onNext={async () => {
									// guard also lives in canNext, but keep here for safety
									if (
										!/\S+@\S+\.\S+/.test(form.email) ||
										!form.name
									)
										return;

									// OPTIONAL: GTM/GA event
									try {
										window.dataLayer =
											window.dataLayer || [];
										window.dataLayer.push({
											event: 'estimator_email_step',
											label: 'email_captured',
										});
									} catch {}

									try {
										setSending(true);
										// Identify + track email capture
										klaviyoIdentifyAndTrack(
											'email_captured',
										);
										// Subscribe to list with full payload + estimate
										await subscribeToKlaviyoEstimate({
											estimate,
										});
									} catch (e) {
										console.warn(
											'Estimator subscribe error',
											e,
										);
									} finally {
										setSending(false);
										setStep(6);
										// Track completion (belt & suspenders)
										setTimeout(
											() =>
												klaviyoIdentifyAndTrack(
													'completed',
													{
														estimate_low:
															estimate.low,
														estimate_high:
															estimate.high,
														estimate_monthly:
															estimate.showMonthly
																? estimate.monthly
																: null,
													},
												),
											0,
										);
									}
								}}
								nextLabel={
									sending ? 'One moment…' : 'View my estimate'
								}
								canNext={canNext && !sending}
							/>
						</StepWrap>
					)}

					{step === 6 && (
						<ResultScreen form={form} estimate={estimate} />
					)}
				</div>
			</section>
		</>
	);
}

/* ----------------- Helpers & small components ----------------- */

function StepWrap({ title, children }) {
	return (
		<div>
			<h2 className="text-xl font-bold md:text-2xl">{title}</h2>
			<div className="mt-4 space-y-4">{children}</div>
		</div>
	);
}

function Field({ label, children }) {
	return (
		<label className="block">
			<span className="mb-1 block text-sm font-medium text-gray-700">
				{label}
			</span>
			{children}
		</label>
	);
}

function Choices({ name, value, onChange, options }) {
	return (
		<div className="flex flex-wrap gap-2">
			{options.map((opt) => {
				const active = value === opt.value;
				return (
					<button
						key={opt.value}
						type="button"
						onClick={() => onChange(opt.value)}
						aria-pressed={active}
						className={[
							'rounded-full px-4 py-2 text-sm transition',
							active
								? 'bg-sky-600 text-white'
								: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
						].join(' ')}
					>
						{opt.label}
					</button>
				);
			})}
		</div>
	);
}

function MultiPill({ selected, onToggle, options }) {
	return (
		<div className="flex flex-wrap gap-2">
			{options.map((opt) => {
				const active = selected.includes(opt.value);
				return (
					<button
						key={opt.value}
						type="button"
						onClick={() => onToggle(opt.value)}
						aria-pressed={active}
						className={[
							'rounded-full px-4 py-2 text-sm transition',
							active
								? 'bg-emerald-600 text-white'
								: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
						].join(' ')}
					>
						{opt.label}
					</button>
				);
			})}
		</div>
	);
}

function Nav({
	onBack,
	onNext,
	backHidden = false,
	nextLabel = 'Next',
	canNext,
}) {
	return (
		<div className="mt-6 flex items-center justify-between">
			<div>
				{!backHidden && (
					<button
						type="button"
						onClick={onBack}
						className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
					>
						Back
					</button>
				)}
			</div>
			<button
				type="button"
				onClick={onNext}
				disabled={!canNext}
				className={[
					'rounded-lg px-5 py-2 text-sm font-semibold transition',
					canNext
						? 'bg-gray-900 text-white hover:bg-black'
						: 'cursor-not-allowed bg-gray-200 text-gray-500',
				].join(' ')}
			>
				{nextLabel}
			</button>
		</div>
	);
}

function ResultScreen({ form, estimate }) {
	// a gentle on-ramp (purely illustrative; not a quote)
	const starterLow = Math.round(estimate.low * 0.45);
	const starterHigh = Math.round(estimate.high * 0.6);

	return (
		<div className="text-center">
			<h2 className="text-2xl font-extrabold md:text-3xl">
				Your ballpark estimate
			</h2>
			<p className="mx-auto mt-2 max-w-xl text-gray-600">
				This range is a starting point. We can phase the work to match
				your budget and comfort.
			</p>

			{/* Price card */}
			<div className="mx-auto mt-6 max-w-md rounded-2xl border border-gray-200 bg-gray-50 p-6">
				<div className="text-3xl font-extrabold">
					${estimate.low.toLocaleString()} – $
					{estimate.high.toLocaleString()}
				</div>
				{estimate.showMonthly && (
					<div className="mt-1 text-sm text-gray-700">
						Or approx.{' '}
						<span className="font-semibold">
							${estimate.monthly}
						</span>
						/mo for ongoing work.
					</div>
				)}

				<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
					<Badge label={labelForGoal(form.goal)} />
					<Badge label={labelForROI(form.roiPreference)} />
					{form.priorities.map((p) => (
						<Badge key={p} label={prettyPriority(p)} />
					))}
				</div>
			</div>

			{/* Reassurance strip: your badges */}
			<ReassuranceStrip />

			<div className="mt-6 text-left text-sm text-gray-700 space-y-2 max-w-md mx-auto">
				<p>
					✅ <strong>100% Satisfaction Guarantee:</strong> If you’re
					not happy with the initial delivery, we’ll keep working
					until you are.
				</p>
				<p>
					✅ <strong>ROI Commitment:</strong> Every project is
					designed to deliver measurable value — whether it’s more
					leads, time saved, or stronger credibility.
				</p>
				<p>
					✅ <strong>Transparent Pricing:</strong> No surprise fees.
					Your estimate is the ballpark, your proposal is the plan.
				</p>
			</div>

			{/* Starter / phased option */}
			<div className="mx-auto mt-6 max-w-lg rounded-xl border border-gray-200 bg-white p-5 text-left">
				<h3 className="text-lg font-bold">
					Prefer a smaller starting step?
				</h3>
				<p className="mt-1 text-gray-700">
					We can launch a focused “Phase 1” and expand over time.
				</p>
				<div className="mt-3 rounded-lg bg-gray-50 p-4">
					<div className="text-sm text-gray-600">
						Typical Phase 1 starting point
					</div>
					<div className="mt-1 text-xl font-extrabold">
						${starterLow.toLocaleString()} – $
						{starterHigh.toLocaleString()}
					</div>
					<ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
						<li>
							Core pages that convert (Home, Services, Contact)
						</li>
						<li>Clear calls-to-action & mobile tuning</li>
						<li>
							Google Business Profile & basic analytics wiring
						</li>
					</ul>
					<p className="mt-2 text-xs text-gray-500">
						This is an example scope to help you visualize a phased
						approach.
					</p>
				</div>
			</div>

			{/* CTAs */}
			<div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
				<a
					href={ZOOM_LINK}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-xl bg-[#5BC0EB] px-6 py-3 text-sm font-semibold text-black shadow hover:brightness-95"
				>
					Book a FREE consultation
				</a>
				<a
					href="mailto:hello@nextwavewebstudio.com"
					className="text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
				>
					Prefer email? Contact us →
				</a>
			</div>

			<p className="mt-4 text-xs text-gray-500">
				Estimates are informational, not a formal quote. We’ll tailor a
				plan to your goals and budget.
			</p>
		</div>
	);
}

function Badge({ label }) {
	return (
		<div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700">
			{label}
		</div>
	);
}

function labelForGoal(goal) {
	switch (goal) {
		case 'more-leads':
			return 'Goal: More leads';
		case 'online-sales':
			return 'Goal: Online sales';
		case 'save-time':
			return 'Goal: Save time';
		case 'improve-image':
			return 'Goal: Brand credibility';
		default:
			return 'Goal';
	}
}

function labelForROI(v) {
	switch (v) {
		case 'money':
			return 'ROI focus: Revenue';
		case 'time':
			return 'ROI focus: Time saved';
		case 'both':
			return 'ROI focus: Both';
		default:
			return 'ROI focus';
	}
}

function prettyPriority(p) {
	switch (p) {
		case 'web':
			return 'Website / redesign';
		case 'local-seo':
			return 'Local SEO (Maps)';
		case 'seo':
			return 'SEO';
		case 'automation':
			return 'AI & Automation';
		case 'dashboards':
			return 'Dashboards';
		case 'maintenance':
			return 'Maintenance';
		default:
			return p;
	}
}

function ReassuranceStrip() {
	return (
		<div
			role="group"
			aria-labelledby="reassurance-title"
			className="mx-auto mt-6 max-w-3xl"
		>
			<h3 id="reassurance-title" className="sr-only">
				Reassurance & trust
			</h3>

			{/* Mobile: 3 across; MD+: 5 across */}
			<div className="grid grid-cols-3 place-items-center gap-4 md:grid-cols-5">
				{/* 1. Money-back */}
				<figure className="flex items-center">
					<img
						src="/images/hero/moneyback.png"
						alt="100% money-back guarantee"
						className="h-15 w-auto md:h-17 lg:h-19 xl:h-20"
						width="280"
						height="80"
						loading="lazy"
						decoding="async"
					/>
					<figcaption className="sr-only">
						We stand behind our work with a 100% money-back
						guarantee.
					</figcaption>
				</figure>

				{/* 2. Trusted by local businesses */}
				<figure className="flex items-center">
					<img
						src="/images/hero/trustedby.png"
						alt="Trusted by Midland & Odessa businesses"
						className="h-15 w-auto md:h-17 lg:h-19 xl:h-20"
						width="280"
						height="80"
						loading="lazy"
						decoding="async"
					/>
					<figcaption className="sr-only">
						Trusted by local businesses in Midland and Odessa.
					</figcaption>
				</figure>

				{/* 3. ROI focus */}
				<figure className="flex items-center">
					<img
						src="/images/hero/roi.png"
						alt="ROI-focused approach"
						className="h-15 w-auto md:h-17 lg:h-19 xl:h-20"
						width="280"
						height="80"
						loading="lazy"
						decoding="async"
					/>
					<figcaption className="sr-only">
						ROI-driven approach to design and growth.
					</figcaption>
				</figure>

				{/* 4. Data privacy — hidden on mobile, shown md+ */}
				<figure className="hidden items-center md:flex">
					<img
						src="/images/pricing_table/data_privacy_dark.png"
						alt="Data privacy respected"
						className="h-15 w-auto md:h-17 lg:h-19 xl:h-20"
						width="280"
						height="80"
						loading="lazy"
						decoding="async"
					/>
					<figcaption className="sr-only">
						Your data and customer information are handled with
						care.
					</figcaption>
				</figure>

				{/* 5. Dedicated support — hidden on mobile, shown md+ */}
				<figure className="hidden items-center md:flex">
					<img
						src="/images/pricing_table/support_dark.png"
						alt="Dedicated support"
						className="h-15 w-auto md:h-17 lg:h-19 xl:h-20"
						width="280"
						height="80"
						loading="lazy"
						decoding="async"
					/>
					<figcaption className="sr-only">
						Dedicated support from kickoff through launch.
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
