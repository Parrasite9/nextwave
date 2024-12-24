import { generateSlug } from '../../Globals/Utils';

const CaseStudyData = [
	// WAYOUT KIDS
	{
		poster: '/images/casestudy/wayoutkids/wayout_mockup.webp',
		lgPoster: '/images/casestudy/wayoutkids/wayoutlg.webp',
		image: [
			{ image: '/images/casestudy/wayoutkids/Desktop/Home_D1.webp' },
			{ image: '/images/casestudy/wayoutkids/Desktop/Home_D2.webp' },
			{ image: '/images/casestudy/wayoutkids/Desktop/Home_D3.webp' },
			{ image: '/images/casestudy/wayoutkids/Desktop/Home_D4.webp' },
		],
		colors: {
			primary: '#FFA500', // Example color inspired by children's themes
			secondary: '#0047FF', // Complementary vibrant green
			ctaButton: '#28A745',
			ctaButtonText: '#FFFFFF',
		},
		seo: 'nonprofit website design, children’s charity site, donation website redesign',
		name: 'WayOut Kids',
		shortDescription:
			"See how we revitalized WayOut Kids' online presence with a bold homepage redesign that boosts credibility and drives donations.",
		timeline: '2 weeks',
		slug: generateSlug('WayOut Kids'),
		title: 'Nonprofit Website Redesign | WayOut Kids Homepage Design',
		teaser: 'See how our nonprofit website design for WayOut Kids transformed their homepage, boosting credibility and driving donations.',
		price: '$$',
		intro: 'WayOut Kids, a nonprofit organization, needed a more professional, clean, and appealing homepage to support their mission and encourage donations. Previously, their website was cluttered and unfocused, lacking the impact needed for a strong online presence.',
		role: 'Handled all aspects of design, development, and deployment as the sole developer and designer.',
		hasVideo: false,
		videoPath: '',

		problem: {
			header: 'Outdated and Cluttered Website',
			headerDetail:
				'The original WayOut Kids website was visually unappealing, overly cluttered, and didn’t effectively communicate the organization’s goals, diminishing its professional image.',
			subheaders: [
				{
					subheader: 'Unprofessional and Crowded Layout',
					subHeaderDetail:
						'The previous design had too much content crammed into one space, making it hard for users to navigate and diminishing the nonprofit’s credibility.',
				},
				{
					subheader: 'Lack of Clear CTAs and Focus',
					subHeaderDetail:
						'With no clear layout or calls-to-action, the website failed to direct users toward supporting the mission, donating, or getting involved.',
					mediaType: 'image',
					mediaUrl:
						'/images/casestudy/wayoutkids/CaseStudy/problem.webp',
				},
			],
		},

		goal: {
			header: 'Create a Clean, Professional Homepage to Drive Support',
			headerDetail:
				'The redesign aimed to create a professional, organized homepage that would increase donations and support by effectively communicating WayOut Kids’ mission and impact.',
			subheaders: [
				{
					subheader: 'Make the Mission and Goals Clear',
					subHeaderDetail:
						'Create a focused layout with bold visual elements to showcase the organization’s purpose, values, and impact.',
				},
				{
					subheader: 'Encourage Donations and Involvement',
					subHeaderDetail:
						'Add clear, prominent call-to-action buttons for donations and volunteer opportunities.',
				},
				{
					subheader: 'Enhance Credibility',
					subHeaderDetail:
						'Establish a professional design that reflects WayOut Kids’ commitment and credibility as a children’s nonprofit.',
				},
			],
		},

		impact: {
			header: 'Prototype Showcased Potential for Professional Image',
			headerDetail:
				'The redesign prototype, though not yet deployed, demonstrated a professional and engaging look for the nonprofit, supporting donations and credibility.',
			subheaders: [
				{
					subheader: 'Enhanced Visual Appeal',
					subHeaderDetail:
						'The new design offered a clean, engaging layout that would provide WayOut Kids with a more credible and appealing online presence.',
				},
				{
					subheader: 'Improved Usability',
					subHeaderDetail:
						'A simplified, organized layout improved usability, making it easier for visitors to find key information and donate.',
				},
				{
					subheader: 'Stronger Call-to-Action Placement',
					subHeaderDetail:
						'Clear, prominent CTAs for donations and support were strategically placed to drive visitor engagement.',
				},
				{
					subheader: 'Brand Cohesion',
					subHeaderDetail:
						'The prototype introduced a vibrant, cohesive color scheme aligned with the child-focused mission of the nonprofit.',
				},
				{
					subheader: 'Feedback-Ready Foundation',
					subHeaderDetail:
						'Designed to receive future feedback, the prototype was structured to easily incorporate stakeholder input and user testing.',
					mediaType: 'image',
					mediaUrl:
						'/images/casestudy/wayoutkids/CaseStudy/hero.webp',
				},
			],
		},

		ideation: {
			header: 'Colorful, Child-Centric Design Inspired by School Memories',
			headerDetail:
				'The ideation phase focused on a playful, colorful layout inspired by childhood school memories, such as multi-colored school supplies, aligning with the mission’s child focus.',
			mediaType: 'image',
			mediaUrl: '/images/casestudy/wayoutkids/CaseStudy/earlyDesign.webp',
			subheaders: [
				{
					subheader: 'Multi-Colored Layout',
					subHeaderDetail:
						'Designed sections in bright colors reminiscent of childhood, giving the site a warm, playful look suitable for a child-focused nonprofit.',
				},
				{
					subheader: 'Bold Hero Section with Quick Links',
					subHeaderDetail:
						'Created a bold hero section displaying main areas of involvement with clickable CTAs, offering “quick links” to guide users based on interest.',
				},
			],
		},

		testing: {
			header: 'Presentation to Nonprofit Stakeholders',
			headerDetail:
				'Although formal testing was not conducted, the prototype was presented to the nonprofit, who confirmed that it aligned with their vision for a bold, engaging homepage.',
			subheaders: [
				{
					subheader: 'Stakeholder Feedback',
					subHeaderDetail:
						'The nonprofit expressed that the bold design captured the professional and engaging look they had in mind for WayOut Kids.',
				},
			],
		},

		final: {
			header: 'Bold and Clean Homepage Design',
			headerDetail:
				'The final homepage prototype delivered a visually organized, bold design that aligned with the organization’s mission and engaged visitors with clear calls-to-action.',
			mediaType: 'image',
			mediaUrl: '/images/casestudy/wayoutkids/CaseStudy/finalDesign.webp',
			subheaders: [
				{
					subheader: 'Complete Visual Overhaul',
					subHeaderDetail:
						'The redesign replaced clutter with a clean, professional look that supported WayOut Kids’ mission and objectives.',
					mediaType: 'video',
					mediaUrl:
						'/images/casestudy/wayoutkids/CaseStudy/final.mp4',
				},
				{
					subheader: 'Dynamic Events Section',
					subHeaderDetail:
						'Added a dynamic events section displaying the closest upcoming events to keep the content relevant and engaging.',
				},
			],
		},

		development: {
			header: 'React and AWS Cloud for Core Development',
			headerDetail:
				'The homepage prototype was developed with React and deployed on AWS Cloud, providing a scalable, responsive design and accessible platform.',
			subheaders: [
				{
					subheader: 'React for a Responsive Frontend',
					subHeaderDetail:
						'Utilized React to create a fast, responsive, and dynamic interface suitable for engaging a diverse audience.',
				},
				{
					subheader: 'AWS Cloud Deployment',
					subHeaderDetail:
						'Deployed on AWS Cloud for secure, scalable access and easy sharing for stakeholder presentations.',
				},
			],
		},

		future: {
			header: 'Potential for Full Site Development',
			headerDetail:
				'If the project proceeds, the next steps would include completing the full site with event information, real images, and additional service details.',
			subheaders: [],
		},
	},

	// SEDUCTIVEBOX
	{
		poster: '/images/casestudy/seductivebox/seductivebox_mockup.webp',
		lgPoster: '/images/casestudy/seductivebox/seductiveboxlg.webp',
		image: [
			{
				image: '/images/casestudy/seductivebox/Desktop/Home_D1.webp',
			},
			{
				image: '/images/casestudy/seductivebox/Desktop/Home_D2.webp',
			},
			{
				image: '/images/casestudy/seductivebox/Desktop/Home_D3.webp',
			},
			{
				image: '/images/casestudy/seductivebox/Desktop/Home_D4.webp',
			},
		],
		colors: {
			primary: '#a100ff', // Your primary color
			secondary: '#ff00c3', // Your secondary color
			ctaButton: '#ff00c3',
			ctaButtonText: '#f2f2f2',
			// priceTimeBackground: '#333',
			customGradient: 'linear-gradient(36deg, #a100ff, #ff00c3 62%)',
			white: '#f2f2f2',
			black: '#333',
		},
		seo: 'subscription website design, lingerie subscription redesign, e-commerce site redesign',
		name: 'SeductiveBox',
		shortDescription:
			"Discover how our female-focused redesign skyrocketed SeductiveBox's revenue by 733%, enhancing engagement and conversions.",
		timeline: '4 Weeks',
		slug: generateSlug('SeductiveBox'),
		title: 'Subscription Website Redesign | 733% Revenue Growth with SeductiveBox',
		teaser: 'Discover how our subscription website redesign for SeductiveBox increased revenue by 733%, improving engagement and conversions. Learn more today!',
		price: '$$',
		intro: 'SeductiveBox was a lingerie subscription service facing major conversion challenges. Their website was not effectively communicating with their target female audience, which led to low subscription rates. We set out to revamp the user experience, leading to incredible results in just 4 weeks.',
		role: 'We led the entire project, handling both the design and development. The redesign was focused on creating a seamless and intuitive user experience for the target audience. We used React for the frontend and deployed the final product on AWS Cloud. Heatmap tracking allowed us to optimize the user journey further.',
		hasVideo: false,
		videoPath: '',
		problem: {
			header: 'SeductiveBox\’s website was not converting traffic into subscriptions effectively.',
			headerDetail:
				'Despite attracting consistent web traffic, SeductiveBox faced a significant issue with converting that traffic into paid subscriptions. The website\’s messaging and design were not resonating with the target female audience, leading to a high bounce rate and abandoned checkouts.',
			subheaders: [
				{
					subheader: 'The design was geared toward a male audience.',
					subHeaderDetail:
						'SeductiveBox\’s original design featured visuals and language that appealed more to male customers, which missed the mark with its core female demographic. This misalignment resulted in a disconnect between the brand\’s identity and its target customers.',
				},
				{
					subheader:
						'The checkout process was complex and frustrating.',
					subHeaderDetail:
						'The checkout flow involved multiple unnecessary steps that created friction for users. There was no clear call-to-action or indication that the process was secure and easy, which led to frustration and ultimately, abandoned carts.',
				},
			],
		},
		goal: {
			header: 'Create a seamless, female-focused website to drive conversions.',
			headerDetail:
				'Our primary goal was to align the brand\’s communication and user experience with its target audience—women interested in lingerie subscription services. This required a complete redesign of the website\’s visuals, content, and checkout flow.',
			subheaders: [
				{
					subheader: 'Align the website with the female audience.',
					subHeaderDetail:
						'The previous design failed to speak to women. We aimed to overhaul the site\’s messaging and imagery to make it more relatable and appealing to the core demographic.',
				},
				{
					subheader: 'Streamline the checkout process.',
					subHeaderDetail:
						'We focused on making the checkout process as easy and intuitive as possible by reducing unnecessary steps and clearly communicating the benefits of subscription.',
				},
				{
					subheader: 'Boost conversion rates and engagement.',
					subHeaderDetail:
						'The ultimate goal was to increase the conversion rate by removing friction and creating a smooth, enjoyable user experience.',
				},
			],
		},
		impact: {
			header: 'A 733% increase in monthly revenue.',
			headerDetail:
				'The results of the redesign were immediately evident, as SeductiveBox saw a 733% increase in monthly revenue due to improved user engagement and conversion rates.',
			mediaType: 'image',
			mediaUrl: '/images/casestudy/seductivebox/CaseStudy/impact.webp',
			// image: true,
			// mediaType: '/images/casestudy/seductivebox/CaseStudy/impact.webp',
			subheaders: [
				{
					subheader: 'Significant boost in conversions.',
					subHeaderDetail:
						'The site\’s enhanced messaging, visuals, and simplified checkout flow resulted in a significant increase in paid subscriptions.',
				},
				{
					subheader: 'Improved brand communication.',
					subHeaderDetail:
						'The new design aligned perfectly with the brand\’s core audience, increasing user trust and engagement with the site.',
				},
			],
		},
		ideation: {
			header: 'Rethinking how SeductiveBox communicates with its audience.',
			headerDetail:
				'We started the redesign process by evaluating other successful subscription services that spoke to female audiences. This allowed us to gain insights into what worked and where the current site was falling short.',
			subheaders: [
				{
					subheader: 'Understanding the target audience.',
					subHeaderDetail:
						'We researched how female users interacted with similar brands and identified key areas where the original website\’s tone and design were misaligned.',
				},
				{
					subheader: 'Exploring new design directions.',
					subHeaderDetail:
						'We brainstormed multiple ideas to create a more inviting, intuitive design, with a focus on visual appeal and simplicity in user navigation.',
				},
			],
		},
		testing: {
			header: 'Heatmap tracking for user behavior insights.',
			headerDetail:
				'We implemented heatmap tracking to monitor user interactions and gather data on pain points in the user journey. This data allowed us to fine-tune the design before launch.',
			subheaders: [
				{
					subheader: 'Identifying friction points.',
					subHeaderDetail:
						'The heatmap showed us areas where users hesitated or dropped off during checkout, helping us streamline the process further.',
				},
				{
					subheader: 'Validating the new design.',
					subHeaderDetail:
						'The data from user tests confirmed that the new design was more engaging and intuitive, which validated our design decisions.',
				},
			],
		},
		final: {
			header: 'Exceeding expectations with a seamless redesign.',
			headerDetail:
				'The final product was a complete transformation from the original site, with improved navigation, stronger communication, and a streamlined user experience that exceeded the client\’s expectations.',
			subheaders: [
				{
					subheader: 'A design that resonates with users.',
					subHeaderDetail:
						'The new design spoke directly to the core female audience, with imagery and messaging that aligned with their needs and preferences.',
				},
				{
					subheader: 'A frictionless checkout process.',
					subHeaderDetail:
						'The new checkout flow was simplified and designed for ease of use, resulting in fewer abandoned carts and more successful subscriptions.',
				},
			],
		},
		development: {
			header: 'Building a robust, responsive website with React and AWS.',
			headerDetail:
				'We developed the redesigned website using React, ensuring it was responsive across devices. AWS Cloud was used for deployment to provide scalability as the business grew.',
			subheaders: [
				{
					subheader: 'Responsive design for all devices.',
					subHeaderDetail:
						'The site was built to provide an optimal user experience on any device, whether mobile, tablet, or desktop.',
				},
				{
					subheader: 'AWS deployment for scalability.',
					subHeaderDetail:
						'Deploying on AWS allowed the site to handle increased traffic seamlessly, with room for future growth as the business scaled.',
				},
			],
		},
		future: {
			header: 'SeductiveBox is no longer in business.',
			headerDetail:
				'Although SeductiveBox is no longer operational, the website redesign played a critical role in helping the company scale during its time of operation.',
			subheaders: [],
		},
	},

	// STUDIO NO 1
	{
		poster: '/images/casestudy/studioone/studioone_mockup.webp',
		lgPoster: '/images/casestudy/studioone/studioonelg.webp',
		image: [
			{
				image: '/images/casestudy/studioone/Desktop/Home_D1.webp',
			},
			{
				image: '/images/casestudy/studioone/Desktop/Home_D2.webp',
			},
			{
				image: '/images/casestudy/studioone/Desktop/Home_D3.webp',
			},
			{
				image: '/images/casestudy/studioone/Desktop/Home_D4.webp',
			},
		],
		colors: {
			primary: '#163c5d', // Your primary color
			secondary: '#0074b7', // Your secondary color
			ctaButton: '#163c5d',
			ctaButtonText: '#f2f2f2',
			// priceTimeBackground: '#333',
		},
		seo: 'salon website design, booking platform for salons, Studio No. 1 website',
		name: 'Studio No. 1',
		shortDescription:
			"Learn how we unified Studio No. 1's booking system into a seamless platform, simplifying client bookings and strengthening their brand.",
		timeline: '2 weeks',
		slug: generateSlug('Studio No 1'),
		title: 'Salon Website Design | Unified Booking Platform for Studio No. 1',
		teaser: 'Our salon website design for Studio No. 1 streamlined booking and created a cohesive brand, enhancing the client experience. See the results now!',
		price: '$$',
		intro: 'Studio No. 1, a beauty salon housing independent contractors, needed a unified platform to streamline the booking process and create a professional, team-oriented online presence.',
		role: 'We were responsible for the full project design and development.',
		hasVideo: false,
		videoPath: '',
		problem: {
			header: 'Decentralized Booking & Lack of Team Cohesion',
			headerDetail:
				'Studio No. 1 had 15+ independent booking sites for each contractor, creating confusion for clients and making it difficult to maintain a professional, cohesive online presence.',
			subheaders: [
				{
					subheader: 'Multiple Independent Booking Sites',
					subHeaderDetail:
						'Each contractor at Studio No. 1 managed their own booking system, making it hard for clients to locate and book services in one place.',
				},
				{
					subheader: 'Inconsistent Branding',
					subHeaderDetail:
						'Without a unified site, the brand appeared fragmented, reducing the salon’s overall professional image.',
				},
			],
		},

		goal: {
			header: 'Build a Centralized Booking Hub for All Team Members',
			headerDetail:
				'The primary goal was to feature all team members prominently and allow clients to easily book services from their preferred contractor or discover new services from other team members.',
			subheaders: [
				{
					subheader: 'Feature All Contractors in One Place',
					subHeaderDetail:
						'Create a website where clients can view all team members and their services without navigating away from the main site.',
				},
				{
					subheader: 'Simplify Booking Process',
					subHeaderDetail:
						'Redirect clients seamlessly to each contractor’s personal booking page, making the experience smooth and efficient.',
				},
				{
					subheader: 'Foster a Unified Brand',
					subHeaderDetail:
						'Promote a professional image by representing all contractors under the Studio No. 1 brand on a single platform.',
				},
			],
		},

		impact: {
			header: 'Enhanced Client Experience & Improved Professional Image',
			headerDetail:
				'The new platform improved client satisfaction by making it easy to book with preferred contractors and strengthened Studio No. 1’s brand image.',
			subheaders: [
				{
					subheader: 'Increased Booking Efficiency',
					subHeaderDetail:
						'Clients now have quick access to all team members, streamlining their booking process and improving overall satisfaction.',
				},
				{
					subheader: 'Strengthened Brand Cohesion',
					subHeaderDetail:
						'Studio No. 1’s unified platform presented a cohesive, professional image that represented all contractors as part of a team.',
				},
			],
		},

		ideation: {
			header: 'Developing the Platform Layout & Features',
			headerDetail:
				'Early planning focused on how to organize each contractor’s page and ensure an intuitive user experience that emphasized Studio No. 1’s team approach.',
			mediaType: 'image',
			mediaUrl: '/images/casestudy/studioone/CaseStudy/earlyDesign.webp',
			subheaders: [
				{
					subheader: 'Centralized Navigation',
					subHeaderDetail:
						'Designed navigation so users could find each contractor quickly from the homepage without multiple clicks.',
					mediaType: 'video',
					mediaUrl:
						'/images/casestudy/studioone/CaseStudy/ideation.mp4',
				},
				{
					subheader: 'Consistent Design for Independent Pages',
					subHeaderDetail:
						'Maintained cohesive branding throughout all contractor pages to enhance the perception of unity within the salon.',
				},
			],
		},

		testing: {
			header: 'User Feedback & Interface Adjustments',
			headerDetail:
				'Testing involved gathering feedback from clients and contractors to ensure ease of use and smooth navigation across the platform.',
			subheaders: [
				{
					subheader: 'Client Feedback on Navigation',
					subHeaderDetail:
						'Tested with real clients to confirm that navigating to contractor pages was intuitive and seamless.',
				},
				{
					subheader: 'Contractor Feedback on Booking Redirects',
					subHeaderDetail:
						'Verified that redirects to personal booking systems were functioning correctly for each contractor’s page.',
				},
			],
		},

		final: {
			header: 'Polished, User-Friendly Platform Launch',
			headerDetail:
				'The final product delivered an easy-to-navigate website with a strong, cohesive design that provided quick access to each contractor’s booking page.',
			mediaType: 'image',
			mediaUrl: '/images/casestudy/studioone/CaseStudy/final.webp',
			subheaders: [
				{
					subheader: 'Unified Team Presentation',
					subHeaderDetail:
						'Each contractor’s profile is prominently displayed, creating a professional team atmosphere and easy access for clients.',
				},
				{
					subheader: 'Streamlined Booking Process',
					subHeaderDetail:
						'Clients can book with their preferred team member directly from the Studio No. 1 website, avoiding the need to navigate multiple sites.',
				},
			],
		},

		development: {
			header: 'Building & Deploying the Website',
			headerDetail:
				'The project was developed from scratch, with a focus on creating a centralized platform that maintains each contractor’s individual booking link.',
			subheaders: [
				{
					subheader: 'Full-Stack Development',
					subHeaderDetail:
						'Handled front-end and back-end development to deliver a functional, visually consistent platform.',
				},
				{
					subheader: 'Smooth Integration of Booking Links',
					subHeaderDetail:
						'Ensured that each contractor’s personal booking link was integrated seamlessly for a fluid client experience.',
				},
			],
		},

		future: {
			header: 'Potential for Additional Features',
			headerDetail:
				'While the project scope was limited to centralizing booking, the platform could be expanded to include additional salon features like service descriptions or promotional events.',
			subheaders: [],
		},
	},

	// THE ORANGE RV
	{
		poster: '/images/casestudy/theorangerv/theorangerv_mockup.webp',
		lgPoster: '/images/casestudy/theorangerv/orangelg.webp',
		image: [
			{ image: '/images/casestudy/theorangerv/Desktop/Home_D1.webp' },
			{ image: '/images/casestudy/theorangerv/Desktop/Home_D2.webp' },
			{ image: '/images/casestudy/theorangerv/Desktop/Home_D3.webp' },
			{ image: '/images/casestudy/theorangerv/Desktop/Home_D4.webp' },
		],
		colors: {
			primary: '#fe4500', // Example color inspired by Orange Dreamsicle
			secondary: '#3b82f6', // Complementary orange color
			ctaButton: '#34a853',
			ctaButtonText: '#f2f2f2',
		},
		seo: 'RV website design, RV inventory platform, professional RV site',
		name: 'TheOrangeRV',
		shortDescription:
			"Explore how we elevated TheOrangeRV's brand with a professional website showcasing their inventory and improving customer experience.",
		timeline: '2 weeks',
		slug: generateSlug('TheOrangeRV'),
		title: 'RV Website Design | Professional Online Inventory for TheOrangeRV',
		price: '$$',
		intro: 'TheOrangeRV is an RV business that previously relied on Facebook Marketplace for advertisements and inventory display. This prototype was developed to show the business how an online platform could improve their brand and provide a streamlined inventory experience for customers.',
		role: 'Handled all aspects of design, development, and deployment as the sole developer and designer.',
		hasVideo: false,
		videoPath: '',
		teaser: 'Explore our RV website design for TheOrangeRV, showcasing inventory and elevating brand presence with a professional, user-friendly platform.',
		problem: {
			header: 'No Dedicated Online Platform',
			headerDetail:
				'TheOrangeRV previously relied on Facebook Marketplace for all advertising and inventory displays, which limited its professional appeal and customer engagement.',
			subheaders: [
				{
					subheader: 'Lack of Professional Website',
					subHeaderDetail:
						'Without a website, the business relied on third-party platforms that limited their ability to customize their brand presentation.',
				},
				{
					subheader: 'Fragmented Brand Image',
					subHeaderDetail:
						'Using a marketplace didn’t allow for a cohesive and distinctive brand image, making it harder to build credibility with customers.',
				},
			],
		},

		goal: {
			header: 'Create a Professional Inventory Showcase Platform',
			headerDetail:
				'The main objective was to design a prototype website that showcased TheOrangeRV’s inventory, boosted brand credibility, and streamlined customer browsing.',
			subheaders: [
				{
					subheader: 'Centralized Inventory Showcase',
					subHeaderDetail:
						'Develop a website where all RVs could be displayed professionally, providing detailed views of each item for potential buyers.',
				},
				{
					subheader: 'Enhance Brand Credibility',
					subHeaderDetail:
						'Create a unified and professional-looking platform to represent TheOrangeRV as a credible, established business.',
				},
				{
					subheader: 'Provide a Streamlined User Experience',
					subHeaderDetail:
						'Offer a clean and organized layout, allowing potential customers to easily browse and filter available RVs by key criteria.',
				},
			],
		},

		impact: {
			header: 'Prototype Delivered to Demonstrate Brand Potential',
			headerDetail:
				'The self-initiated prototype showed the potential for improved branding and customer engagement, providing a foundational concept for an official website.',
			subheaders: [
				{
					subheader: 'Enhanced Professional Image',
					subHeaderDetail:
						'The site demonstrated how a professional online presence could strengthen brand identity and attract more customers.',
				},
				{
					subheader: 'Streamlined Customer Browsing',
					subHeaderDetail:
						'By showcasing the RVs in a central and organized platform, the prototype illustrated a clear, user-friendly browsing experience.',
				},
			],
		},

		ideation: {
			header: 'Design Inspired by Orange Dreamsicle',
			headerDetail:
				'To align with the name TheOrangeRV, the color palette was inspired by the bright, memorable orange hues of the Orange Dreamsicle.',
			// mediaType: 'image',
			// mediaUrl: '/images/casestudy/theorangerv/CaseStudy/earlyDesign.webp',
			subheaders: [
				{
					subheader: 'Unique Color Palette',
					subHeaderDetail:
						'The orange color scheme provided a memorable and visually cohesive experience aligned with the brand name.',
					mediaType: 'image',
					mediaUrl:
						'/images/casestudy/theorangerv/CaseStudy/colorPallete.webp',
				},
				{
					subheader: 'Inventory Filters',
					subHeaderDetail:
						'Integrated filters based on price, year, and sleeping capacity to make browsing easier and more relevant for customers.',
					mediaType: 'image',
					mediaUrl:
						'/images/casestudy/theorangerv/CaseStudy/filter.webp',
				},
			],
		},

		testing: {
			header: 'Internal Testing & Assessment',
			headerDetail:
				'While cloud-deployed, the prototype was tested internally due to the need for client approval before wider testing could occur.',
			subheaders: [
				{
					subheader: 'Cloud Deployment for Accessibility',
					subHeaderDetail:
						'Deployed to AWS Cloud to allow for easy access and functionality testing from various devices.',
				},
				{
					subheader: 'No External User Testing',
					subHeaderDetail:
						'Full external testing was not conducted, as approval was not secured from the business owner.',
				},
			],
		},

		final: {
			header: 'Polished Prototype Launch',
			headerDetail:
				'The final prototype provided a visually cohesive and easy-to-navigate platform for viewing RV inventory, fully showcasing the brand potential for TheOrangeRV.',
			mediaType: 'image',
			mediaUrl: '/images/casestudy/theorangerv/CaseStudy/final.webp',
			subheaders: [
				{
					subheader: 'Consistent Brand Presentation',
					subHeaderDetail:
						'The cohesive orange theme helped establish a unique brand identity tied to the name TheOrangeRV.',
				},
				{
					subheader: 'Functional Inventory Display',
					subHeaderDetail:
						'The organized inventory and filtering options made it easy for users to find relevant RVs quickly.',
				},
			],
		},

		development: {
			header: 'React and AWS for Core Development',
			headerDetail:
				'The project was developed in React for a responsive frontend and deployed on AWS Cloud to ensure scalability and accessibility.',
			subheaders: [
				{
					subheader: 'React for Dynamic Frontend',
					subHeaderDetail:
						'Used React to build a fast, responsive interface that would scale easily for future functionality.',
				},
				{
					subheader: 'AWS Cloud Deployment',
					subHeaderDetail:
						'Deployed the prototype on AWS, making it accessible from various devices and locations.',
				},
			],
		},

		future: {
			header: 'Potential Next Steps',
			headerDetail:
				'If the owner decides to proceed, the prototype can be enhanced with updated inventory, high-quality images, and improved product display features.',
			subheaders: [],
		},
	},
].map((item, index) => ({
	...item,
	id: index + 1, // Automatically assign a dynamic id based on index
	image: item.image.map((img, imgIndex) => ({
		...img,
		id: imgIndex + 1, // Assign dynamic ids to images
		alt: img.image.split('/').pop().split('.')[0].replace(/_/g, ' '), // Dynamic alt based on file name
	})),
}));

export default CaseStudyData;

// TEMPLATE
// {
//     poster: '',
// lgPoster: '/images/casestudy/123/456.webp',//
// image: [
//         { image: '' },
//         { image: '' },
//         { image: '' },
//         { image: '' },
//     ],
//     colors: {
//         primary: '',
//         secondary: '',
//         ctaButton: '',
//         ctaButtonText: '',
//     },
//     seo: '',
//     name: '',
//     shortDescription: '',
//     timeline: '',
//     slug: generateSlug(''),
//     title: '',
//     teaser: '',
//     price: '',
//     intro: '',
//     role: '',
//     hasVideo: false,
//     videoPath: '',
//     problem: {
//         header: '',
//         headerDetail: '',
//         subheaders: [
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//         ],
//     },

//     goal: {
//         header: '',
//         headerDetail: '',
//         subheaders: [
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//         ],
//     },

//     impact: {
//         header: '',
//         headerDetail: '',
//         subheaders: [
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//         ],
//     },

//     ideation: {
//         header: '',
//         headerDetail: '',
//         mediaType: '',
//         mediaUrl: '',
//         subheaders: [
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//                 mediaType: '',
//                 mediaUrl: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//         ],
//     },

//     testing: {
//         header: '',
//         headerDetail: '',
//         subheaders: [
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//         ],
//     },

//     final: {
//         header: '',
//         headerDetail: '',
//         mediaType: '',
//         mediaUrl: '',
//         subheaders: [
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//         ],
//     },

//     development: {
//         header: '',
//         headerDetail: '',
//         subheaders: [
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//             {
//                 subheader: '',
//                 subHeaderDetail: '',
//             },
//         ],
//     },

//     future: {
//         header: '',
//         headerDetail: '',
//         subheaders: [],
//     },
// },
