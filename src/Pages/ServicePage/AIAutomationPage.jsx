// src/Pages/Services/AIAutomationPage.jsx

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

const AIAutomationPage = () => {
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
              "description": "NextWave builds AI-driven automations that eliminate manual work, reconcile data across systems, and create new revenue opportunities for SMBs.",
              "url": "https://nextwavewebstudio.com/ai-automation",
              "image": "https://nextwavewebstudio.com/images/services/ai-automation.webp",
              "areaServed": { "@type": "Country", "name": "United States" },
              "telephone": "+1-432-555-0199"
            }
          `}
				</script>
				<title>AI Automation Solutions | NextWave Web Studio</title>
				<meta
					name="description"
					content="Cut admin time, reconcile messy data, and scale operations with NextWave’s AI automation. Real outcomes: 30 hrs/mo → ~3 min; 50% faster launch; new revenue channels."
				/>
				<meta
					property="og:title"
					content="AI Automation Solutions | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="NextWave automates intake, follow-up, data reconciliation, and reporting—freeing teams and unlocking revenue. Book a free strategy session."
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
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/ai-automation"
				/>
			</Helmet>

			{/* HERO (NextWave-first; outcome-forward; no platform names) */}
			<ServiceHero
				eyebrow="AI Automation for Real-World ROI"
				headline="Cut Admin Time and Unlock New Revenue with NextWave Automations"
				subheadline="We replace repetitive work, reconcile messy data across systems, and systematize follow‑up—so your team moves faster with fewer mistakes."
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

			{/* PAIN → we anchor on manual work, slow follow-up, fragmented data */}
			<ServicePainPoints
				title="What’s Slowing Growth Right Now"
				items={[
					{
						title: 'Manual, Repetitive Tasks',
						description:
							'Hours disappear into copy/paste, spreadsheet work, and status updates—none of which grow revenue.',
					},
					{
						title: 'Slow or Missed Follow‑Ups',
						description:
							'Every minute counts. Without systemized responses and reminders, hot opportunities go cold.',
					},
					{
						title: 'Fragmented, Inaccurate Data',
						description:
							'Multiple tools = conflicting numbers. Decisions stall when data can’t be trusted.',
					},
				]}
			/>

			{/* SERVICES → renamed as proprietary NextWave capabilities */}
			<ServiceGrid
				title="NextWave Automation Capabilities"
				services={[
					{
						title: 'NextWave Data Match Engine',
						description:
							'Automatically reconciles transactions across sources and “finds the truth” in blended data—no manual combing.',
						to: '/casestudy',
					},
					{
						title: 'Lead Intake & Smart Routing',
						description:
							'Capture, qualify, and auto‑assign leads with instant alerts—be first to respond, every time.',
						to: '/casestudy',
					},
					{
						title: 'Lifecycle Messaging & Follow‑Up',
						description:
							'Personalized sequences for outreach, reminders, and nurturing that run reliably in the background.',
						to: '/casestudy',
					},
					{
						title: 'Ops Dashboards & Alerts',
						description:
							'Real‑time KPIs, role‑based views, and change logs so leaders can act in minutes—not weeks.',
						to: '/services/dashboards',
					},
				]}
			/>

			{/* TRUST – keep generic but confident; no brand names; NDA-safe */}
			<ServiceTrustStrip
				title="Built for Teams That Value Speed and Accuracy"
				logos={[
					{ src: '/images/logos/client1.svg', alt: 'Client' },
					{ src: '/images/logos/client2.svg', alt: 'Client' },
					{ src: '/images/logos/client3.svg', alt: 'Client' },
				]}
				testimonials={[
					{
						quote: 'We eliminated hours of manual reconciliation and finally trust our numbers. Decisions are faster and clearer.',
						author: 'Operations Lead',
						role: 'Multi‑Location Enterprise',
					},
					{
						quote: 'Response time dropped, follow‑ups improved, and our team spends time on revenue—not admin.',
						author: 'Owner',
						role: 'Service Business',
					},
				]}
			/>

			{/* CASE TEASER – anonymized, specific metrics (from your experience) */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/case-studies/automation-intake.png"
				imageAlt="Automation workflow preview"
				title="Data Reconciliation: ~30 Hours/Month → ~3 Minutes"
				summary="We implemented a reconciliation flow that ingested transactions from multiple sources, auto‑matched blended records, and produced a trusted report—removing a recurring 20–30 hours of manual work each month."
				stats={[
					{ label: 'Manual Hours', value: '−95%+' },
					{ label: 'Time‑to‑Report', value: 'Minutes' },
				]}
				cta={{ label: 'Explore Automation Examples', to: '/casestudy' }}
			/>

			{/* SECONDARY PROOF (concise outcomes snapshot using “pain” component for visual parity) */}
			<ServicePainPoints
				title="Recent Outcomes from NextWave Automations"
				items={[
					{
						title: '50% Faster Launch than Initial Estimates',
						description:
							'Delivered a production system in under 30 days (original scope 60+), accelerating time‑to‑value.',
					},
					{
						title: 'New Revenue Channel—Zero Extra Headcount',
						description:
							'Automated opportunity identification and outreach created a recurring revenue stream with existing staff.',
					},
					{
						title: 'One FTE Equivalent Unlocked',
						description:
							'Workflow consolidation and automation freed “hundreds of hours annually” across roles.',
					},
				]}
			/>

			{/* CTA BANNER – strong promise, low risk */}
			<ServiceCTABanner
				title="In 30 Minutes, We’ll Map the 3 Fastest Automations for Your Business"
				subtitle="No tech talk—just clear wins and how to implement them. If it’s not valuable, we’ll tell you straight."
				cta={{ label: 'Book My Free Strategy Session', to: '/contact' }}
			/>

			{/* FAQ – address NDA, platform‑agnostic approach, and speed-to-value */}
			<ServiceFAQ
				title="AI Automation — FAQs"
				faqs={[
					{
						q: 'Do we need to switch tools to work with you?',
						a: 'No. We integrate with your existing stack and design automations that meet you where you are.',
					},
					{
						q: 'Can you work under NDA and keep details private?',
						a: 'Yes. We routinely anonymize client data and outcomes while protecting confidential information.',
					},
					{
						q: 'How soon will we see value?',
						a: 'Many wins can be delivered within the first 2–4 weeks—starting with the highest‑leverage tasks.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				phone="(432) 555-0199"
				cta={{ label: 'Discuss Your Automation Plan', to: '/contact' }}
			/>

			{/* MOBILE STICKY CTA */}
			<ServiceStickyCTA
				label="Book a Free Automation Session"
				to="/contact"
			/>
		</>
	);
};

export default AIAutomationPage;
