import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FeaturedPosts from '../../Components/Blogs/FeaturedPosts';

function MidlandWebDesign() {
	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{`
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "NextWave Web Studio",
                            "description": "Custom web design and development services for Midland TX businesses.",
                            "url": "https://nextwavewebstudio.com/web-design-midland-tx",
                            "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Midland",
                            "addressRegion": "TX",
                            "postalCode": "79701",
                            "addressCountry": "US"
                            },
                            "telephone": "+1-555-555-5555",
                            "image": "https://nextwavewebstudio.com/images/midland/midland.webp"
                        }
                    `}
				</script>
				<title>Web Design in Midland TX | NextWave Web Studio</title>
				<meta
					name="google-site-verification"
					content="MyRjKPtOfeszXcgCw-kKr0wDQ1v9jnwpqjVFOlPH2yU"
				/>
				<meta
					name="description"
					content="Looking for professional web design in Midland TX? NextWave Web Studio creates custom websites that drive results. Contact us today to grow your business!"
				/>
				<meta
					property="og:title"
					content="Web Design in Midland TX | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="Transform your online presence with expert web design in Midland TX. NextWave Web Studio delivers tailored websites for local businesses. Let’s grow your business!"
				/>
				<meta
					property="og:image"
					content="/images/midland/midland.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/web-design-midland-tx"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/web-design-midland-tx"
				/>
			</Helmet>

			<div className="midlandWebDesign__container bg-gray-50 py-12 px-8 md:px-16 lg:px-24">
				{/* Hero Section */}
				<section className="hero-section text-center mb-16">
					<h1 className="text-4xl font-extrabold text-blue-600 mb-4">
						Expert Web Design in Midland TX
					</h1>
					<p className="text-lg text-gray-700">
						Transform your online presence with NextWave Web Studio.
						We create custom website solutions designed to elevate
						your brand and grow your business.
					</p>
					<img
						src="/images/midland/midland.webp"
						alt="Midland TX Web Design"
						className="mt-8 mx-auto rounded-lg shadow-lg w-full max-w-4xl md:w-2/3 lg:w-1/2 xl:w-1/3"
					/>
				</section>

				{/* Why Choose Us Section */}
				<section className="why-choose-us mb-16">
					<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
						Why Choose NextWave for Midland Web Design?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="feature-card text-center p-6 bg-white rounded-lg shadow">
							<img
								src="/images/midland/current_location.webp"
								alt="Midland web design services for local businesses"
								className="w-1/2 mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">
								Local Expertise
							</h3>
							<p className="text-gray-600">
								We know the Midland market and tailor our
								services to meet the unique needs of local
								businesses.
							</p>
						</div>
						<div className="feature-card text-center p-6 bg-white rounded-lg shadow">
							<img
								src="/images/midland/instant_analysis.webp"
								alt="Results Driven Design"
								className="w-1/2 mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">
								Results-Driven Design
							</h3>
							<p className="text-gray-600">
								Our websites are designed to convert visitors
								into customers, ensuring measurable ROI.
							</p>
						</div>
						<div className="feature-card text-center p-6 bg-white rounded-lg shadow">
							<img
								src="/images/midland/Mobile_apps.webp"
								alt="Mobile Friendly"
								className="w-1/2 mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">
								Modern & Responsive
							</h3>
							<p className="text-gray-600">
								Every site we create is mobile-friendly and
								optimized for all devices, keeping you ahead of
								the competition.
							</p>
						</div>
					</div>
				</section>

				{/* Our Services Section */}
				<section className="our-services mb-16">
					<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
						Our Web Design Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="service-card p-6 bg-white rounded-lg shadow">
							<img
								src="/images/services/design.svg"
								alt="Custom Web Design"
								className="w-1/2 mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">
								Custom Web Design
							</h3>
							<p className="text-gray-600">
								Tailored designs that capture your brand’s
								personality and resonate with your audience.
							</p>
						</div>
						<div className="service-card p-6 bg-white rounded-lg shadow">
							<img
								src="/images/services/seo.svg"
								alt="SEO Optimization"
								className="w-2/5 mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">
								SEO Optimization
							</h3>
							<p className="text-gray-600">
								Websites built with search engines in mind to
								ensure your business gets found online.
							</p>
						</div>
						<div className="service-card p-6 bg-white rounded-lg shadow">
							<img
								src="/images/midland/ecommerce.webp"
								alt="E-Commerce Solutions"
								className="w-3/5 mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">
								E-Commerce Solutions
							</h3>
							<p className="text-gray-600">
								From online stores to payment integrations, we
								make it easy to sell online.
							</p>
						</div>
						<div className="service-card p-6 bg-white rounded-lg shadow">
							<img
								src="/images/blogs/approve.webp"
								alt="Fast & Secure Hosting"
								className="w-1/2 mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">
								Fast & Secure Hosting
							</h3>
							<p className="text-gray-600">
								Dependable hosting services that keep your
								website running smoothly.
							</p>
						</div>
					</div>
				</section>

				{/* How We Work Section */}
				<section className="how-we-work mb-16">
					<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
						How We Work with Midland Businesses
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<img
								src="/images/midland/In_progress.webp"
								alt="Work Process"
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<ul className="space-y-6">
								<li className="flex items-start">
									<span className="bg-blue-600 text-white rounded-full p-3 mr-4">
										1
									</span>
									<p>
										<strong>Discovery Session:</strong> We
										take the time to understand your
										business, audience, and goals.
									</p>
								</li>
								<li className="flex items-start">
									<span className="bg-blue-600 text-white rounded-full p-3 mr-4">
										2
									</span>
									<p>
										<strong>Custom Strategy:</strong> Based
										on your needs, we create a detailed plan
										to bring your vision to life.
									</p>
								</li>
								<li className="flex items-start">
									<span className="bg-blue-600 text-white rounded-full p-3 mr-4">
										3
									</span>
									<p>
										<strong>Design & Development:</strong>{' '}
										We craft a stunning, functional website
										that represents your brand.
									</p>
								</li>
								<li className="flex items-start">
									<span className="bg-blue-600 text-white rounded-full p-3 mr-4">
										4
									</span>
									<p>
										<strong>Launch & Support:</strong> After
										launch, we offer ongoing support to
										ensure your site continues to perform.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="cta-section bg-blue-600 text-white py-12 text-center rounded-lg shadow px-4">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Grow Your Business in Midland TX?
					</h2>
					<p className="mb-6">
						Your website should be more than just an online
						presence— it should be a powerful tool that drives
						growth for your business. Let’s make it happen!
					</p>
					<Link
						to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call"
						className="btn-primary bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-200"
					>
						Contact Us Today
					</Link>
				</section>

				<FeaturedPosts />
			</div>
		</>
	);
}

export default MidlandWebDesign;
