// src/Pages/Services/LocalSEOPage.jsx

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

const LocalSEOPage = () => {
	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NextWave Web Studio",
              "description": "Local SEO and Google Business Profile optimization to help Midland–Odessa businesses dominate local search and get more calls.",
              "url": "https://nextwavewebstudio.com/services/local-seo",
              "image": "https://nextwavewebstudio.com/images/services/local-seo.webp",
              "areaServed": {
                "@type": "City",
                "name": "Midland–Odessa"
              },
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
					content="NextWave helps Midland–Odessa businesses win local search with optimized Google Business Profiles, reviews, and map-pack rankings."
				/>
				<meta
					property="og:title"
					content="Local SEO & Google Business Profile Optimization | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="Rank higher in the map pack, get more calls, and grow locally. NextWave’s Local SEO services are built for Midland–Odessa businesses."
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

			{/* HERO */}
			<ServiceHero
				eyebrow="Local SEO That Owns the Map Pack"
				headline="Be the First Call in Your Area"
				subheadline="When customers search in Midland–Odessa, they see the top three map results first. We make sure you’re one of them — and getting the calls."
				primaryCta={{
					label: 'Request a Free Local SEO Audit',
					to: '/contact',
				}}
				secondaryCta={{ label: 'See Our Local Wins', to: '/casestudy' }}
				stickyMobileCTA
			/>

			{/* PAIN POINTS */}
			<ServicePainPoints
				title="Why Local Businesses Struggle to Rank"
				items={[
					{
						title: 'Incomplete Business Profiles',
						description:
							'Missing hours, categories, or descriptions can drop you out of the top results.',
					},
					{
						title: 'Weak or Inconsistent Reviews',
						description:
							'Low star ratings and few reviews hurt trust — and ranking potential.',
					},
					{
						title: 'NAP Inconsistencies',
						description:
							'Name, address, and phone number mismatches confuse Google and customers.',
					},
				]}
			/>

			{/* SERVICE GRID */}
			<ServiceGrid
				title="Our Local SEO Playbook"
				services={[
					{
						title: 'Google Business Profile Optimization',
						description:
							'Every field perfected for maximum visibility and trust.',
						to: '/services/local-seo',
					},
					{
						title: 'Review & Reputation Management',
						description:
							'Get more 5-star reviews and respond to feedback quickly.',
						to: '/services/local-seo',
					},
					{
						title: 'Citation Building & Cleanup',
						description:
							'Correct and expand your presence across all major local directories.',
						to: '/services/local-seo',
					},
					{
						title: 'Local Content & Landing Pages',
						description:
							'Targeted pages that capture city-specific and service-specific searches.',
						to: '/services/local-seo',
					},
				]}
			/>

			{/* TRUST STRIP */}
			<ServiceTrustStrip
				title="Trusted by Local Leaders"
				logos={[
					{ src: '/images/logos/client1.svg', alt: 'Client 1' },
					{ src: '/images/logos/client2.svg', alt: 'Client 2' },
					{ src: '/images/logos/client3.svg', alt: 'Client 3' },
				]}
				testimonials={[
					{
						quote: 'Our business went from invisible to showing up in the top 3 local results in under 90 days.',
						author: 'D. Harper',
						role: 'Owner',
					},
					{
						quote: 'The calls started coming in steadily after they fixed our business profile and reviews.',
						author: 'M. Sanchez',
						role: 'General Manager',
					},
				]}
			/>

			{/* CASE STUDY TEASER */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/local-map-pack.png"
				imageAlt="Map pack ranking results"
				title="From Nowhere to Everywhere in Local Search"
				summary="Optimized a Midland business profile, fixed NAP citations, and grew 5-star reviews — resulting in a surge of local calls."
				stats={[
					{ label: 'Map Pack Visibility', value: '+210%' },
					{ label: 'Inbound Calls', value: '+95%' },
				]}
				cta={{ label: 'Read Full Case Study', to: '/casestudy' }}
			/>

			{/* CTA BANNER */}
			<ServiceCTABanner
				title="Get a Free Local SEO & Map Pack Audit"
				subtitle="We’ll show you exactly how to outrank your competitors locally."
				cta={{ label: 'Request My Audit', to: '/contact' }}
			/>

			{/* FAQ */}
			<ServiceFAQ
				title="Local SEO FAQs"
				faqs={[
					{
						q: 'How long does it take to rank in the map pack?',
						a: 'With proper optimization and review growth, many clients see movement within 30–60 days.',
					},
					{
						q: 'Do I need a website to rank locally?',
						a: 'A site helps tremendously, but we can still improve your profile visibility without one.',
					},
					{
						q: 'Will you manage reviews for us?',
						a: 'Yes. We set up systems to encourage positive reviews and monitor your reputation.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Local SEO Plan', to: '/contact' }}
			/>

			{/* MOBILE STICKY CTA */}
			<ServiceStickyCTA
				label="Request Your Free Local SEO Audit"
				to="/contact"
			/>
		</>
	);
};

export default LocalSEOPage;
