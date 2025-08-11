// src/Pages/Services/OdessaWebDesignPage.jsx

import React from 'react';
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

const OdessaWebDesignPage = () => {
	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NextWave Web Studio",
              "description": "High-converting web design for Odessa, TX businesses. Built to rank, load fast, and turn visitors into inquiries.",
              "url": "https://nextwavewebstudio.com/web-design-odessa-tx",
              "image": "https://nextwavewebstudio.com/images/services/web-design-odessa.webp",
              "areaServed": {
                "@type": "City",
                "name": "Odessa"
              },
              "telephone": "+1-432-555-0199"
            }
          `}
				</script>

				<title>Web Design in Odessa, TX | NextWave Web Studio</title>
				<meta
					name="description"
					content="Odessa web design that converts. NextWave builds fast, SEO-friendly websites that turn local traffic into qualified leads."
				/>
				<meta
					property="og:title"
					content="Web Design in Odessa, TX | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="Fast, modern, and conversion-focused websites for Odessa businesses. Get a free website strategy session."
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/services/web-design-odessa.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/web-design-odessa-tx"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/web-design-odessa-tx"
				/>
			</Helmet>

			{/* HERO — trustworthy/clean emphasis for web design */}
			<ServiceHero
				eyebrow="Odessa Web Design that Wins More Business"
				headline="Websites Built to Convert — Not Just Look Good"
				subheadline="NextWave designs fast, mobile-first sites that rank locally and turn Odessa visitors into inquiries."
				primaryCta={{
					label: 'Book a Free Website Strategy Session',
					to: '/contact',
				}}
				secondaryCta={{
					label: 'See Odessa Projects',
					to: '/casestudy',
				}}
				stickyMobileCTA
			/>

			{/* PAIN POINTS — common Odessa SMB issues */}
			<ServicePainPoints
				title="Why Most Websites Don’t Generate Leads"
				items={[
					{
						title: 'Slow Load Times',
						description:
							'Every second costs conversions. We optimize performance across devices.',
					},
					{
						title: 'Unclear Messaging',
						description:
							'Visitors should know who you serve, what you do, and how to contact you in seconds.',
					},
					{
						title: 'No Local SEO Foundation',
						description:
							'Without on-page local signals, you miss high-intent Odessa searches.',
					},
				]}
			/>

			{/* SERVICE GRID — what our web builds include */}
			<ServiceGrid
				title="What’s Included in a NextWave Website"
				services={[
					{
						title: 'Conversion-Focused Design',
						description:
							'Clean layouts, clear CTAs, and trust signals to drive inquiries.',
						to: '/web-design-odessa-tx',
					},
					{
						title: 'Local SEO Setup',
						description:
							'On-page optimization and location signals tailored for Odessa searches.',
						to: '/seo-midland-odessa',
					},
					{
						title: 'Speed & Core Web Vitals',
						description:
							'Best practices for fast loads and better rankings.',
						to: '/web-design-odessa-tx',
					},
					{
						title: 'Easy Updates',
						description:
							'Edit content without headaches. We can maintain or hand off cleanly.',
						to: '/web-design-odessa-tx',
					},
				]}
			/>

			{/* TRUST STRIP — local credibility */}
			<ServiceTrustStrip
				title="Trusted by Odessa & West Texas Businesses"
				logos={[
					{ src: '/images/logos/client1.svg', alt: 'Client 1' },
					{ src: '/images/logos/client2.svg', alt: 'Client 2' },
					{ src: '/images/logos/client3.svg', alt: 'Client 3' },
				]}
				testimonials={[
					{
						quote: 'Our new site looks sharp and finally brings in real leads from Odessa.',
						author: 'R. Castillo',
						role: 'Owner',
					},
					{
						quote: 'Mobile speed jumped, calls went up, and customers say it’s easier to contact us.',
						author: 'J. Patel',
						role: 'Manager',
					},
				]}
			/>

			{/* CASE STUDY TEASER — web design outcome */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/odessa-web-redesign.png"
				imageAlt="Odessa web redesign results"
				title="Odessa Redesign That Doubled Inquiries"
				summary="We rebuilt the site with clear service pages, stronger CTAs, and local SEO — inquiries more than doubled within 60 days."
				stats={[
					{ label: 'Mobile Speed', value: '+40pts' },
					{ label: 'Form Submissions', value: '2.1x' },
				]}
				cta={{ label: 'Read Full Case Study', to: '/casestudy' }}
			/>

			{/* CTA BANNER — clear no-brainer */}
			<ServiceCTABanner
				title="Get a Free Website Strategy Session"
				subtitle="We’ll review your current site and map the fastest path to more local leads."
				cta={{ label: 'Request My Session', to: '/contact' }}
			/>

			{/* FAQ — web-specific objections */}
			<ServiceFAQ
				title="Odessa Web Design FAQs"
				faqs={[
					{
						q: 'Can you work with our existing content?',
						a: 'Yes — we’ll keep what’s working, refine what isn’t, and add what’s missing for conversions.',
					},
					{
						q: 'Do you provide copy and photos?',
						a: 'We can handle everything end-to-end or collaborate with your team — your choice.',
					},
					{
						q: 'How long does a typical build take?',
						a: 'Most Odessa sites launch in 3–6 weeks depending on scope and approvals.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Website', to: '/contact' }}
			/>

			{/* MOBILE STICKY CTA */}
			<ServiceStickyCTA
				label="Book a Free Website Strategy Session"
				to="/contact"
			/>
		</>
	);
};

export default OdessaWebDesignPage;
