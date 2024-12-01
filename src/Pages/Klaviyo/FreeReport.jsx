import React from 'react';

function FreeReport() {
	// This code should be triggered after a successful form submission
	KlaviyoAPI.track('Form Submission', {
		'Form Type': 'Contact Us',
		'Page URL': window.location.href,
	});

	return (
		<div>
			<h3>FORM</h3>
			{/* CREATE FORM HERE  */}
		</div>
	);
}

export default FreeReport;
