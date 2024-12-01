import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState('');

	const handlePhoneChange = (e) => {
		let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

		// Automatically insert dashes
		if (value.length > 3 && value.length <= 6) {
			value = `${value.slice(0, 3)}-${value.slice(3)}`;
		} else if (value.length > 6) {
			value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
		}

		setPhone(value);

		// Validate the phone number format
		if (value.length === 0 || value.length === 12) {
			setPhoneError('');
		} else {
			setPhoneError(
				'Please enter a valid 10-digit phone number (e.g., 123-456-7890)',
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate the phone number before sending
		const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
		if (phone && !phonePattern.test(phone)) {
			setPhoneError(
				'Please enter a valid 10-digit phone number (e.g., 123-456-7890).',
			);
			return;
		}

		emailjs
			.sendForm(
				'service_rqhjx8e', // Contact Us Form | EmailJS Service ID
				'template_zvm735r', // Contact Us Form | EmailJS Template ID
				e.target,
				'MQagYNMitudcU9bur', // Public API
			)
			.then((result) => {
				console.log('Email sent successfully!', result.text);
			})
			.catch((error) => {
				console.error('Error sending email:', error);
			});

		e.target.reset(); // Reset the form after submission
		setPhone('');
	};

	return (
		<section id="contact" className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Side */}
					<div>
						{/* Heading */}
						<div className="mb-8">
							<h2 className="text-3xl font-extrabold subheader">
								Let's Elevate Your Digital Presence Together 👋
							</h2>
							<p className="mt-4 text-lg text-gray-600">
								Whether you're ready to launch a new website,
								enhance your online visibility, or kickstart a
								digital marketing campaign, we're here to help
								your business grow. Reach out to us today, and
								let's start creating something amazing together.
							</p>
						</div>

						{/* Testimonial */}
						{/* <div className="relative mt-12"> */}
						{/* Decorative Shape */}
						{/* <div className="absolute inset-0 transform -skew-y-6 bg-blue-100 rounded-lg"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-lg"> */}
						{/* Star Ratings */}
						{/* <div className="flex space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg
                        key={i}
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                    </div> */}
						{/* Quote */}
						{/* <blockquote className="mt-4">
                    <p className="text-xl text-gray-700">
                        "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
                    </p>
                    </blockquote> */}
						{/* Reviewer Details */}
						{/* <div className="mt-6 flex items-center">
                    <img
                        className="w-12 h-12 rounded-full"
                        src="https://landingfoliocom.imgix.net/store/collection/saasui/images/sign-in/3/avatar-male.png"
                        alt="Devon Lane"
                    />
                    <div className="ml-4">
                        <p className="text-lg font-semibold text-gray-900">Devon Lane</p>
                        <p className="text-sm text-gray-600">Co-Founder, Design.co</p>
                    </div>
                    </div>
                </div>
            </div> */}

						<div className="contact__img__container">
							<img
								src="/images/contact/programming.svg"
								alt="Contact Us"
							/>
						</div>
					</div>

					{/* Right Side - Contact Form */}
					<div className="bg-white p-8 rounded-lg shadow-lg">
						<h3 className="pl-2 text-2xl font-bold text-gray-900 mb-6">
							Send us a message
						</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="pl-2 block text-sm font-medium text-gray-700"
								>
									Your name{' '}
									<span className="text-tomato">*</span>
								</label>
								<input
									required
									type="text"
									name="user_name"
									id="name"
									placeholder="Your name"
									className="pl-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="pl-2 block text-sm font-medium text-gray-700"
								>
									Email address{' '}
									<span className="text-tomato">*</span>
								</label>
								<input
									required
									type="email"
									name="user_email"
									id="email"
									placeholder="Email address"
									className="pl-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="pl-2 block text-sm font-medium text-gray-700"
								>
									Phone
								</label>
								<input
									type="tel"
									name="user_phone"
									id="phone"
									value={phone}
									onChange={handlePhoneChange}
									placeholder="222-333-4444"
									className={`pl-2 py-1 mt-1 block w-full border ${
										phoneError
											? 'border-red-500'
											: 'border-gray-300'
									} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
								/>
								{phoneError && (
									<p className="text-red-500 text-sm mt-1">
										{phoneError}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="message"
									className="pl-2 block text-sm font-medium text-gray-700"
								>
									Write your message{' '}
									<span className="text-tomato">*</span>
								</label>
								<textarea
									required
									name="user_message"
									id="message"
									placeholder="Write your message"
									rows="4"
									className="pl-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
