// src/Pages/Services/DigitalMarketingPage.jsx

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

const DigitalMarketingPage = () => {
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
              "description": "Digital marketing & SEO engineered for lead generation and measurable ROI for Midland–Odessa small businesses.",
              "url": "https://nextwavewebstudio.com/services/digital-marketing",
              "image": "https://nextwavewebstudio.com/images/services/digital-marketing.webp",
              "areaServed": { "@type": "City", "name": "Midland–Odessa" },
              "telephone": "+1-432-555-0199"
            }
          `}
				</script>

				<title>
					Digital Marketing & SEO for Leads | NextWave Web Studio
				</title>
				<meta
					name="description"
					content="Get found and convert more with NextWave’s ROI‑tracked SEO, local SEO, and campaigns for Midland–Odessa businesses. Book a free marketing audit."
				/>
				<meta
					property="og:title"
					content="Digital Marketing & SEO for Leads | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="Lead generation over vanity metrics. NextWave aligns SEO, local, and campaigns to revenue—tracked end‑to‑end."
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

			{/* HERO — lead gen + ROI framing */}
			<ServiceHero
				eyebrow="Lead Generation Over Vanity Metrics"
				headline="Digital Marketing & SEO That Turns Clicks Into Clients"
				subheadline="We align search visibility, landing pages, and follow‑up so you can track revenue—not just traffic."
				primaryCta={{
					label: 'Request a Free Marketing & SEO Audit',
					to: '/contact',
				}}
				secondaryCta={{ label: 'See Local Results', to: '/casestudy' }}
				stickyMobileCTA
			/>

			{/* PAIN POINTS — why marketing underperforms */}
			<ServicePainPoints
				title="Why Most Marketing Doesn’t Move the Needle"
				items={[
					{
						title: 'Traffic With No Intent',
						description:
							'Wrong keywords attract the wrong visitors. We target buying intent first.',
					},
					{
						title: 'Leaky Conversion Path',
						description:
							'Slow pages + weak CTAs = money left on the table. We tighten the journey.',
					},
					{
						title: 'No ROI Visibility',
						description:
							'If you can’t see what generated the lead, you can’t scale it. We track end‑to‑end.',
					},
				]}
			/>

			{/* SERVICE GRID — ROI-centric offers */}
			<ServiceGrid
				title="NextWave Growth System"
				services={[
					{
						title: 'Revenue‑Keyword SEO',
						description:
							'On‑page, internal links, and content built around buyer intent—not vanity terms.',
						to: '/services/digital-marketing',
					},
					{
						title: 'Local SEO & Profiles',
						description:
							'Map Pack optimization, reviews, and city/service pages for Midland–Odessa searches.',
						to: '/services/local-seo',
					},
					{
						title: 'High‑Intent Landing Pages',
						description:
							'Fast, focused pages with clear CTAs to turn ad/search clicks into inquiries.',
						to: '/services/digital-marketing',
					},
					{
						title: 'Attribution & ROI Tracking',
						description:
							'From click to call to closed—so you know exactly what to scale.',
						to: '/services/digital-marketing',
					},
				]}
			/>

			{/* TRUST STRIP — anonymized, believable outcomes */}
			<ServiceTrustStrip
				title="What Businesses Like Yours Experience"
				logos={[
					{ src: '/images/logos/client1.svg', alt: 'Client' },
					{ src: '/images/logos/client2.svg', alt: 'Client' },
					{ src: '/images/logos/client3.svg', alt: 'Client' },
				]}
				testimonials={[
					{
						quote: 'They refocused our keywords, rebuilt our landing page, and qualified inquiries jumped—same spend, better leads.',
						author: 'General Manager',
						role: 'Home Services',
					},
					{
						quote: 'We finally see what’s working and what isn’t. Easy decisions, better results.',
						author: 'Owner',
						role: 'Local SMB',
					},
				]}
			/>

			{/* CASE STUDY TEASER — framed to emphasize ROI tracking */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/seo-local-pack.png"
				imageAlt="Local visibility improvements"
				title="From Invisible to Booked: Local Visibility That Converts"
				summary="We aligned search intent, fixed the conversion path, and implemented ROI tracking—so every channel could be optimized against revenue, not just clicks."
				stats={[
					{ label: 'Local Impressions', value: '+145%' },
					{ label: 'Qualified Calls', value: '+78%' },
				]}
				cta={{ label: 'Read Full Case Study', to: '/casestudy' }}
			/>

			{/* MID OFFER — no-brainer audit */}
			<ServiceCTABanner
				title="Free Marketing & SEO Audit"
				subtitle="We’ll show you exactly where leads are leaking—and how to fix it fast."
				cta={{ label: 'Request My Audit', to: '/contact' }}
			/>

			{/* FAQ — use q/a keys */}
			<ServiceFAQ
				title="Digital Marketing & SEO — FAQs"
				faqs={[
					{
						q: 'Can you work with our existing website?',
						a: 'Yes. We can optimize your current site or deploy focused landing pages without a full rebuild.',
					},
					{
						q: 'How do you track ROI?',
						a: 'We connect campaigns to calls/forms, then map those to outcomes so you can see cost per qualified lead and cost per acquisition.',
					},
					{
						q: 'How fast will we see results?',
						a: 'Paid + landing pages can improve in days; SEO momentum typically builds over 4–12 weeks depending on competition.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Growth Plan', to: '/contact' }}
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
