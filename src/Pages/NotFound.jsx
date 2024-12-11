import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="not-found-container text-center p-8">
			<Helmet>
				<title>404 - Page Not Found</title>
				<meta name="robots" content="noindex" />
			</Helmet>
			<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
			<p className="mb-8 text-lg">
				Oops! The page you're looking for doesn't exist.
			</p>
			<Link
				to="/"
				className="py-3 px-6 bg-blue-600 text-white rounded-lg"
			>
				Go Back to Home
			</Link>
		</div>
	);
};

export default NotFound;
