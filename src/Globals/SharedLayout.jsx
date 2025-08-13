// src/Layout/SharedLayout.jsx
import React, { useEffect } from 'react';
import { Navbar, Footer } from '../Components/index';
import { useLocation } from 'react-router-dom';

const SharedLayout = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		// Always scroll to top on route change
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth', // or 'auto' if you want instant
		});
	}, [pathname]);

	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default SharedLayout;
