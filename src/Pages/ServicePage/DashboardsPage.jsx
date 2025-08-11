import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceHero from '../../Components/ServiceComponents/ServiceHero';
import ServicePainPoints from '../../Components/ServiceComponents/ServicePainPoints';
import ServiceGrid from '../../Components/ServiceComponents/ServiceGrid';
import ServiceTrustStrip from '../../Components/ServiceComponents/ServiceTrustStrip';
import ServiceCaseStudyTeaser from '../../Components/ServiceComponents/ServiceCaseStudyTeaser';
import ServiceCTABanner from '../../Components/ServiceComponents/ServiceCTABanner';
import ServiceFAQ from '../../Components/ServiceComponents/ServiceFAQ';
import ServiceFinalCTA from '../../Components/ServiceComponents/ServiceFinalCTA';
import ServiceStickyCTA from '../../Components/ServiceComponents/ServiceStickyCTA';

function Dashboards() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Custom Dashboards & Business Intelligence",
              "provider": {
                "@type": "Organization",
                "name": "NextWave Web Studio",
                "url": "https://nextwavewebstudio.com",
                "logo": "https://nextwavewebstudio.com/images/logo.webp",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Midland–Odessa",
                  "addressRegion": "TX",
                  "addressCountry": "US"
                }
              },
              "areaServed": {
                "@type": "Place",
                "name": "Midland–Odessa TX"
              },
              "description": "We design and build fully custom business dashboards to centralize data, track KPIs, and automate workflows for small to medium-sized businesses in Midland–Odessa."
            }
          `}
				</script>
				<title>
					Custom Business Dashboards in Midland–Odessa TX | NextWave
					Web Studio
				</title>
				<meta
					name="description"
					content="Centralize your business data, automate reports, and make faster decisions with custom dashboards by NextWave Web Studio. Serving Midland–Odessa TX businesses."
				/>
				<meta
					property="og:title"
					content="Custom Business Dashboards in Midland–Odessa TX"
				/>
				<meta
					property="og:description"
					content="Stop wasting hours on manual data entry and report prep. Get a dashboard that does it all for you. Built for Midland–Odessa businesses."
				/>
				<meta
					property="og:image"
					content="/images/services/dashboard.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/dashboards"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/dashboards"
				/>
			</Helmet>

			<ServiceHero
				title="Custom Business Dashboards"
				subtitle="Centralize your data, track performance, and automate decision-making."
				buttonText="Book a Free Consultation"
				buttonLink="/contact"
			/>

			<ServicePainPoints
				points={[
					'Wasting hours pulling data from multiple systems.',
					'No single source of truth for KPIs and performance metrics.',
					'Delayed decision-making due to slow reporting.',
					'Opportunities slipping away because no one is tracking them in real time.',
				]}
			/>

			<ServiceGrid
				title="What Our Dashboards Can Do"
				items={[
					{
						title: 'Centralized Data Hub',
						description:
							'Pull in sales, marketing, and operational data into one clean, live view.',
					},
					{
						title: 'Automated Reporting',
						description:
							'Reports generate and send automatically, so you’re always in the loop.',
					},
					{
						title: 'Forecasting & Alerts',
						description:
							'Spot trends early with predictive insights and timely notifications.',
					},
					{
						title: 'Role-Based Access',
						description:
							'Give your team access to exactly what they need—nothing more, nothing less.',
					},
				]}
			/>

			<ServiceTrustStrip
				stats={[
					{ number: '50%', label: 'Faster project delivery' },
					{ number: '100%', label: 'New revenue stream generated' },
					{ number: '100s', label: 'Hours saved annually' },
				]}
			/>

			<ServiceCaseStudyTeaser
				title="Case Study: Centralized Operations Platform"
				description="We built an internal platform for a client that reduced hours of work per week to just seconds. This solution integrated customer data, automated expiration tracking, and added real-time messaging tools — enabling the business to manage customer relationships with unmatched efficiency."
				buttonText="See More Results"
				buttonLink="/case-studies"
			/>

			<ServiceCTABanner
				text="Your data should be working harder for you."
				buttonText="Let's Build Your Dashboard"
				buttonLink="/contact"
			/>

			<ServiceFAQ
				faqs={[
					{
						q: 'Can you integrate with my existing systems?',
						a: 'Yes — we can connect with CRMs, e-commerce platforms, POS systems, and custom databases.',
					},
					{
						q: 'How long does it take to build a dashboard?',
						a: 'Most dashboards are ready in 2–6 weeks depending on complexity.',
					},
					{
						q: 'Do I need technical skills to use it?',
						a: 'No. We design interfaces that are easy for non-technical teams to navigate.',
					},
				]}
			/>

			<ServiceFinalCTA
				title="Stop Guessing. Start Knowing."
				subtitle="Get a dashboard that gives you real-time clarity."
				buttonText="Book Your Free Consultation"
				buttonLink="/contact"
			/>

			<ServiceStickyCTA
				text="Book Your Free Consultation"
				link="/contact"
				mobileOnly={true}
			/>
		</>
	);
}

export default Dashboards;
