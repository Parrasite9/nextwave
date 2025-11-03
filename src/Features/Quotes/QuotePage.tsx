import React from 'react';
import { useQuoteConfig } from './QuoteConfigProvider';

export default function QuotePage() {
	const { config, isLoading, error } = useQuoteConfig();

	if (isLoading) return <div className="p-6">Loading quote config...</div>;
	if (error)
		return <div className="p-6 text-red-600">Failed to load config.</div>;
	if (!config) return <div className="p-6">No config found.</div>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-semibold mb-4">Quote: Config Debug</h1>
			<pre className="text-sm bg-gray-100 p-4 rounded overflow-auto">
				{JSON.stringify(config, null, 2)}
			</pre>
		</div>
	);
}
