// src/Pages/Services/LocalSEOPage.jsx

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

const LocalSEOPage = () => {
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
              "@type": "ProfessionalService",
              "name": "NextWave Web Studio",
              "description": "Local SEO and Google Business Profile optimization for Midland–Odessa businesses focused on calls, direction requests, and booked jobs.",
              "url": "https://nextwavewebstudio.com/services/local-seo",
              "image": "https://nextwavewebstudio.com/images/services/local-seo.webp",
              "areaServed": { "@type": "City", "name": "Midland–Odessa" },
              "telephone": "+1-432-555-0199"
            }
          `}
				</script>

				<title>
					Local SEO & Google Business Profile Optimization | NextWave
					Web Studio
				</title>
				<meta
					name="description"
					content="Own the map pack in Midland–Odessa. NextWave optimizes your Google Business Profile, reviews, citations, and local pages to drive calls and foot traffic."
				/>
				<meta
					property="og:title"
					content="Local SEO & Google Business Profile Optimization | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="Rank higher locally, win more calls, and turn nearby searches into booked work with NextWave's Local SEO."
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/services/local-seo.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/services/local-seo"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/services/local-seo"
				/>
			</Helmet>

			{/* HERO — calls & bookings first */}
			<ServiceHero
				eyebrow="Be the First Call in Midland–Odessa"
				headline="Local SEO & Business Profile Optimization That Drives Real Inquiries"
				subheadline="We tune your local presence so you show up in the map pack, earn trust with reviews, and turn nearby searches into booked jobs."
				primaryCta={{
					label: 'Request a Free Local SEO Audit',
					to: '/contact',
				}}
				secondaryCta={{ label: 'See Local Wins', to: '/casestudy' }}
				stickyMobileCTA
			/>

			{/* PAIN POINTS — local realities */}
			<ServicePainPoints
				title="Why You’re Not Showing Up (Yet)"
				items={[
					{
						title: 'Incomplete/Incorrect Business Profile',
						description:
							'Missing categories, weak descriptions, and wrong hours push you down the results.',
					},
					{
						title: 'Thin Review Footprint',
						description:
							'Few reviews (or old ones) reduce trust and limit conversions—even if you rank.',
					},
					{
						title: 'NAP & Citation Issues',
						description:
							'Name/Address/Phone inconsistencies confuse both Google and customers.',
					},
				]}
			/>

			{/* SERVICES — concrete local actions */}
			<ServiceGrid
				title="NextWave Local Growth Playbook"
				services={[
					{
						title: 'Google Business Profile Optimization',
						description:
							'Dialed-in categories, services, products, photos, and posting cadence.',
						to: '/services/local-seo',
					},
					{
						title: 'Review & Reputation Engine',
						description:
							'Ethical review growth, response management, and spam dispute guidance.',
						to: '/services/local-seo',
					},
					{
						title: 'Citations & NAP Consistency',
						description:
							'Audit, cleanup, and expansion across major directories and local hubs.',
						to: '/services/local-seo',
					},
					{
						title: 'Local Landing Pages',
						description:
							'City/service pages aligned to how Midland–Odessa customers actually search.',
						to: '/services/local-seo',
					},
				]}
			/>

			{/* TRUST — anonymized, believable outcomes */}
			<ServiceTrustStrip
				title="What Local Businesses Experience"
				logos={[
					{
						src: '/images/business_logos/seductivebox.png',
						alt: 'Client',
					},
					{ src: '/images/business_logos/rap.png', alt: 'Client' },
					{
						src: '/images/business_logos/studio2.png',
						alt: 'Client',
					},
				]}
				testimonials={[
					{
						quote: 'We went from barely visible to steady calls every week. The profile overhaul and review plan made the difference.',
						author: 'Owner',
						role: 'Home Services, Midland',
					},
					{
						quote: 'Clear plan, quick wins, and our maps rankings climbed. We finally show up where our customers are.',
						author: 'Manager',
						role: 'Local Retail, Odessa',
					},
				]}
			/>

			{/* CASE STUDY TEASER — framed around calls & visibility; NDA‑safe */}
			{/* <ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/local-map-pack.png"
				imageAlt="Local map pack visibility"
				title="From Invisible to In-Demand in the Map Pack"
				summary="We corrected profile data, rebuilt citations, and implemented a simple review engine—driving measurable gains in calls and direction requests."
				stats={[
					{ label: 'Local Impressions', value: '+145%' },
					{ label: 'Qualified Calls', value: '+78%' },
				]}
				cta={{ label: 'Read Full Case Study', to: '/casestudy' }}
			/> */}

			<ServiceCaseStudyTeaser
				imageSrc="/images/services/seo.jpg"
				imageAlt="Local map pack visibility"
				title="Fixing a Broken Local Presence"
				summary="We audited a local business's Google profile, corrected outdated contact details, rebuilt missing citations, and added fresh photos—helping them reappear for key local searches."
				stats={[
					{ label: 'Profile Accuracy', value: '100%' },
					{ label: 'Citations Rebuilt', value: '20+' },
				]}
				cta={{
					label: 'See Our Local SEO Process',
					to: '/services/local-seo',
				}}
			/>

			{/* MID CTA — audit as no‑brainer */}
			<ServiceCTABanner
				title="Free Local SEO & Profile Audit"
				subtitle="We’ll show exactly what’s holding you back and the fastest steps to fix it."
				cta={{ label: 'Request My Audit', to: '/contact' }}
			/>

			{/* FAQ — { q, a } format */}
			<ServiceFAQ
				title="Local SEO — FAQs"
				faqs={[
					{
						q: 'How fast can we see movement?',
						a: 'With profile fixes and a review plan, many businesses see early gains within 30–60 days, then compounding improvement.',
					},
					{
						q: 'Do we need a new website?',
						a: 'Not necessarily. A solid site helps; we can still improve visibility with profile and citation work while we tune your pages.',
					},
					{
						q: 'Can you help get more reviews (ethically)?',
						a: 'Yes. We implement compliant, customer-friendly requests and response workflows that build trust over time.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Local SEO Plan', to: '/contact' }}
			/>

			{/* MOBILE-ONLY STICKY CTA */}
			<ServiceStickyCTA
				label="Request Your Free Local SEO Audit"
				to="/contact"
			/>
		</>
	);
};

export default LocalSEOPage;
