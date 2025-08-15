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

export default function AIAutomationPage() {
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
            "description": "AI & automation services for everyday businesses—faster replies, fewer missed steps, and lower overhead.",
            "url": "https://nextwavewebstudio.com/services/ai-automation",
            "image": "https://nextwavewebstudio.com/images/services/automation.webp",
            "areaServed": { "@type": "City", "name": "Midland–Odessa" },
            "telephone": "+1-432-555-0199"
          }
        `}
				</script>

				<title>
					AI & Automation for Everyday Businesses | NextWave Web
					Studio
				</title>
				<meta
					name="description"
					content="Answer faster, miss less, and lower overhead with practical AI & automation. We find 2–3 quick wins and get them running fast."
				/>
				<meta
					property="og:title"
					content="AI & Automation for Everyday Businesses | NextWave Web Studio"
				/>
				<meta
					property="og:description"
					content="From lead intake to follow‑ups and admin—let smart systems handle the busywork so your team can focus on customers."
				/>
				<meta
					property="og:image"
					content="https://nextwavewebstudio.com/images/services/automation.webp"
				/>
				<meta
					property="og:url"
					content="https://nextwavewebstudio.com/services/ai-automation"
				/>
				<meta property="og:type" content="website" />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://nextwavewebstudio.com/services/ai-automation"
				/>
			</Helmet>

			{/* HERO — benefit-first */}
			<ServiceHero
				eyebrow="Work Smarter, Not Harder"
				headline="AI & Automation that Answers Faster, Misses Less, and Lowers Overhead"
				subheadline="We spot your quickest wins and set up simple automations that save time from day one—without changing how you do business."
				primaryCta={{
					label: 'Find 2–3 Quick Wins',
					to: zoomLink,
					target: '_blank',
				}}
				secondaryCta={{
					label: 'See Use Cases',
					to: '/case-studies?svc=automation',
				}}
				stickyMobileCTA
			/>

			{/* PAIN POINTS — framed as losses */}
			<ServicePainPoints
				title="Where Time (and Money) Slips Away"
				items={[
					{
						title: 'Slow Response Times',
						description:
							'Leads wait for a reply or get missed entirely—lost bookings and frustrated customers.',
					},
					{
						title: 'Manual Follow‑Ups',
						description:
							'Quotes, no‑shows, and overdue invoices depend on memory—things fall through the cracks.',
					},
					{
						title: 'Repetitive Admin',
						description:
							'Copy‑paste, filing, and status updates eat into service time and payroll.',
					},
				]}
			/>

			{/* Mobile inline CTA (keeps momentum early) */}
			<div className="sm:hidden mt-4">
				<ServiceCTABanner
					title="Free Automation Plan"
					subtitle="We’ll pinpoint 2–3 tasks to automate first."
					cta={{ label: 'Show Me Quick Wins', to: zoomLink }}
				/>
			</div>

			{/* SERVICES — benefit-first, no “learn more” links */}
			<ServiceGrid
				title="NextWave Automation Playbook"
				services={[
					{
						title: 'Lead Intake & Routing',
						description:
							'Every lead gets answered fast—without you babysitting the inbox.',
						details: {
							intro: 'Make it effortless for the right person to jump in first time.',
							bullets: [
								'No lead slips through—calls, forms, and chats in one place',
								'Instant hand‑off to the right teammate',
								'After‑hours auto‑replies keep conversations warm',
								'Calendar hand‑off to reduce back‑and‑forth',
							],
						},
					},
					{
						title: 'Follow‑Ups That Don’t Forget',
						description:
							'Quotes get answered and jobs get scheduled—without manual reminders.',
						details: {
							intro: 'Keep momentum with polite, timely nudges customers appreciate.',
							bullets: [
								'On‑time follow‑ups for quotes & estimates',
								'No‑show rebooking flows',
								'Dormant lead re‑engagement',
								'Seasonal check‑ins to fill slow weeks',
							],
						},
					},
					{
						title: 'Admin & Back‑Office',
						description:
							'Paperwork runs itself—your team serves customers.',
						details: {
							intro: 'Reduce repetitive work while improving accuracy and visibility.',
							bullets: [
								'Auto‑file docs and update job statuses',
								'Clean hand‑offs between tools (CRM, email, spreadsheets)',
								'Light approvals for edge cases (you stay in control)',
								'Simple dashboards to see what’s done',
							],
						},
					},
					{
						title: 'AI Assist for Frontline Teams',
						description:
							'Quality replies in seconds, not minutes—still in your voice.',
						details: {
							intro: 'Speed up routine writing while keeping your tone and judgment.',
							bullets: [
								'Drafts for common questions & service info',
								'Faster quote & scope templates',
								'Friendly reminders with your brand voice',
								'Human‑in‑the‑loop for final send',
							],
						},
					},
				]}
			/>

			{/* TRUST — you can swap logos/testimonials later */}
			<ServiceTrustStrip
				title="Trusted by Busy Local Teams"
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
						quote: 'We stopped losing leads after hours—now every inquiry gets a helpful reply and a next step.',
						author: 'Owner',
						role: 'Home Services',
					},
					{
						quote: 'Our team spends less time chasing paperwork and more time helping customers.',
						author: 'Manager',
						role: 'Retail',
					},
				]}
				logoCell={{ w: 128, h: 64, grayscale: false, dim: false }}
			/>

			{/* CASE STUDY TEASER — ethical, no hard metrics */}
			<ServiceCaseStudyTeaser
				imageSrc="/images/services/ai_automations.jpg"
				imageAlt="Automation workflow overview"
				title="Less Busywork, Faster Replies"
				summary="We mapped the intake bottlenecks, set up simple automations, and added gentle follow‑ups—freeing up team time and improving customer response."
				stats={[
					{ label: 'Manual Steps', value: 'Reduced' },
					{ label: 'Response Time', value: 'Faster' },
				]}
				cta={{
					label: 'Find My Quick Wins',
					to: zoomLink,
				}}
			/>

			{/* MID CTA */}
			<ServiceCTABanner
				title="Get a Free Automation Plan"
				subtitle="See exactly what to automate first for impact this month."
				cta={{ label: 'Plan My First Automations', to: zoomLink }}
			/>

			{/* FAQ — customer-friendly, benefit-first */}
			<ServiceFAQ
				title="AI & Automation — FAQs"
				faqs={[
					{
						q: 'What will this actually do for my business?',
						a: 'Faster replies, fewer missed steps, and less repeat admin. Most owners feel it as time back and fewer “Did we follow up on that?” moments.',
					},
					{
						q: 'How fast can we get results?',
						a: 'We usually start with 2–3 high‑impact tasks. You’ll see time savings and smoother hand‑offs within weeks, sometimes days.',
					},
					{
						q: 'Is this complicated for my team?',
						a: 'No. We keep your current tools and add simple, reliable steps. Your team still approves anything sensitive.',
					},
					{
						q: 'How will I know it’s working?',
						a: 'We track simple checkpoints like faster response times, fewer manual steps, and more completed follow‑ups—and review them with you.',
					},
					{
						q: 'Do I need to change platforms?',
						a: 'Not unless you want to. We integrate with what you already use (email, calendars, CRM, forms) and improve from there.',
					},
				]}
			/>

			{/* FINAL CTA */}
			<ServiceFinalCTA
				className="flex sm:flex-col"
				phone="(432) 555-0199"
				cta={{ label: 'Plan My First Automations', to: zoomLink }}
			/>

			{/* MOBILE-ONLY STICKY CTA */}
			<ServiceStickyCTA label="Find 2–3 Quick Wins" to={zoomLink} />
		</>
	);
}
