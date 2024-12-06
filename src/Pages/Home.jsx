import React from 'react';
import {
	CaseStudy,
	Hero,
	ServicesSection,
	PricingTable,
	Contact,
	Signup,
	Pricing2,
} from '../Components';
import FeaturedPosts from '../Components/Blogs/FeaturedPosts';
import { Helmet } from 'react-helmet-async';

function Home() {
	return (
		<div>
			<Helmet>
				<title>
					Web Design in Midland TX | Boost Revenue with NextWave
				</title>
				<meta
					name="description"
					content="NextWave Web Studio offers expert web design in Midland TX. Maximize your ROI with custom websites designed to convert visitors into customers. Contact us today!"
				/>
				<meta
					property="og:title"
					content="Web Design in Midland TX | Boost Revenue with NextWave"
				/>
				<meta
					property="og:description"
					content="Looking for professional web design in Midland TX? NextWave creates modern websites tailored to grow your business. Let’s build your success—start now!"
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/hero-image.jpg"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com"
				/>
				<link rel="canonical" href="https://nextwavewebstudio.com" />
				<meta name="robots" content="index, follow" />
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "WebPage",
							"name": "Web Design in Midland TX | Boost Revenue with NextWave",
							"description": "NextWave Web Studio offers expert web design in Midland TX. Maximize your ROI with custom websites designed to convert visitors into customers. Contact us today!",
							"url": "https://nextwavewebstudio.com",
							"publisher": {
								"@type": "Organization",
								"name": "NextWave Web Studio",
								"logo": {
									"@type": "ImageObject",
									"url": "https://nextwavewebstudio.com/images/logo.webp"
								}
							}
						}
					`}
				</script>
			</Helmet>

			<Hero />
			<CaseStudy />
			<ServicesSection />
			<Pricing2 />
			<Signup />
			<FeaturedPosts />
		</div>
	);
}

export default Home;
