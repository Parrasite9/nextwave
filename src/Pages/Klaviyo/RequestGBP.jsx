import React, { useState } from 'react';

const RequestGBP = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		businessName: '',
		website: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Validation functions
	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validateWebsite = (website) => {
		const websiteRegex =
			/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
		return websiteRegex.test(website);
	};

	// Step 1 Validation
	const validateStep1 = () => {
		const newErrors = {};
		if (!formData.email || !validateEmail(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Step 2 Validation
	const validateStep2 = () => {
		const newErrors = {};
		if (!formData.firstName) newErrors.firstName = 'First Name is required';
		if (!formData.lastName) newErrors.lastName = 'Last Name is required';
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

	// Handle Step 1 Submission
	const handleNextStep = async (e) => {
		e.preventDefault();
		if (validateStep1()) {
			setIsSubmitting(true);
			try {
				// Check if the email exists in Klaviyo
				const response = await fetch(
					`<API_INVOKE_URL>/check-email?email=${encodeURIComponent(
						formData.email,
					)}`,
				);

				const data = await response.json();

				if (!data.success) {
					// If email doesn't exist, create a new profile
					await fetch('<API_INVOKE_URL>/create-profile', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email: formData.email,
							initial_zoom_booking_status: 'not_booked_yet',
						}),
					});
				}

				// Proceed to Step 2
				setStep(2);
			} catch (error) {
				console.error('Error checking/creating profile:', error);
			} finally {
				setIsSubmitting(false);
			}
		}
	};

	// Handle Step 2 Submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateStep2()) {
			setIsSubmitting(true);
			try {
				// Update Klaviyo profile
				await fetch('<API_INVOKE_URL>/update-profile', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: formData.email,
						firstName: formData.firstName,
						lastName: formData.lastName,
						businessName: formData.businessName,
						website: formData.website,
					}),
				});
				console.log('Profile successfully updated');
			} catch (error) {
				console.error('Error updating profile:', error);
			} finally {
				setIsSubmitting(false);
			}
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
											maxLength="256"
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
								{step === 2 && (
									<form
										onSubmit={handleSubmit}
										className="header4_form"
										aria-label="Additional Details Form"
									>
										<input
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
											name="firstName"
											placeholder="First Name"
											type="text"
											value={formData.firstName}
											onChange={handleChange}
											required
										/>
										{errors.firstName && (
											<p className="text-red-500 text-sm mt-1">
												{errors.firstName}
											</p>
										)}
										<input
											className="form_input p-2 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
											name="lastName"
											placeholder="Last Name"
											type="text"
											value={formData.lastName}
											onChange={handleChange}
											required
										/>
										{errors.lastName && (
											<p className="text-red-500 text-sm mt-1">
												{errors.lastName}
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
								<div
									className="success-message hidden text-green-600 mt-2"
									role="alert"
								>
									Thank you! Your submission has been
									received!
								</div>
								<div
									className="error-message hidden text-red-600 mt-2"
									role="alert"
								>
									Oops! Something went wrong while submitting
									the form.
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
};

export default RequestGBP;
