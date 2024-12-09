import React, { useState, useEffect } from 'react';

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

	// Validation functions
	const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	const validateWebsite = (website) =>
		/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/.test(website);

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
				setStep(3);
			} catch (error) {
				console.error('Error submitting form:', error.message);
			} finally {
				setIsSubmitting(false);
			}
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

	return (
		<div className="RequestGBP__container bg-gray-50 py-8">
			<div className="RequestGBP__content px-8">
				<div className="header4_component grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="header4_content">
						<div className="mb-4">
							<h1 className="text-4xl font-bold text-gray-800">
								Medium length hero heading goes here
							</h1>
						</div>
						<p className="text-lg text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare, eros
							dolor interdum nulla, ut commodo diam libero vitae
							erat.
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
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
											name="email"
											placeholder="Enter your email"
											type="email"
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
													: 'Sign up'
											}
											className="button bg-green-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-green-700"
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
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
											name="fname"
											placeholder="First Name"
											type="text"
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
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
											name="lname"
											placeholder="Last Name"
											type="text"
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
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
											name="businessName"
											placeholder="Business Name"
											type="text"
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
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
											name="website"
											placeholder="Website (e.g., example.com)"
											type="url"
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
											className="button bg-green-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-green-700"
											disabled={isSubmitting}
										/>
									</form>
								)}

								<div className="text-sm text-gray-600 mt-2">
									By clicking Sign Up you're confirming that
									you agree with our{' '}
									<a
										href="#"
										className="text-green-600 underline hover:text-green-700"
									>
										Terms and Conditions
									</a>
									.
								</div>
							</div>
						</div>
					</div>
					<a
						href="#"
						className="header4_lightbox block relative group"
						aria-label="open lightbox"
						aria-haspopup="dialog"
					>
						<img
							src="https://assets-global.website-files.com/624380709031623bfe4aee60/6243807090316259584aee68_placeholder-video-thumbnail.svg"
							alt="Video thumbnail"
							className="w-full h-auto rounded-lg shadow-md"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
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
					</a>
				</div>
			</div>
		</div>
	);
}

export default RequestGBP;
