import React from 'react';
import { Outlet } from 'react-router-dom';
import { QuoteConfigProvider } from './QuoteConfigProvider';

export default function QuoteOutlet() {
	return (
		<QuoteConfigProvider>
			<Outlet />
		</QuoteConfigProvider>
	);
}
