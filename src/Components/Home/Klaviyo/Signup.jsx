import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FORM_VARIANTS = [
	{
		id: 1,
		headline: 'Unlock Your Free Google Business Report! 📊',
		description:
			'Discover insights to optimize your Google Business profile and drive more traffic.',
		cta: 'Get My Free Report',
		image: '/images/form/analytics.webp',
	},
	{
		id: 2,
		headline: 'Get a Free Audit of Your Google Business Profile!',
		description:
			'Sign up to receive a personalized report on how to boost your online presence.',
		cta: 'Show Me the Insights',
		image: '/images/form/metric.webp',
	},
	{
		id: 3,
		headline: 'Unlock Your Free Google Business Report! 📊',
		description:
			'Sign up to receive personalized insights to grow your business online.',
		cta: 'Get My Free Report',
		image: null,
	},
	{
		id: 4,
		headline: 'Get a Free Audit of Your Google Business Profile!',
		description:
			'Receive a tailored report to optimize your online visibility.',
		cta: 'Get My Free Report',
		image: '/images/form/searching.webp',
	},
	{
		id: 5,
		headline: 'Unlock Insights to Drive Growth 🚀',
		description:
			'Get a custom Google report to enhance your online strategy.',
		cta: 'Show Me the Insights',
		image: '/images/form/progress.webp',
	},
];

function Signup({ onFormSubmit }) {
	const [step, setStep] = useState(1);
	const [variant, setVariant] = useState(null);
	const [formData, setFormData] = useState({
		email: '',
		fname: '',
		lname: '',
		businessName: '',
		website: '',
	});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		// Randomly select a form variant
		const randomVariant =
			FORM_VARIANTS[Math.floor(Math.random() * FORM_VARIANTS.length)];
		setVariant(randomVariant);

		// Check if the user arrived with the #signup hash in the URL
		const handleHashScroll = () => {
			if (window.location.hash === '#signup') {
				const element = document.getElementById('signup');
				if (element) {
					element.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					});
				}
			}
		};

		// Only run on initial load
		handleHashScroll();

		// Listen for changes to the URL hash
		window.addEventListener('hashchange', handleHashScroll);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('hashchange', handleHashScroll);
		};
	}, []);

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	// Updated website validation to accept domains like "testing.com" or "www.example.org"
	const validateWebsite = (website) => {
		const websiteRegex =
			/^[a-zA-Z0-9-]+\.(com|org|net|gov|edu|info|biz|name|xyz|online|tech|site|store|website|app|io|me|co|nyc|us)$/i;
		return websiteRegex.test(website);
	};

	const validateStep1 = () => {
		const newErrors = {};
		if (!formData.email || !validateEmail(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const validateStep2 = () => {
		const newErrors = {};
		if (!formData.fname) newErrors.fname = 'First Name is required';
		if (!formData.lname) newErrors.lname = 'Last Name is required';
		if (!formData.businessName)
			newErrors.businessName = 'Business Name is required';
		if (!formData.website || !validateWebsite(formData.website)) {
			newErrors.website =
				'Please enter a valid website (e.g., example.com)';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleNextStep = (e) => {
		e.preventDefault();
		if (validateStep1()) {
			// Send the email to Klaviyo
			subscribeToKlaviyoList('step1');
			setStep(2);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateStep2()) {
			// Identify the user in Klaviyo (if needed for tracking)
			window._learnq.push([
				'identify',
				{
					$email: formData.email,
					$first_name: formData.fname,
					$last_name: formData.lname,
					'Business Name': formData.businessName,
					Website: formData.website,
					initial_zoom_booking_status: 'not_booked_yet',
				},
			]);

			// Track the form submission event (if needed)
			window._learnq.push([
				'track',
				'Form Submitted',
				{
					'Form Name': 'Signup Form',
					'Variant ID': variant?.id || 'Default',
				},
			]);

			// Update the user's profile in Klaviyo
			subscribeToKlaviyoList('step2');

			console.log('Form Submitted:', formData);
			navigate('/thank-you');
		}
	};

	const subscribeToKlaviyoList = async (step) => {
		try {
			const utmParams = new URLSearchParams({
				utm_source: 'klaviyo',
				utm_medium: step === 'step2' ? 'form' : 'email',
				utm_campaign: 'google_business_report_form',
				utm_content: `variant_${variant?.id || 'default'}`,
			});

			let payload = {
				email: formData.email,
				initial_zoom_booking_status: 'not_booked_yet',
			};

			console.log('Step 1 - Payload before step 2:', payload);

			if (step === 'step2') {
				payload.firstName = formData.fname;
				payload.lastName = formData.lname;
				payload.businessName = formData.businessName;
				payload.website = formData.website;
				console.log('Step 2 - Payload with additional data:', payload);
			}

			const response = await fetch(
				`https://g59t3yegkl.execute-api.us-east-1.amazonaws.com/production/subscribe?${utmParams.toString()}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				},
			);

			const data = await response.json();
			if (response.ok) {
				console.log('Successfully subscribed:', data);
			} else {
				console.error('Error subscribing:', data.error);
			}
		} catch (error) {
			console.error('Error subscribing:', error);
		}
	};

	return (
		<div
			id="signup"
			className="signup__container bg-lemon-chiffon py-12 px-6 sm:px-10 lg:px-16 flex justify-center items-center"
		>
			<div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
				{/* Step 1 */}
				{variant && step === 1 && (
					<div
						className={`${variant.image ? 'lg:grid lg:grid-cols-2 gap-8' : 'flex flex-col'}`}
					>
						{variant.image && (
							<div className="flex items-center justify-center">
								<img
									loading="lazy"
									src={variant.image}
									alt="Form Image"
									className="w-full h-auto object-cover rounded-lg"
								/>
							</div>
						)}
						<form
							onSubmit={handleNextStep}
							className={`${variant.image ? '' : 'w-full'} space-y-6`}
						>
							<h2 className="text-3xl font-bold text-gray-800">
								{variant.headline}
							</h2>
							<p className="text-gray-600">
								{variant.description}
							</p>
							<input
								type="email"
								name="email"
								aria-label="Email"
								aria-describedby="email-helper"
								value={formData.email}
								onChange={handleChange}
								placeholder="Your Email Address"
								required
								className="w-full px-4 py-3 border rounded-lg focus:outline-none"
							/>
							{errors.email && (
								<p className="text-red-500 text-sm">
									{errors.email}
								</p>
							)}
							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
							>
								{variant.cta}
							</button>
							<p className="text-sm text-gray-500 mt-4">
								By signing up, you agree to receive marketing
								emails from us. You can unsubscribe at any time.
							</p>
						</form>
					</div>
				)}

				{/* Step 2 */}
				{step === 2 && (
					<form onSubmit={handleSubmit} className="space-y-6">
						<h2 className="text-xl font-semibold text-gray-800">
							Tell Us About Your Business
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<input
								type="text"
								name="fname"
								aria-label="First Name"
								aria-describedby="First Name-helper"
								value={formData.fname}
								onChange={handleChange}
								placeholder="First Name"
								className="w-full px-4 py-3 border rounded-lg focus:outline-none"
							/>
							{errors.fname && (
								<p className="text-red-500 text-sm">
									{errors.fname}
								</p>
							)}
							<input
								type="text"
								name="lname"
								aria-label="Last Name"
								aria-describedby="Last Name-helper"
								value={formData.lname}
								onChange={handleChange}
								placeholder="Last Name"
								className="w-full px-4 py-3 border rounded-lg focus:outline-none"
							/>
							{errors.lname && (
								<p className="text-red-500 text-sm">
									{errors.lname}
								</p>
							)}
						</div>
						<input
							type="text"
							name="businessName"
							aria-label="Business Name"
							aria-describedby="Business Name-helper"
							value={formData.businessName}
							onChange={handleChange}
							placeholder="Business Name"
							className="w-full px-4 py-3 border rounded-lg focus:outline-none"
						/>
						{errors.businessName && (
							<p className="text-red-500 text-sm">
								{errors.businessName}
							</p>
						)}
						<input
							type="text"
							name="website"
							aria-label="Website URL"
							aria-describedby="Website URL-helper"
							value={formData.website}
							onChange={handleChange}
							placeholder="Business Website (e.g., example.com)"
							className="w-full px-4 py-3 border rounded-lg focus:outline-none"
						/>
						{errors.website && (
							<p className="text-red-500 text-sm">
								{errors.website}
							</p>
						)}
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

export default Signup;
