import React from 'react';

const Privacy = () => {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-6 lg:text-center lg:mb-8">
				Privacy Policy
			</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Introduction</h2>
				<p>
					NextWave Web Studio values your privacy. This Privacy Policy
					outlines how we collect, use, store, and share your personal
					information when you use our website or services.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					What Information We Collect
				</h2>
				<p>We collect the following types of information:</p>
				<p className="font-semibold">Personal Information:</p>
				<p className="mb-4">
					Names, email addresses, website names, URLs, and phone
					numbers (planned for future inclusion).
				</p>
				<p className="font-semibold">Non-Personal Information:</p>
				<p>
					Data such as browser type, device type, and website
					interactions may be collected anonymously through tools like
					Google Analytics.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					How We Use Your Information
				</h2>
				<p>
					Your information is used to respond to inquiries, provide
					quotes, deliver services, and send marketing communications
					relevant to your business needs.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					How We Share Your Information
				</h2>
				<p>
					We may share your data with trusted third parties to enhance
					service delivery, including:
				</p>
				<p className="font-semibold">Email Marketing:</p>
				<p className="mb-4">
					Klaviyo for sending promotional and transactional emails.
				</p>
				<p className="font-semibold">Analytics:</p>
				<p>
					Google Analytics to monitor website traffic and performance.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
				<p>
					We retain your information only for as long as necessary to
					fulfill the purposes outlined in this policy, or as required
					by law.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
				<p>You have the following rights regarding your data:</p>
				<p className="font-semibold">Access:</p>
				<p className="mb-4">
					Request a copy of the information we hold about you.
				</p>
				<p className="font-semibold">Correction:</p>
				<p className="mb-4">
					Update or correct your information if inaccurate.
				</p>
				<p className="font-semibold">Deletion:</p>
				<p>Request that we delete your personal data.</p>
			</section>
		</div>
	);
};

export default Privacy;
