// src/Pages/Services/DashboardsPage.jsx

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

const DashboardsPage = () => {
	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NextWave Web Studio",
              "description": "Custom business dashboards and tool integrations that turn scattered data into decisions for Midland–Odessa businesses.",
              "url": "https://nextwavewebstudio.com/services/dashboards",
              "image": "https://nextwavewebstudio.com/images/services/dashboards.webp",
              "areaServed": {
                "@type": "City",
                "name": "Midland–Odessa"
              },
              "telephone": "+1-432-555-0199"
            }
          `}
				</script>

				<title>
					Custom Dashboards & Tool Integrations | NextWave Web Studio
				</title>
				<meta
					name="description"
					content="See the numbers that matter. NextWave builds custom dashboards and integrations so Midland–Odessa teams can act faster and grow smarter."
				/>
				<meta
					property="og:title"
					content="Custom Dashboards & Tool Integrations | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="From lead tracking to revenue KPIs, NextWave connects your tools and visualizes what drives growth."
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/services/dashboards.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/services/dashboards"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/services/dashboards"
				/>
			</Helmet>

			{/* HERO (neutral/slate emphasis; data-forward vibe) */}
			<ServiceHero
				eyebrow="Decisions Powered by Clarity"
				headline="Custom Dashboards & Integrations Built for Your Business"
				subheadline="NextWave connects your systems and visualizes the metrics that matter — so your team knows what to do next, every day."
				primaryCta={{
					label: 'Request a Dashboard Demo',
					to: '/contact',
				}}
				secondaryCta={{ label: 'See Real Outcomes', to: '/casestudy' }}
				stickyMobileCTA
			/>

			{/* PAIN POINTS */}
			<ServicePainPoints
				title="Why Most Teams Fly Blind"
				items={[
					{
						title: 'Scattered Data',
						description:
							'Leads, sales, and operations live in different tools — no single source of truth.',
					},
					{
						title: 'Slow Reporting',
						description:
							'Manual spreadsheets delay decisions and hide problems until it’s too late.',
					},
					{
						title: 'No Actionable KPIs',
						description:
							'Numbers without context don’t drive behavior — teams need clear, daily signals.',
					},
				]}
			/>

			{/* SERVICE GRID */}
			<ServiceGrid
				title="What Your Dashboard Can Do"
				services={[
					{
						title: 'Lead & Pipeline Visibility',
						description:
							'Track sources, speed to lead, and stage conversion in one place.',
						to: '/services/dashboards',
					},
					{
						title: 'Revenue & Forecast KPIs',
						description:
							'Monitor MRR, close rates, and projections to hit targets with confidence.',
						to: '/services/dashboards',
					},
					{
						title: 'Ops & Service Metrics',
						description:
							'SLAs, ticket volume, completion times, and customer satisfaction.',
						to: '/services/dashboards',
					},
					{
						title: 'Executive Scorecards',
						description:
							'Daily/weekly snapshots with only the signals leaders need.',
						to: '/services/dashboards',
					},
				]}
			/>

			{/* TRUST STRIP */}
			<ServiceTrustStrip
				title="Trusted by Teams That Run on Numbers"
				logos={[
					{ src: '/images/logos/client1.svg', alt: 'Client 1' },
					{ src: '/images/logos/client2.svg', alt: 'Client 2' },
					{ src: '/images/logos/client3.svg', alt: 'Client 3' },
				]}
				testimonials={[
					{
						quote: 'We finally stopped guessing. The dashboard tells us exactly where to focus each morning.',
						author: 'C. Nguyen',
						role: 'General Manager',
					},
					{
						quote: 'Reporting time went from hours to seconds — and our weekly meetings are 50% shorter.',
						author: 'T. Lewis',
						role: 'Operations',
					},
				]}
			/>

			{/* CASE STUDY TEASER */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/dashboard-kpis.png"
				imageAlt="Custom dashboard KPI view"
				title="From Spreadsheets to Real-Time KPIs"
				summary="Sales, service, and finance were disconnected. We unified the stack and delivered a role-based dashboard to drive action."
				stats={[
					{ label: 'Reporting Time', value: '-85%' },
					{ label: 'Win Rate', value: '+22%' },
				]}
				cta={{ label: 'Read Full Case Study', to: '/casestudy' }}
			/>

			{/* CTA BANNER */}
			<ServiceCTABanner
				title="See Your Most Important Numbers in One Place"
				subtitle="We’ll map your KPIs and deliver a live demo tailored to your business."
				cta={{ label: 'Request My Demo', to: '/contact' }}
			/>

			{/* FAQ */}
			<ServiceFAQ
				title="Dashboards & Integrations FAQs"
				faqs={[
					{
						q: 'Can you connect to our existing tools?',
						a: 'Yes — we integrate with your current CRM, forms, email, and ops systems, no rip-and-replace required.',
					},
					{
						q: 'How fast can we launch?',
						a: 'A focused MVP dashboard typically launches in 2–4 weeks, with iterations as we learn from usage.',
					},
					{
						q: 'Who will maintain it?',
						a: 'We can maintain and enhance your dashboards, or hand off with documentation and training.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Dashboard', to: '/contact' }}
			/>

			{/* MOBILE STICKY CTA */}
			<ServiceStickyCTA label="Request a Dashboard Demo" to="/contact" />
		</>
	);
};

export default DashboardsPage;
