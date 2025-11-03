// src/Features/Quotes/QuoteConfigProvider.jsx
import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { fetchQuoteConfig } from './quoteConfig';

const QuoteConfigContext = createContext(null);

export function QuoteConfigProvider({ children }) {
	const [config, setConfig] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch once on mount (like loading Inertia page props)
	useEffect(() => {
		let cancelled = false;
		async function load() {
			setIsLoading(true);
			setError(null);
			try {
				const data = await fetchQuoteConfig();
				if (!cancelled) setConfig(data);
			} catch (err) {
				if (!cancelled) setError(err);
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		}
		load();
		return () => {
			cancelled = true;
		};
	}, []);

	const value = useMemo(
		() => ({
			config,
			isLoading,
			error,

			refresh: async () => {
				setIsLoading(true);
				setError(null);
				try {
					const data = await fetchQuoteConfig();
					setConfig(data);
				} catch (err) {
					setError(err);
				} finally {
					setIsLoading(false);
				}
			},
		}),
		[config, isLoading, error],
	);

	return (
		<QuoteConfigContext.Provider value={value}>
			{children}
		</QuoteConfigContext.Provider>
	);
}

export function useQuoteConfig() {
	const ctx = useContext(QuoteConfigContext);
	if (!ctx) {
		throw new Error(
			'useQuoteConfig must be used inside <QuoteConfigProvider>',
		);
	}
	return ctx;
}
