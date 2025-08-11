import React from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServicePainPoints from '../components/Service/ServicePainPoints';
import ServiceGrid from '../components/Service/ServiceGrid';
import ServiceTrustStrip from '../components/Service/ServiceTrustStrip';
import ServiceCaseStudyTeaser from '../components/Service/ServiceCaseStudyTeaser';
import ServiceCTABanner from '../components/Service/ServiceCTABanner';
import ServiceFAQ from '../components/Service/ServiceFAQ';
import ServiceFinalCTA from '../components/Service/ServiceFinalCTA';
// import ServiceStickyCTA from '../components/Service/ServiceStickyCTA';

const AIAutomationPage = () => (
	<>
		<ServiceHero
			eyebrow="AI That Works While You Sleep"
			headline="AI Automation for Midland–Odessa SMBs"
			subheadline="Cut admin time, respond faster, and scale operations with Make.com + Firebase."
			primaryCta={{
				label: 'Book a Free Automation Consult',
				to: '/book',
			}}
			secondaryCta={{
				label: 'See Automations',
				to: '/services/ai-automation',
			}}
			stickyMobileCTA
		/>

		<ServicePainPoints
			title="Your Ops Shouldn’t Rely on Manual Tasks"
			items={[
				{
					title: 'Manual Data Entry',
					description: 'Replace spreadsheets with automated flows.',
				},
				{
					title: 'Slow Lead Response',
					description: 'Instant routing to CRM + alerts.',
				},
				{
					title: 'Reporting Headaches',
					description: 'Real-time dashboards for decisions.',
				},
			]}
		/>

		<ServiceGrid
			title="What We Automate"
			services={[
				{
					title: 'CRM Automation',
					description: 'Auto-assign, score, and route leads.',
					to: '/services/ai-automation/crm',
				},
				{
					title: 'Email/SMS Flows',
					description: 'Lifecycle journeys that convert.',
					to: '/services/ai-automation/flows',
				},
				{
					title: 'Chatbots',
					description: '24/7 pre-qualification + FAQs.',
					to: '/services/ai-automation/chatbots',
				},
				{
					title: 'Dashboards',
					description: 'Firebase + Make.com visibility.',
					to: '/services/dashboards',
				},
			]}
		/>

		<ServiceTrustStrip
			title="Trusted by West Texas Businesses"
			logos={[
				{ src: '/images/logos/client1.svg', alt: 'Client 1' },
				{ src: '/images/logos/client2.svg', alt: 'Client 2' },
			]}
			testimonials={[
				{
					quote: 'They automated our intake and we tripled response speed.',
					author: 'A. Reyes',
					role: 'Operations',
				},
				{
					quote: 'The dashboard finally gave us reliable numbers.',
					author: 'M. Tran',
					role: 'Owner',
				},
			]}
		/>

		<ServiceCaseStudyTeaser
			imageSrc="/images/case-studies/ai-intake.png"
			title="Intake Automation Saved 20+ Hours/Week"
			summary="We linked forms → CRM → notifications → dashboard, no manual steps."
			stats={[
				{ label: 'Admin Time', value: '-60%' },
				{ label: 'Lead Response', value: '3x faster' },
			]}
			cta={{ label: 'Read Full Case Study', to: '/casestudy/ai-intake' }}
		/>

		<ServiceCTABanner
			title="See What You Can Automate in 30 Minutes"
			subtitle="We’ll map your quickest wins."
			cta={{ label: 'Book My Free Consultation', to: '/book' }}
		/>

		<ServiceFAQ />

		<ServiceFinalCTA
			phone="(432) 555-0199"
			cta={{ label: 'Discuss Your Project', to: '/book' }}
		/>

		{/* <ServiceStickyCTA label="Book Now" to="/book" /> */}
	</>
);

export default AIAutomationPage;
