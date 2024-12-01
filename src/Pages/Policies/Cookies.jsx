import React from 'react';

const Cookies = () => {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-6 lg:text-center lg:mb-8">
				Cookies Policy
			</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Introduction</h2>
				<p>
					We use cookies to enhance your browsing experience, analyze
					site traffic, and improve our services. This Cookies Policy
					explains what cookies are, how we use them, and your rights
					regarding their usage. If we make any changes to this
					policy, they will be updated here.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					What Are Cookies?
				</h2>
				<p>
					Cookies are small text files placed on your device by
					websites you visit. They serve various purposes, including
					enabling essential functions, improving website performance,
					and providing insights into user behavior.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					Types of Cookies We Use
				</h2>
				<p className="font-semibold">Essential Cookies:</p>
				<p className="mb-4">
					These cookies are necessary for the basic functioning of our
					website, such as navigating between pages.
				</p>
				<p className="font-semibold">Performance Cookies:</p>
				<p className="mb-4">
					These cookies help us understand how users interact with our
					website by collecting anonymous data, which we use to
					improve functionality.
				</p>
				<p className="font-semibold">Third-Party Cookies:</p>
				<p>
					Tools like Google Analytics may place cookies on your device
					to analyze site traffic and improve services.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					Managing Cookies
				</h2>
				<p>
					You can manage or delete cookies through your browser
					settings. Note that disabling cookies may impact the
					functionality of our website.
				</p>
			</section>
		</div>
	);
};

export default Cookies;
