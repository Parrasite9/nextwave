// src/Pages/Services/DigitalMarketingPage.jsx

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

const DigitalMarketingPage = () => {
	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NextWave Web Studio",
              "description": "Digital marketing and SEO services that help Midland–Odessa businesses get found, convert more visitors, and grow revenue.",
              "url": "https://nextwavewebstudio.com/services/digital-marketing",
              "image": "https://nextwavewebstudio.com/images/services/digital-marketing.webp",
              "areaServed": {
                "@type": "City",
                "name": "Midland–Odessa"
              },
              "telephone": "+1-432-555-0199"
            }
          `}
				</script>

				<title>Digital Marketing & SEO | NextWave Web Studio</title>
				<meta
					name="description"
					content="Get found and grow with NextWave’s digital marketing & SEO. We drive qualified traffic and conversions for Midland–Odessa businesses."
				/>
				<meta
					property="og:title"
					content="Digital Marketing & SEO | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="NextWave helps Midland–Odessa businesses rank higher, convert better, and grow faster with strategic SEO and digital marketing."
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/services/digital-marketing.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/services/digital-marketing"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/services/digital-marketing"
				/>
			</Helmet>

			{/* HERO — warmer/high-energy emphasis using your palette */}
			<ServiceHero
				eyebrow="Digital Marketing That Actually Moves the Needle"
				headline="Get Found. Get Clicks. Get Clients."
				subheadline="NextWave builds search visibility and high-converting campaigns for Midland–Odessa businesses — turning attention into revenue."
				primaryCta={{
					label: 'Request a Free Marketing Audit',
					to: '/contact',
				}}
				secondaryCta={{ label: 'See Local Results', to: '/casestudy' }}
				stickyMobileCTA
			/>

			{/* PAIN POINTS */}
			<ServicePainPoints
				title="Why Your Marketing Isn’t Converting Yet"
				items={[
					{
						title: 'Low Search Visibility',
						description:
							'If ideal buyers can’t find you, they can’t hire you. We fix discoverability first.',
					},
					{
						title: 'Unfocused Traffic',
						description:
							'The wrong visitors waste ad spend. We align keywords, pages, and offers with intent.',
					},
					{
						title: 'Leaky Conversion Path',
						description:
							'Weak CTAs and slow pages kill leads. We tighten every step from click to contact.',
					},
				]}
			/>

			{/* SERVICE GRID */}
			<ServiceGrid
				title="NextWave Digital Growth System"
				services={[
					{
						title: 'Search Engine Optimization',
						description:
							'Technical fixes, on-page optimization, and content that ranks for revenue keywords.',
						to: '/seo-midland-odessa',
					},
					{
						title: 'Local SEO & Business Profiles',
						description:
							'Map Pack visibility, reviews, and profile optimization for Midland–Odessa searches.',
						to: '/services/local-seo',
					},
					{
						title: 'Paid Traffic Campaigns',
						description:
							'High-intent ads with landing pages engineered to convert.',
						to: '/services/digital-marketing',
					},
					{
						title: 'Conversion Optimization',
						description:
							'A/B testing, page speed, and CTA strategy to turn visits into inquiries.',
						to: '/services/digital-marketing',
					},
				]}
			/>

			{/* TRUST STRIP */}
			<ServiceTrustStrip
				title="Trusted by West Texas Businesses"
				logos={[
					{ src: '/images/logos/client1.svg', alt: 'Client 1' },
					{ src: '/images/logos/client2.svg', alt: 'Client 2' },
					{ src: '/images/logos/client3.svg', alt: 'Client 3' },
				]}
				testimonials={[
					{
						quote: 'NextWave helped us dominate local search and our inbound leads doubled within a quarter.',
						author: 'Kelly D.',
						role: 'Owner',
					},
					{
						quote: 'Our ads finally made sense — fewer clicks, more calls, lower cost per lead.',
						author: 'R. Alvarez',
						role: 'General Manager',
					},
				]}
			/>

			{/* CASE STUDY TEASER */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/seo-local-pack.png"
				imageAlt="Local pack results preview"
				title="From Invisible to Top 3 in the Local Pack"
				summary="We realigned keyword targeting, fixed site structure, and optimized the business profile — resulting in more calls from local buyers."
				stats={[
					{ label: 'Local Impressions', value: '+145%' },
					{ label: 'Inbound Calls', value: '+78%' },
				]}
				cta={{ label: 'Read Full Case Study', to: '/casestudy' }}
			/>

			{/* CTA BANNER — use a bright accent background for energy */}
			<ServiceCTABanner
				title="Get a Free Marketing & SEO Audit"
				subtitle="We’ll show you where you’re losing opportunities — and exactly how to fix it."
				cta={{ label: 'Request My Audit', to: '/contact' }}
			/>

			{/* FAQ */}
			<ServiceFAQ
				title="Digital Marketing & SEO FAQs"
				faqs={[
					{
						q: 'How long until I see SEO results?',
						a: 'Most clients see early movement in 4–8 weeks, with meaningful gains by 3–6 months depending on competition.',
					},
					{
						q: 'Can you work with our existing site?',
						a: 'Yes. We can optimize your current site or build high-converting landing pages without a full redesign.',
					},
					{
						q: 'Do you handle ads too?',
						a: 'Yes. We run targeted campaigns and link them to pages designed to convert — so spend works harder.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Project', to: '/contact' }}
			/>

			{/* MOBILE STICKY CTA */}
			<ServiceStickyCTA
				label="Request Your Free Marketing Audit"
				to="/contact"
			/>
		</>
	);
};

export default DigitalMarketingPage;
