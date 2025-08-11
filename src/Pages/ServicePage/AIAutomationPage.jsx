// src/Pages/Services/AIAutomationPage.jsx

import React from 'react';
import ServiceHero from '../../Components/ServiceComponents/ServiceHero';
import ServicePainPoints from '../../Components/ServiceComponents/ServicePainPoints';
import ServiceGrid from '../../Components/ServiceComponents/ServiceGrid';
import ServiceTrustStrip from '../../Components/ServiceComponents/ServiceTrustStrip';
import ServiceCaseStudyTeaser from '../../Components/ServiceComponents/ServiceCaseStudyTeaser';
import ServiceCTABanner from '../../Components/ServiceComponents/ServiceCTABanner';
import ServiceFAQ from '../../Components/ServiceComponents/ServiceFAQ';
import ServiceFinalCTA from '../../Components/ServiceComponents/ServiceFinalCTA';
import ServiceStickyCTA from '../../Components/ServiceComponents/ServiceStickyCTA';
import { Helmet } from 'react-helmet-async';

const AIAutomationPage = () => {
	return (
		<>
			<Helmet>
				{/* Structured Data */}
				<script type="application/ld+json">
					{`
                {
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "NextWave Web Studio",
                    "description": "NextWave delivers AI automation solutions that streamline workflows, boost efficiency, and drive measurable ROI for businesses nationwide.",
                    "url": "https://nextwavewebstudio.com/ai-automation",
                    "telephone": "+1-555-555-5555",
                    "image": "https://nextwavewebstudio.com/images/services/ai-automation.webp",
                    "areaServed": {
                        "@type": "Country",
                        "name": "United States"
                    }
                }
                `}
				</script>

				{/* Page Title & Meta */}
				<title>AI Automation Solutions | NextWave Web Studio</title>
				<meta
					name="description"
					content="Cut admin time, respond faster, and scale operations with NextWave's AI automation solutions. Streamline workflows and boost ROI."
				/>

				{/* Open Graph for Social Sharing */}
				<meta
					property="og:title"
					content="AI Automation Solutions | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="Cut admin time, respond faster, and scale operations with NextWave's AI automation solutions. Streamline workflows and boost ROI."
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/services/ai-automation.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/ai-automation"
				/>
				<meta property="og:type" content="website" />

				{/* SEO Directives */}
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/ai-automation"
				/>
			</Helmet>

			{/* HERO */}
			<ServiceHero
				eyebrow="AI Automation for Real Business Growth"
				headline="Cut Admin Time, Respond Faster, and Scale Operations with NextWave Integrations"
				subheadline="Our tailored automation solutions eliminate bottlenecks, improve client response, and free you to focus on growth — without adding headcount."
				primaryCta={{
					label: 'Book a Free Automation Strategy Session',
					to: '/contact',
				}}
				secondaryCta={{
					label: 'See Automation Examples',
					to: '/casestudy',
				}}
				stickyMobileCTA
			/>

			{/* PAIN POINTS */}
			<ServicePainPoints
				title="The Hidden Costs of Doing It All Manually"
				items={[
					{
						title: 'Time-Draining Admin Work',
						description:
							'Manual processes slow your team down, eat into profits, and distract from revenue-generating tasks.',
					},
					{
						title: 'Slow Lead Response',
						description:
							'Minutes matter — slow replies mean lost deals. Automation ensures you’re first to respond, every time.',
					},
					{
						title: 'Inconsistent Client Experience',
						description:
							'Without streamlined systems, customer journeys vary — making it harder to build loyalty.',
					},
				]}
			/>

			{/* SERVICE GRID */}
			<ServiceGrid
				title="NextWave Automation Solutions"
				services={[
					{
						title: 'Lead Intake & Routing',
						description:
							'Automatically capture, score, and send leads to the right place without lifting a finger.',
						to: '/casestudy',
					},
					{
						title: 'Client Onboarding',
						description:
							'Welcome new clients with personalized workflows that handle paperwork, scheduling, and more.',
						to: '/casestudy',
					},
					{
						title: 'Follow-Up & Nurture',
						description:
							'Keep prospects engaged with timed messages, reminders, and targeted offers.',
						to: '/casestudy',
					},
					{
						title: 'Reporting Dashboards',
						description:
							'Real-time metrics so you always know what’s working — and what’s not.',
						to: '/casestudy',
					},
				]}
			/>

			{/* TRUST STRIP */}
			<ServiceTrustStrip
				title="Trusted by Businesses Across Midland–Odessa"
				logos={[
					{ src: '/images/logos/client1.svg', alt: 'Client 1' },
					{ src: '/images/logos/client2.svg', alt: 'Client 2' },
					{ src: '/images/logos/client3.svg', alt: 'Client 3' },
				]}
				testimonials={[
					{
						quote: 'NextWave automated our intake process and freed up 15 hours a week for our sales team.',
						author: 'Sarah M.',
						role: 'Operations Manager',
					},
					{
						quote: 'We went from missing follow-ups to closing deals faster than ever — automation changed everything.',
						author: 'James R.',
						role: 'Business Owner',
					},
				]}
			/>

			{/* CASE STUDY TEASER */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/automation-intake.png"
				imageAlt="Automation workflow preview"
				title="How a Midland Firm Reduced Admin Time by 60%"
				summary="We mapped their sales process, identified bottlenecks, and implemented automations that saved over 20 hours per week."
				stats={[
					{ label: 'Admin Time', value: '-60%' },
					{ label: 'Lead Response', value: '3x Faster' },
				]}
				cta={{ label: 'Read Full Case Study', to: '/casestudy' }}
			/>

			{/* CTA BANNER */}
			<ServiceCTABanner
				title="See Exactly What You Can Automate in 30 Minutes"
				subtitle="Book your free strategy session — walk away with at least 3 custom automation ideas tailored to your business."
				cta={{ label: 'Book My Free Session', to: '/contact' }}
			/>

			{/* FAQ */}
			<ServiceFAQ
				title="AI Automation FAQs"
				faqs={[
					{
						q: 'Do I need to change the tools I’m already using?',
						a: 'Not at all — we design solutions that integrate seamlessly with your current systems.',
					},
					{
						q: 'How quickly can I see results?',
						a: 'Most clients see time savings and improved responsiveness within the first month.',
					},
					{
						q: 'What industries do you specialize in?',
						a: 'We work with service-based businesses, professional firms, and local companies across Midland–Odessa.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Project', to: '/contact' }}
			/>

			{/* STICKY CTA for mobile */}
			<ServiceStickyCTA
				label="Book a Free Automation Session"
				to="/contact"
			/>
		</>
	);
};

export default AIAutomationPage;
