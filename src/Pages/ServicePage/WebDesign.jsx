// src/Pages/Services/WebDesignPage.jsx
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

export default function WebDesignPage() {
	const zoomLink =
		'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call';

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
              "description": "Conversion-first web design & development for Midland–Odessa businesses. Fast, accessible, and built to grow with you.",
              "url": "https://nextwavewebstudio.com/services/web-design",
              "image": "https://nextwavewebstudio.com/images/services/web-design.webp",
              "areaServed": { "@type": "City", "name": "Midland–Odessa" },
              "telephone": "+1-432-555-0199"
            }
          `}
				</script>

				<title>Web Design & Development | NextWave Web Studio</title>
				<meta
					name="description"
					content="Conversion‑first, fast, and scalable websites that drive measurable results. UX, performance, and SEO best practices baked in."
				/>
				<meta
					property="og:title"
					content="Web Design & Development | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="Premium web design and development focused on speed, UX, and conversions for Midland–Odessa businesses."
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/services/web-design.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/services/web-design"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/services/web-design"
				/>
			</Helmet>

			{/* HERO */}
			<ServiceHero
				eyebrow="Websites That Convert"
				headline="Web Design & Development Built for Growth"
				subheadline="Clean UX, fast load times, and conversion‑focused pages—designed to win trust and turn visitors into customers."
				primaryCta={{
					label: 'Request a Web Design Proposal',
					to: zoomLink,
					target: '_blank',
				}}
				secondaryCta={{
					label: 'See Web Design Work',
					to: '/case-studies',
				}}
				stickyMobileCTA
			/>

			{/* PAIN POINTS */}
			<ServicePainPoints
				title="Why Your Current Site Isn’t Performing"
				items={[
					{
						title: 'Slow, Outdated, or Hard to Edit',
						description:
							'Bloated themes and old plugins drag performance and make simple updates painful.',
					},
					{
						title: 'Confusing UX & Weak Messaging',
						description:
							'Visitors can’t find what they need, and your value isn’t clear—so they bounce.',
					},
					{
						title: 'Not Optimized for SEO or Mobile',
						description:
							'Poor structure and mobile issues hurt rankings and conversions—especially on the go.',
					},
				]}
			/>

			{/* SERVICES GRID */}
			<ServiceGrid
				title="NextWave Web Design Playbook"
				services={[
					{
						title: 'Strategy, UX & Copy',
						description:
							'Research, wireframes, and conversion‑focused messaging.',
						details: {
							intro: 'We align site structure and messaging to customer intent.',
							bullets: [
								'Audience & intent mapping',
								'Wireframes and user flows',
								'Value prop & page‑level copy',
							],
							cta: {
								label: 'Discuss your project',
								to: '/contact',
							},
						},
					},
					{
						title: 'Performance‑First Development',
						description:
							'Lean code, accessible components, Core Web Vitals.',
						// no link, no modal
					},
					{
						title: 'CMS & Editing',
						description:
							'Content model your team can actually use.',
						to: '/contact', // optional link
					},
				]}
			/>

			{/* TRUST STRIP */}
			<ServiceTrustStrip
				title="Trusted by Growing Local Brands"
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
						quote: 'They translated our goals into a site that finally converts. Faster, clearer, and easier for our team to update.',
						author: 'Owner',
						role: 'Local Service Business',
					},
					{
						quote: 'Launch was smooth and the improvements were immediate—bounce down, leads up. The process was buttoned‑up.',
						author: 'Director',
						role: 'Regional Brand',
					},
				]}
				// optional props to control logo sizing if you adopted the updated component:
				logoCell={{ w: 128, h: 64, grayscale: false, dim: false }}
			/>

			{/* CASE STUDY TEASER (generic/ethical framing) */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/services/web-design.jpg"
				imageAlt="High‑level web redesign results visual"
				title="Clarity, Speed & Trust → More Inquiries"
				summary="A focused redesign simplified navigation, clarified the value proposition, and improved load times—leading to stronger engagement and more qualified form fills."
				stats={[
					{ label: 'Bounce Rate', value: 'Improved' },
					{ label: 'Form Submissions', value: 'Upward Trend' },
				]}
				cta={{
					label: 'Free Consultation',
					to: 'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call',
				}}
			/>

			{/* MID CTA */}
			<ServiceCTABanner
				title="Get a Free Website Review"
				subtitle="We’ll audit UX, speed, and messaging—then share the highest‑leverage improvements."
				cta={{ label: 'Request My Review', to: '/contact' }}
			/>

			{/* FAQ */}
			<ServiceFAQ
				title="Web Design — FAQs"
				faqs={[
					{
						q: 'How much does a website cost?',
						a: 'Every business is different, but we’ll give you a clear, upfront price before we start—no hidden fees. We’ll also tailor a plan to fit your budget and goals.',
					},
					{
						q: 'How long before my new site is live?',
						a: 'Most sites are live in just 3–6 weeks. We handle the heavy lifting so you can stay focused on running your business.',
					},
					{
						q: 'Will this actually help me get more customers?',
						a: 'Yes! We design every page to guide visitors toward contacting you or buying—so your site becomes a sales tool, not just an online brochure.',
					},
					{
						q: 'How much time will I need to spend on this?',
						a: 'We make it easy. We’ll guide you through a simple process, handle the tech, and keep things moving without taking you away from your day-to-day.',
					},
					{
						q: 'Can I trust that my site will look great?',
						a: 'Absolutely. We’ll create a professional, modern design that reflects your brand and builds trust with potential customers.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Website Project', to: zoomLink }}
			/>

			{/* MOBILE STICKY CTA */}
			<ServiceStickyCTA
				label="Request a Web Design Proposal"
				to="/contact"
			/>
		</>
	);
}
