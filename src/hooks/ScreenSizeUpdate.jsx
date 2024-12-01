// src/hooks/useIsMobile.js
import { useState, useEffect } from 'react';

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Handler to check if the screen is mobile
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		// Check on resize
		window.addEventListener('resize', checkMobile);

		// Call the handler initially to set the state
		checkMobile();

		// Cleanup event listener on unmount
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return isMobile;
};

export default useIsMobile;
