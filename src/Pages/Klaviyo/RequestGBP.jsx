import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import RequestGBPVideo from '../../Components/Video/RequestGBP/RequestGBPVideo';
import { Helmet } from 'react-helmet-async';

function RequestGBP() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		email: '',
		fname: '',
		lname: '',
		businessName: '',
		website: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showBooking, setShowBooking] = useState(false); // Add state for showing booking iframe
	const navigate = useNavigate();

	// Validation functions
	const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	const validateWebsite = (website) => {
		const websiteRegex =
			/^((https?:\/\/)?(www\.)?)[a-zA-Z0-9-]+\.(com|org|net|gov|edu|info|biz|name|xyz|online|tech|site|store|website|app|io|me|co|nyc|us)$/i;
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

	// Handle input changes
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle step 1 submission
	const handleNextStep = async (e) => {
		e.preventDefault();
		if (validateStep1()) {
			setIsSubmitting(true);
			try {
				// Simulate email check and profile creation
				await subscribeToKlaviyoList('step1');
				setStep(2);
			} catch (error) {
				console.error(
					'Error checking/creating profile:',
					error.message,
				);
			} finally {
				setIsSubmitting(false);
			}
		}
	};

	// Handle step 2 submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (validateStep2()) {
			setIsSubmitting(true);
			try {
				// Identify the user in Klaviyo
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

				// Track the form submission
				window._learnq.push([
					'track',
					'Form Submitted',
					{
						'Form Name': 'RequestGBP',
					},
				]);

				// Send data to Klaviyo
				await subscribeToKlaviyoList('step2');

				console.log('Form Submitted:', formData);
				navigate('/thank-you');
			} catch (error) {
				console.error('Error submitting form:', error.message);
			} finally {
				setIsSubmitting(false);
			}
			// 	setStep(3);
			// 	setShowBooking(true); // Show booking iframe in Step 3
			// } catch (error) {
			// 	console.error('Error submitting form:', error.message);
			// } finally {
			// 	setIsSubmitting(false);
			// }
		}
	};

	// Subscribe to Klaviyo subscription
	const subscribeToKlaviyoList = async (step) => {
		try {
			// Payload for Klaviyo
			let payload = {
				email: formData.email,
				initial_zoom_booking_status: 'not_booked_yet',
			};

			if (step === 'step2') {
				payload.firstName = formData.fname;
				payload.lastName = formData.lname;
				payload.businessName = formData.businessName;
				payload.website = formData.website;
			}

			// Make the API request
			const response = await fetch(
				'https://g59t3yegkl.execute-api.us-east-1.amazonaws.com/production/subscribe',
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
				console.error(
					'Error subscribing:',
					data.error || 'Unknown error',
				);
			}
		} catch (error) {
			console.error('Error subscribing:', error.message);
		}
	};

	const handleVideoClick = () => {
		const video = document.getElementById('requestGBPVideo');
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="RequestGBP__container bg-gray-50 py-8">
			{/* Helmet for setting up head metadata */}
			<Helmet>
				<title>
					Request a Free Google Business Profile Audit | NextWave
				</title>
				<meta
					name="description"
					content="Boost your business's online presence in Midland TX with a free Google Business Profile audit. Enhance local SEO and increase visibility today!"
				/>
				<meta
					name="keywords"
					content="Google Business Profile, local SEO, Midland TX, business visibility, online presence, web design, free audit"
				/>
				<meta name="author" content="NextWave Web Studio" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/request-gbp"
				/>
			</Helmet>

			<div className="RequestGBP__content px-8">
				<div className="header4_component grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="header4_content">
						<div className="mb-4">
							<h1 className="text-4xl font-bold text-gray-800">
								Optimize Your Business for Google Rankings and
								Visibility
							</h1>
						</div>
						<p className="text-lg text-gray-600">
							Ready to attract more customers in your local area?
							We provide actionable strategies to improve your
							Google Business Profile, enhance local SEO, and
							drive organic traffic to your business.
						</p>
						<div className="mt-6">
							<div className="header4_form-block">
								{/* Step 1 */}
								{step === 1 && (
									<form
										id="email-form"
										name="email-form"
										onSubmit={handleNextStep}
										className="header4_form"
										aria-label="Email Form"
									>
										<input
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
											name="email"
											placeholder="Enter your email"
											type="email"
											aria-label="Email"
											aria-describedby="Email-helper"
											value={formData.email}
											onChange={handleChange}
											required
										/>
										{errors.email && (
											<p className="text-red-500 text-sm mt-1">
												{errors.email}
											</p>
										)}
										<input
											type="submit"
											value={
												isSubmitting
													? 'Processing...'
													: 'Request Google Business Profile Report'
											}
											className="button bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700"
											disabled={isSubmitting}
										/>
									</form>
								)}

								{/* Step 2 */}
								{step === 2 && (
									<form
										onSubmit={handleSubmit}
										className="header4_form"
										aria-label="Additional Details Form"
									>
										<input
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
											name="fname"
											placeholder="First Name"
											type="text"
											aria-label="First Name"
											aria-describedby="First Name-helper"
											value={formData.fname}
											onChange={handleChange}
											required
										/>
										{errors.fname && (
											<p className="text-red-500 text-sm mt-1">
												{errors.fname}
											</p>
										)}
										<input
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
											name="lname"
											placeholder="Last Name"
											type="text"
											aria-label="Last Name"
											aria-describedby="Last Name-helper"
											value={formData.lname}
											onChange={handleChange}
											required
										/>
										{errors.lname && (
											<p className="text-red-500 text-sm mt-1">
												{errors.lname}
											</p>
										)}
										<input
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
											name="businessName"
											placeholder="Business Name"
											type="text"
											aria-label="Business Name"
											aria-describedby="Business Name-helper"
											value={formData.businessName}
											onChange={handleChange}
											required
										/>
										{errors.businessName && (
											<p className="text-red-500 text-sm mt-1">
												{errors.businessName}
											</p>
										)}
										<input
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
											name="website"
											placeholder="Website (e.g., example.com)"
											type="text"
											aria-label="Website URL"
											aria-describedby="Website URL-helper"
											value={formData.website}
											onChange={handleChange}
											required
										/>
										{errors.website && (
											<p className="text-red-500 text-sm mt-1">
												{errors.website}
											</p>
										)}
										<input
											type="submit"
											value={
												isSubmitting
													? 'Submitting...'
													: 'Submit'
											}
											aria-label="Submit Button"
											aria-describedby="Submit Button-helper"
											className="button bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700"
											disabled={isSubmitting}
										/>
									</form>
								)}

								{/* Step 3 */}
								{step === 3 && (
									<div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 mt-8">
										{/* Success Message */}
										<div className="flex-1 text-center lg:text-left bg-white p-6 rounded-lg shadow-lg">
											<h2 className="text-2xl font-bold text-bright-teal">
												Empowering Your Next Move 🌐
											</h2>
											<p className="mt-4 text-gray-700">
												You’re one step closer to
												gaining the insights needed to
												drive real growth. Please check
												your email and confirm your
												subscription to receive your
												report. If you don’t see it,
												check your spam folder!
											</p>
										</div>

										{/* Booking Iframe */}
										{showBooking && (
											<div className="flex-1 mt-8 lg:mt-0 text-center">
												<p className="text-xl mb-4">
													Book your FREE strategy call
													below!
												</p>
												<iframe
													src="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call?embed=true"
													frameBorder="0"
													className="w-full h-[700px] rounded-lg shadow-lg"
												/>
											</div>
										)}
									</div>
								)}

								<div className="text-sm text-gray-600 mt-2">
									By submitting this request you're
									subscribing to our email list and confirming
									that you agree with our{' '}
									<a
										href="/terms-and-conditions"
										className="text-blue-600 underline hover:text-blue-700"
									>
										Terms and Conditions
									</a>
									.
								</div>
							</div>
						</div>
					</div>
					{/* <a
						href="#"
						className="header4_lightbox block relative group"
						aria-label="open lightbox"
						aria-haspopup="dialog"
					>
						<div onClick={handleVideoClick} className="relative">
							<video
								id="requestGBPVideo"
								src="/images/requestGBP_descript.mp4"
								className="w-full h-auto rounded-lg shadow-md"
								controls
							/>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
								<svg
									width="64"
									height="64"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-white"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z"
										fill="currentColor"
									/>
								</svg>
							</div>
						</div>
					</a> */}
					<RequestGBPVideo />
				</div>
			</div>
		</div>
	);
}

export default RequestGBP;
