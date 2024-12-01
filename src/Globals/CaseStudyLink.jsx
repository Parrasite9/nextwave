// src/Components/CaseStudyLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudyLink({ slug, title }) {
	return (
		<Link to={`/casestudy/${slug}`} className="case-study-link">
			{title}
		</Link>
	);
}

export default CaseStudyLink;
