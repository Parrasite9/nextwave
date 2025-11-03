import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function QuoteSuccess() {
	const { id } = useParams();
	return (
		<div>
			<h1 className="text-2xl font-semibold">Quote Created</h1>
			<p className="mt-2">
				Quote ID: <span className="font-mono">{id}</span>
			</p>
			<Link
				to="/quote"
				className="text-blue-600 underline mt-4 inline-block"
			>
				Create another quote
			</Link>
		</div>
	);
}
