const CaseStudyData = [
    {
        poster: '/images/casestudy/seductivebox/seductivebox_mockup.jpg',
        image: [
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
        ],
        seo: 'Lingerie subscription website redesign',
        name: 'SeductiveBox',
        timeline: '4 Weeks',
        title: 'eCommerce Lingerie Store With Insane Growth',
        teaser: 'Transforming a lingerie subscription service into a seamless, female-focused user experience, resulting in a substantial increase in conversions and customer satisfaction.',
        price: '$$',
        intro: 'At our agency, we partnered with SeductiveBox to completely redesign their website and improve conversion rates for their eCommerce lingerie subscription service. By focusing on better communication with their target audience and revamping the checkout process, we were able to help SeductiveBox significantly scale their business',
        role: 'We were responsible for the full design and development of the SeductiveBox website, utilizing a comprehensive approach to ensure both the frontend and backend were optimized for performance and user experience. The project was built with React and deployed to the AWS Cloud.',
        problem: 'SeductiveBox faced a major challenge—converting website traffic into paid subscriptions. Their previous design, while functional, communicated in a style that didn\'t resonate with their target female audience, leading to poor conversion rates.',
        goal: 'Our primary goal was to overhaul the site with a complete redesign that would resonate with SeductiveBox\'s intended audience. By enhancing user engagement and creating a seamless checkout experience, we aimed to improve conversions and support the business in its growth journey.',
        impact: 'Following the redesign, SeductiveBox saw an impressive 733% increase in monthly revenue, driven by a significant boost in conversions. This allowed the company to focus more on its core business and scale beyond web design concerns.',
        ideation: 'We identified that the original design leaned heavily on a male-oriented communication style and imagery. To address this, we shifted the brand\'s narrative to speak directly to women, with design elements and content that aligned with their preferences. Additionally, we streamlined the checkout process to eliminate friction and improve the overall user journey.',
        testing: 'Using heatmaps, we tracked user interactions, identifying pain points and areas of frustration. This data guided our design decisions, ensuring that the final product was optimized for ease of use and a smooth customer experience.',
        development: 'Our team built the site using React, ensuring it was both responsive and dynamic. We deployed the final product on AWS Cloud, providing scalability and reliability for SeductiveBox as they grew their business.',
        final: 'The redesigned website exceeded our client\'s expectations, delivering a significant return on investment. With the boost in revenue and a user-friendly platform, SeductiveBox was able to shift its focus to other core business issues outside of web development.',
        future: 'To our knowledge, SeductiveBox is no longer in business. However, the website redesign played a pivotal role in the company\'s growth during its operation, delivering a substantial return on investment and enabling the business to scale while it was active.',
    },

    {
        poster: '/images/casestudy/studioone/studioone_mockup.jpg',
        image: [
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
        ],
        seo: '',
        name: '',
        timeline: '',
        title: '',
        teaser: '',
        price: '$$',
        intro: '',
        role: '',
        problem: '',
        goal: '',
        impact: '',
        ideation: '',
        testing: '',
        final: '',
        development: '',
        future: '',    
    },

    {
        poster: '/images/casestudy/theorangerv/theorangerv_mockup.jpg',
        image: [
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
        ],
        seo: '',
        name: '',
        timeline: '',
        title: '',
        teaser: '',
        price: '$$',
        intro: '',
        role: '',
        problem: '',
        goal: '',
        impact: '',
        ideation: '',
        testing: '',
        final: '',
        development: '',
        future: '',    
    },

    {
        poster: '/images/casestudy/wayoutkids/wayout_mockup.jpg',
        image: [
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
            {
                image: '',
            },
        ],
        seo: '',
        name: '',
        timeline: '',
        title: '',
        teaser: '',
        price: '$$',
        intro: '',
        role: '',
        problem: '',
        goal: '',
        impact: '',
        ideation: '',
        testing: '',
        final: '',
        development: '',
        future: '',    
    },
].map((item, index) => ({
    ...item,
    id: index + 1,  // Automatically assign a dynamic id based on index
    image: item.image.map((img, imgIndex) => ({
        ...img,
        id: imgIndex + 1,  // Assign dynamic ids to images
    })),
}));


export default CaseStudyData;