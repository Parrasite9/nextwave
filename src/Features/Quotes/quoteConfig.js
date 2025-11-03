export async function fetchQuoteConfig() {
	return {
		version: 'v1',
		currency: 'USD',
		base: {
			oneTime: 1000,
			monthly: 250,
		},
		industries: {
			auto: {
				multiplier: 1,
				label: 'Automotive',
			},
			restaurants: {
				multiplier: 1.1,
				label: 'Restaurants',
			},
			schools: {
				multiplier: 0.95,
				label: 'Schools',
			},
			other: {
				multiplier: 1,
				label: 'other',
			},
		},
		features: {
			ai_phone: {
				oneTime: 3000,
				monthly: 500,
				label: 'AI Phone',
			},
			chatbot: {
				oneTime: 2000,
				monthly: 400,
				label: 'Chatbot',
			},
			seo: {
				oneTime: 1500,
				monthly: 500,
				label: 'SEO',
			},
		},
		supportTiers: {
			basic: {
				monthlyAdd: 0,
				label: 'Basic',
			},
			plus: {
				monthlyAdd: 100,
				label: 'Plus',
			},
			premium: {
				monthlyAdd: 250,
				label: 'Premium',
			},
		},
		rulesOrder: ['onIndustry', 'onFeatures', 'onSupportTier'],
		updatedAt: new Date().toISOString(),
	};
}
