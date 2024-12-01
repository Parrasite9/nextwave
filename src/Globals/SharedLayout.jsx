import React from 'react';
import { Navbar, Footer } from '../Components/index';

const SharedLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{/* className='px-4 lg:px-10' */}
			<main className="">{children}</main>
			<Footer />
		</div>
	);
};

export default SharedLayout;
