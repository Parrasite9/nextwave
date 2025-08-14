// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const FORM_VARIANTS = [
// 	{
// 		id: 1,
// 		headline: 'Unlock Your Free Google Business Report! 📊',
// 		description:
// 			'Discover insights to optimize your Google Business profile and drive more traffic.',
// 		cta: 'Get My Free Report',
// 		image: '/images/form/analytics.webp',
// 	},
// 	{
// 		id: 2,
// 		headline: 'Get a Free Audit of Your Google Business Profile!',
// 		description:
// 			'Sign up to receive a personalized report on how to boost your online presence.',
// 		cta: 'Show Me the Insights',
// 		image: '/images/form/metric.webp',
// 	},
// 	{
// 		id: 3,
// 		headline: 'Unlock Your Free Google Business Report! 📊',
// 		description:
// 			'Sign up to receive personalized insights to grow your business online.',
// 		cta: 'Get My Free Report',
// 		image: null,
// 	},
// 	{
// 		id: 4,
// 		headline: 'Get a Free Audit of Your Google Business Profile!',
// 		description:
// 			'Receive a tailored report to optimize your online visibility.',
// 		cta: 'Get My Free Report',
// 		image: '/images/form/searching.webp',
// 	},
// 	{
// 		id: 5,
// 		headline: 'Unlock Insights to Drive Growth 🚀',
// 		description:
// 			'Get a custom Google report to enhance your online strategy.',
// 		cta: 'Show Me the Insights',
// 		image: '/images/form/progress.webp',
// 	},
// ];

// function Signup({ onFormSubmit }) {
// 	const [step, setStep] = useState(1);
// 	const [variant, setVariant] = useState(null);
// 	const [formData, setFormData] = useState({
// 		email: '',
// 		fname: '',
// 		lname: '',
// 		businessName: '',
// 		website: '',
// 	});
// 	const [errors, setErrors] = useState({});
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		// Randomly select a form variant
// 		const randomVariant =
// 			FORM_VARIANTS[Math.floor(Math.random() * FORM_VARIANTS.length)];
// 		setVariant(randomVariant);

// 		// Check if the user arrived with the #signup hash in the URL
// 		const handleHashScroll = () => {
// 			if (window.location.hash === '#signup') {
// 				const element = document.getElementById('signup');
// 				if (element) {
// 					element.scrollIntoView({
// 						behavior: 'smooth',
// 						block: 'start',
// 					});
// 				}
// 			}
// 		};

// 		// Only run on initial load
// 		handleHashScroll();

// 		// Listen for changes to the URL hash
// 		window.addEventListener('hashchange', handleHashScroll);

// 		// Cleanup event listener on component unmount
// 		return () => {
// 			window.removeEventListener('hashchange', handleHashScroll);
// 		};
// 	}, []);

// 	const validateEmail = (email) => {
// 		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 		return emailRegex.test(email);
// 	};

// 	// Updated website validation to accept domains like "testing.com" or "www.example.org"
// 	const validateWebsite = (website) => {
// 		const websiteRegex =
// 			/^[a-zA-Z0-9-]+\.(com|org|net|gov|edu|info|biz|name|xyz|online|tech|site|store|website|app|io|me|co|nyc|us)$/i;
// 		return websiteRegex.test(website);
// 	};

// 	const validateStep1 = () => {
// 		const newErrors = {};
// 		if (!formData.email || !validateEmail(formData.email)) {
// 			newErrors.email = 'Please enter a valid email address';
// 		}
// 		setErrors(newErrors);
// 		return Object.keys(newErrors).length === 0;
// 	};

// 	const validateStep2 = () => {
// 		const newErrors = {};
// 		if (!formData.fname) newErrors.fname = 'First Name is required';
// 		if (!formData.lname) newErrors.lname = 'Last Name is required';
// 		if (!formData.businessName)
// 			newErrors.businessName = 'Business Name is required';
// 		if (!formData.website || !validateWebsite(formData.website)) {
// 			newErrors.website =
// 				'Please enter a valid website (e.g., example.com)';
// 		}
// 		setErrors(newErrors);
// 		return Object.keys(newErrors).length === 0;
// 	};

// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const handleNextStep = (e) => {
// 		e.preventDefault();
// 		if (validateStep1()) {
// 			// Send the email to Klaviyo
// 			subscribeToKlaviyoList('step1');
// 			setStep(2);
// 		}
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		if (validateStep2()) {
// 			// Identify the user in Klaviyo (if needed for tracking)
// 			window._learnq.push([
// 				'identify',
// 				{
// 					$email: formData.email,
// 					$first_name: formData.fname,
// 					$last_name: formData.lname,
// 					'Business Name': formData.businessName,
// 					Website: formData.website,
// 					initial_zoom_booking_status: 'not_booked_yet',
// 				},
// 			]);

// 			// Track the form submission event (if needed)
// 			window._learnq.push([
// 				'track',
// 				'Form Submitted',
// 				{
// 					'Form Name': 'Signup Form',
// 					'Variant ID': variant?.id || 'Default',
// 				},
// 			]);

// 			// Update the user's profile in Klaviyo
// 			subscribeToKlaviyoList('step2');

// 			console.log('Form Submitted:', formData);
// 			// navigate('/thank-you');
// 			window.location.href = '/thank-you';
// 		}
// 	};

// 	const subscribeToKlaviyoList = async (step) => {
// 		try {
// 			const utmParams = new URLSearchParams({
// 				utm_source: 'klaviyo',
// 				utm_medium: step === 'step2' ? 'form' : 'email',
// 				utm_campaign: 'google_business_report_form',
// 				utm_content: `variant_${variant?.id || 'default'}`,
// 			});

// 			let payload = {
// 				email: formData.email,
// 				initial_zoom_booking_status: 'not_booked_yet',
// 			};

// 			console.log('Step 1 - Payload before step 2:', payload);

// 			if (step === 'step2') {
// 				payload.firstName = formData.fname;
// 				payload.lastName = formData.lname;
// 				payload.businessName = formData.businessName;
// 				payload.website = formData.website;
// 				console.log('Step 2 - Payload with additional data:', payload);
// 			}

// 			const response = await fetch(
// 				`https://g59t3yegkl.execute-api.us-east-1.amazonaws.com/production/subscribe?${utmParams.toString()}`,
// 				{
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 					body: JSON.stringify(payload),
// 				},
// 			);

// 			const data = await response.json();
// 			if (response.ok) {
// 				console.log('Successfully subscribed:', data);
// 			} else {
// 				console.error('Error subscribing:', data.error);
// 			}
// 		} catch (error) {
// 			console.error('Error subscribing:', error);
// 		}
// 	};

// 	return (
// 		<div
// 			id="signup"
// 			className="signup__container bg-lemon-chiffon py-12 px-6 sm:px-10 lg:px-16 flex justify-center items-center"
// 		>
// 			<div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
// 				{/* Step 1 */}
// 				{variant && step === 1 && (
// 					<div
// 						className={`${variant.image ? 'lg:grid lg:grid-cols-2 gap-8' : 'flex flex-col'}`}
// 					>
// 						{variant.image && (
// 							<div className="flex items-center justify-center">
// 								<img
// 									loading="lazy"
// 									src={variant.image}
// 									alt="Form Image"
// 									className="w-full h-auto object-cover rounded-lg"
// 								/>
// 							</div>
// 						)}
// 						<form
// 							onSubmit={handleNextStep}
// 							className={`${variant.image ? '' : 'w-full'} space-y-6`}
// 						>
// 							<h2 className="text-3xl font-bold text-gray-800">
// 								{variant.headline}
// 							</h2>
// 							<p className="text-gray-600">
// 								{variant.description}
// 							</p>
// 							<input
// 								type="email"
// 								name="email"
// 								aria-label="Email"
// 								aria-describedby="email-helper"
// 								value={formData.email}
// 								onChange={handleChange}
// 								placeholder="Your Email Address"
// 								required
// 								className="w-full px-4 py-3 border rounded-lg focus:outline-none"
// 							/>
// 							{errors.email && (
// 								<p className="text-red-500 text-sm">
// 									{errors.email}
// 								</p>
// 							)}
// 							<button
// 								type="submit"
// 								className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
// 							>
// 								{variant.cta}
// 							</button>
// 							<p className="text-sm text-gray-500 mt-4">
// 								By submitting this form, you agree to receive
// 								marketing emails from us. You can unsubscribe at
// 								any time.
// 							</p>
// 						</form>
// 					</div>
// 				)}

// 				{/* Step 2 */}
// 				{step === 2 && (
// 					<form onSubmit={handleSubmit} className="space-y-6">
// 						<h2 className="text-xl font-semibold text-gray-800">
// 							Tell Us About Your Business
// 						</h2>
// 						<div className="grid md:grid-cols-2 gap-6">
// 							<input
// 								type="text"
// 								name="fname"
// 								aria-label="First Name"
// 								aria-describedby="First Name-helper"
// 								value={formData.fname}
// 								onChange={handleChange}
// 								placeholder="First Name"
// 								className="w-full px-4 py-3 border rounded-lg focus:outline-none"
// 							/>
// 							{errors.fname && (
// 								<p className="text-red-500 text-sm">
// 									{errors.fname}
// 								</p>
// 							)}
// 							<input
// 								type="text"
// 								name="lname"
// 								aria-label="Last Name"
// 								aria-describedby="Last Name-helper"
// 								value={formData.lname}
// 								onChange={handleChange}
// 								placeholder="Last Name"
// 								className="w-full px-4 py-3 border rounded-lg focus:outline-none"
// 							/>
// 							{errors.lname && (
// 								<p className="text-red-500 text-sm">
// 									{errors.lname}
// 								</p>
// 							)}
// 						</div>
// 						<input
// 							type="text"
// 							name="businessName"
// 							aria-label="Business Name"
// 							aria-describedby="Business Name-helper"
// 							value={formData.businessName}
// 							onChange={handleChange}
// 							placeholder="Business Name"
// 							className="w-full px-4 py-3 border rounded-lg focus:outline-none"
// 						/>
// 						{errors.businessName && (
// 							<p className="text-red-500 text-sm">
// 								{errors.businessName}
// 							</p>
// 						)}
// 						<input
// 							type="text"
// 							name="website"
// 							aria-label="Website URL"
// 							aria-describedby="Website URL-helper"
// 							value={formData.website}
// 							onChange={handleChange}
// 							placeholder="Business Website (e.g., example.com)"
// 							className="w-full px-4 py-3 border rounded-lg focus:outline-none"
// 						/>
// 						{errors.website && (
// 							<p className="text-red-500 text-sm">
// 								{errors.website}
// 							</p>
// 						)}
// 						<button
// 							type="submit"
// 							className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
// 						>
// 							Submit
// 						</button>
// 					</form>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default Signup;

// src/Components/Home/Klaviyo/Signup.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Premium Signup (light theme)
 * - Mobile-first, “glass” card over a soft gradient.
 * - A/B test (persisted in localStorage) with clean analytics.
 * - Two-step form (email → details) to reduce friction.
 * - Klaviyo tracking + your existing subscribe API endpoint.
 * - GTM events: view, step, submit (with variant id).
 *
 * Notes:
 * - Replace logo paths with your own (or remove the row if you prefer).
 * - If you don’t use GTM, the dataLayer pushes will simply no-op.
 * - If you don’t use Klaviyo on a page, window._learnq calls will no-op.
 */

const EXP_KEY = 'exp_signup_premium_v2';
const VARIANTS = [
	{
		id: 'A',
		headline: 'Transform Your Business Into a Growth Machine',
		subhead:
			'Join forward-thinking brands who turn websites into 24/7 client-generating assets.',
		bullets: [
			'Done‑for‑you strategy — no tech headaches.',
			'Proven designs & automations that convert.',
			'Ongoing insights to keep you ahead.',
		],
		cta: 'Get My Free Growth Plan',
		accentFrom: 'from-sky-600',
		accentTo: 'to-teal-500',
	},
	{
		id: 'B',
		headline: 'Turn Browsers Into Buyers, Automatically',
		subhead:
			'Conversion‑first websites and smart automations that work while you sleep.',
		bullets: [
			'Clear strategy. Clean execution.',
			'Built for speed, SEO, and sales.',
			'Insights that compound over time.',
		],
		cta: 'Claim My Free Growth Plan',
		accentFrom: 'from-sky-600',
		accentTo: 'to-teal-500',
	},
];

function pickVariant() {
	const stored = localStorage.getItem(EXP_KEY);
	if (stored) {
		const match = VARIANTS.find((v) => v.id === stored);
		if (match) return match;
	}
	const v = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
	localStorage.setItem(EXP_KEY, v.id);
	return v;
}

// very forgiving validators (mobile-first UX)
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isDomainOrUrl = (v) => {
	const s = v.trim();
	if (!s) return false;
	// accept example.com OR https://example.com/… OR www.example.com
	const domainLike = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/;
	const urlLike = /^https?:\/\/.+/i;
	return domainLike.test(s) || urlLike.test(s);
};

export default function Signup({ onFormSubmit }) {
	const [variant] = useState(pickVariant);
	const [step, setStep] = useState(1);
	const [sending, setSending] = useState(false);
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({
		email: '',
		fname: '',
		lname: '',
		businessName: '',
		website: '',
		// honeypot:
		company: '',
	});

	const navigate = useNavigate();

	// fire a "view" event once
	useEffect(() => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'signup_view',
			experiment: EXP_KEY,
			variant: variant.id,
		});
	}, [variant.id]);

	// if #signup present, scroll into view on load
	useEffect(() => {
		const el = document.getElementById('signup');
		if (el && window.location.hash === '#signup') {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	const headlineGradientClass = useMemo(
		() =>
			`bg-gradient-to-r ${variant.accentFrom} ${variant.accentTo} bg-clip-text text-transparent`,
		[variant],
	);

	const onChange = (e) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const validateStep1 = () => {
		const next = {};
		if (!isEmail(form.email)) next.email = 'Enter a valid email';
		if (form.company) next.spam = 'Spam detected';
		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const validateStep2 = () => {
		const next = {};
		if (!form.fname) next.fname = 'First name required';
		if (!form.lname) next.lname = 'Last name required';
		if (!form.businessName) next.businessName = 'Business name required';
		if (!isDomainOrUrl(form.website))
			next.website = 'Enter a valid website or domain';
		if (form.company) next.spam = 'Spam detected';
		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const klaviyoIdentifyAndTrack = (phase) => {
		// guard if _learnq isn’t present
		if (!window._learnq) return;
		// identify
		window._learnq.push([
			'identify',
			{
				$email: form.email,
				$first_name: form.fname || undefined,
				$last_name: form.lname || undefined,
				'Business Name': form.businessName || undefined,
				Website: form.website || undefined,
				initial_zoom_booking_status: 'not_booked_yet',
			},
		]);
		// track
		window._learnq.push([
			'track',
			'Signup Step',
			{
				phase, // 'step1' or 'submitted'
				experiment: EXP_KEY,
				variant: variant.id,
			},
		]);
	};

	const subscribeToKlaviyoList = async (phase) => {
		const utm = new URLSearchParams({
			utm_source: 'klaviyo',
			utm_medium: phase === 'submitted' ? 'form' : 'email',
			utm_campaign: 'premium_signup',
			utm_content: `variant_${variant.id}`,
		});

		const payload = {
			email: form.email,
			initial_zoom_booking_status: 'not_booked_yet',
			...(phase === 'submitted'
				? {
						firstName: form.fname,
						lastName: form.lname,
						businessName: form.businessName,
						website: form.website,
					}
				: {}),
		};

		const res = await fetch(
			`https://g59t3yegkl.execute-api.us-east-1.amazonaws.com/production/subscribe?${utm.toString()}`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			},
		);
		return res.ok;
	};

	const goStep2 = async (e) => {
		e.preventDefault();
		if (!validateStep1()) return;

		// analytics
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'signup_step',
			phase: 'step1_complete',
			experiment: EXP_KEY,
			variant: variant.id,
		});
		klaviyoIdentifyAndTrack('step1');

		setSending(true);
		try {
			await subscribeToKlaviyoList('step1');
			setStep(2);
		} catch (err) {
			// swallow to avoid blocking the UX
			// console.error(err);
			setStep(2);
		} finally {
			setSending(false);
		}
	};

	const submit = async (e) => {
		e.preventDefault();
		if (!validateStep2()) return;

		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'signup_submit',
			experiment: EXP_KEY,
			variant: variant.id,
		});

		klaviyoIdentifyAndTrack('submitted');

		setSending(true);
		try {
			await subscribeToKlaviyoList('submitted');
			onFormSubmit?.(form);
			// thank-you
			window.location.href = '/thank-you';
			// or: navigate('/thank-you');
		} catch (err) {
			// console.error(err);
			window.location.href = '/thank-you';
		} finally {
			setSending(false);
		}
	};

	return (
		<section
			id="signup"
			className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9fb] to-white"
		>
			{/* Soft accent shapes */}
			<div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200 to-cyan-100 opacity-50 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-200 to-sky-100 opacity-50 blur-3xl" />

			<div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-20">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
						<span className={headlineGradientClass}>
							{variant.headline}
						</span>
					</h2>
					<p className="mt-3 text-base text-gray-600 md:text-lg">
						{variant.subhead}
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 items-start gap-6 lg:mt-12 lg:grid-cols-3">
					{/* Value bullets + Trust */}
					<div className="order-2 space-y-4 lg:order-1">
						<div className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur">
							<ul className="space-y-3 text-sm text-gray-700">
								{variant.bullets.map((b, i) => (
									<li
										key={i}
										className="flex items-start gap-3"
									>
										<span className="mt-[2px] inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
											✓
										</span>
										<span>{b}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur">
							<p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
								Trusted by local teams
							</p>
							<div className="mt-3 flex items-center gap-4 opacity-80">
								{/* Replace with real logos */}
								<img
									src="/images/logos/google-partner.png"
									alt="Google"
									className="h-7 w-auto"
								/>
								<img
									src="/images/logos/klaviyo.png"
									alt="Klaviyo"
									className="h-7 w-auto"
								/>
								<img
									src="/images/logos/stripe.png"
									alt="Stripe"
									className="h-7 w-auto"
								/>
							</div>
						</div>
					</div>

					{/* Form Card */}
					<div className="order-1 lg:order-2 lg:col-span-2">
						<div className="relative rounded-3xl border border-gray-200 bg-white/80 p-5 shadow-xl backdrop-blur md:p-7">
							{/* Step 1 */}
							{step === 1 && (
								<form onSubmit={goStep2} noValidate>
									<label
										htmlFor="email"
										className="block text-sm font-semibold text-gray-800"
									>
										Work Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										inputMode="email"
										autoComplete="email"
										value={form.email}
										onChange={onChange}
										placeholder="you@company.com"
										className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none ring-0 focus:border-gray-400"
										aria-invalid={!!errors.email}
										aria-describedby={
											errors.email
												? 'email-error'
												: undefined
										}
										required
									/>
									{errors.email && (
										<p
											id="email-error"
											className="mt-1 text-xs text-red-600"
										>
											{errors.email}
										</p>
									)}

									{/* Honeypot */}
									<div className="hidden">
										<label htmlFor="company">Company</label>
										<input
											id="company"
											name="company"
											type="text"
											value={form.company}
											onChange={onChange}
											autoComplete="off"
										/>
									</div>

									<button
										type="submit"
										disabled={sending}
										className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700 disabled:opacity-60"
									>
										{sending
											? 'One moment…'
											: `${variant.cta} →`}
									</button>

									<p className="mt-3 text-[11px] leading-relaxed text-gray-500">
										By submitting, you agree to receive
										occasional emails. Unsubscribe anytime.
									</p>
								</form>
							)}

							{/* Step 2 */}
							{step === 2 && (
								<form onSubmit={submit} noValidate>
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
										<div>
											<label
												htmlFor="fname"
												className="block text-sm font-semibold text-gray-800"
											>
												First Name
											</label>
											<input
												id="fname"
												name="fname"
												type="text"
												value={form.fname}
												onChange={onChange}
												placeholder="Jane"
												className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-400"
												aria-invalid={!!errors.fname}
											/>
											{errors.fname && (
												<p className="mt-1 text-xs text-red-600">
													{errors.fname}
												</p>
											)}
										</div>
										<div>
											<label
												htmlFor="lname"
												className="block text-sm font-semibold text-gray-800"
											>
												Last Name
											</label>
											<input
												id="lname"
												name="lname"
												type="text"
												value={form.lname}
												onChange={onChange}
												placeholder="Doe"
												className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-400"
												aria-invalid={!!errors.lname}
											/>
											{errors.lname && (
												<p className="mt-1 text-xs text-red-600">
													{errors.lname}
												</p>
											)}
										</div>
									</div>

									<div className="mt-4">
										<label
											htmlFor="businessName"
											className="block text-sm font-semibold text-gray-800"
										>
											Business Name
										</label>
										<input
											id="businessName"
											name="businessName"
											type="text"
											value={form.businessName}
											onChange={onChange}
											placeholder="Acme Co."
											className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-400"
											aria-invalid={!!errors.businessName}
										/>
										{errors.businessName && (
											<p className="mt-1 text-xs text-red-600">
												{errors.businessName}
											</p>
										)}
									</div>

									<div className="mt-4">
										<label
											htmlFor="website"
											className="block text-sm font-semibold text-gray-800"
										>
											Website
										</label>
										<input
											id="website"
											name="website"
											type="text"
											value={form.website}
											onChange={onChange}
											placeholder="example.com"
											className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-400"
											aria-invalid={!!errors.website}
										/>
										{errors.website && (
											<p className="mt-1 text-xs text-red-600">
												{errors.website}
											</p>
										)}
									</div>

									{/* Honeypot */}
									<div className="hidden">
										<label htmlFor="company2">
											Company
										</label>
										<input
											id="company2"
											name="company"
											type="text"
											value={form.company}
											onChange={onChange}
											autoComplete="off"
										/>
									</div>

									<button
										type="submit"
										disabled={sending}
										className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90 disabled:opacity-60"
									>
										{sending
											? 'Submitting…'
											: 'Send My Plan →'}
									</button>
								</form>
							)}
						</div>
					</div>

					{/* Micro-proof (bottom on mobile, side on desktop) */}
					<div className="order-3 w-full lg:order-3 lg:col-span-3">
						<div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-gray-200 bg-white/70 p-5 text-sm text-gray-700 shadow-sm backdrop-blur">
							“We came in for a website, but left with a system
							that actually books clients. Clear process, fast
							delivery, and it converts.”
							<span className="text-gray-500">
								{' '}
								— Client, 2024
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
