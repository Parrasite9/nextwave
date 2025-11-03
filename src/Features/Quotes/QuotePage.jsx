import React, { useState } from 'react';
import { useQuoteConfig } from './QuoteConfigProvider';
import { createPriceEngine } from './priceEngine';

export default function QuotePage() {
	const { config, isLoading, error } = useQuoteConfig();
	const [demoResult, setDemoResult] = useState(null);

	if (isLoading) return <div className="p-6">Loading quote config…</div>;
	if (error)
		return <div className="p-6 text-red-600">Failed to load config.</div>;
	if (!config) return <div className="p-6">No config found.</div>;

	const runDemo = () => {
		// Fake “form inputs” for now; soon these come from TanStack Forms
		const inputs = {
			business: { industry: 'restaurants' },
			needs: { ai_phone: true, chatbot: false, seo: true },
			supportTier: 'plus',
		};

		// Create the engine with config
		const engine = createPriceEngine(config);

		// 1) Industry phase
		engine.register('onIndustry', ({ inputs, config }) => {
			const key = inputs.business.industry;
			const mult = config.industries[key]?.multiplier ?? 1.0;
			const label = config.industries[key]?.label ?? key;
			const delta = {
				oneTime: Math.round(config.base.oneTime * (mult - 1)),
				monthly: Math.round(config.base.monthly * (mult - 1)),
				lineItems: [
					{
						label: `Industry Adjust (${label})`,
						amount: Math.round(config.base.oneTime * (mult - 1)),
						type: 'oneTime',
					},
					{
						label: `Industry Adjust (${label})`,
						amount: Math.round(config.base.monthly * (mult - 1)),
						type: 'monthly',
					},
				],
			};
			return delta;
		});

		// 2) Feature phase
		engine.register('onFeature', ({ inputs, config }) => {
			const patches = [];
			if (inputs.needs.ai_phone)
				patches.push(addFeature(config.features.ai_phone));
			if (inputs.needs.chatbot)
				patches.push(addFeature(config.features.chatbot));
			if (inputs.needs.seo) patches.push(addFeature(config.features.seo));

			function addFeature(f) {
				if (!f) return null;
				return {
					oneTime: f.oneTime,
					monthly: f.monthly,
					lineItems: [
						{
							label: f.label + ' (Setup)',
							amount: f.oneTime,
							type: 'oneTime',
						},
						{
							label: f.label + ' (Monthly)',
							amount: f.monthly,
							type: 'monthly',
						},
					],
				};
			}

			// Merge small patches into one
			return patches.filter(Boolean).reduce(
				(acc, p) => ({
					oneTime: (acc.oneTime || 0) + (p.oneTime || 0),
					monthly: (acc.monthly || 0) + (p.monthly || 0),
					lineItems: [
						...(acc.lineItems || []),
						...(p.lineItems || []),
					],
				}),
				{ oneTime: 0, monthly: 0, lineItems: [] },
			);
		});

		// 3) Support tier phase
		engine.register('onSupportTier', ({ inputs, config }) => {
			const tierKey = inputs.supportTier || 'basic';
			const tier =
				config.supportTiers[tierKey] || config.supportTiers.basic;
			return {
				monthly: tier.monthlyAdd,
				lineItems: [
					{
						label: `Support: ${tier.label}`,
						amount: tier.monthlyAdd,
						type: 'monthly',
					},
				],
			};
		});

		// === Now engine invokes your callbacks in order and merges results ===
		const result = engine.compute(inputs);
		setDemoResult(result);
	};

	return (
		<div className="p-6 space-y-6">
			<h1 className="text-2xl font-semibold">
				Quote: Callback Engine Demo
			</h1>

			<section>
				<h2 className="text-lg font-medium mb-2">
					Config (from Provider)
				</h2>
				<pre className="text-sm bg-gray-100 p-4 rounded overflow-auto">
					{JSON.stringify(config, null, 2)}
				</pre>
			</section>

			<button
				onClick={runDemo}
				className="px-4 py-2 rounded bg-blue-600 text-white"
			>
				Run Demo Pricing (invokes callbacks)
			</button>

			{demoResult && (
				<section>
					<h2 className="text-lg font-medium mt-4 mb-2">
						Computed Price (result of callbacks)
					</h2>
					<pre className="text-sm bg-gray-100 p-4 rounded overflow-auto">
						{JSON.stringify(demoResult, null, 2)}
					</pre>
				</section>
			)}
		</div>
	);
}
