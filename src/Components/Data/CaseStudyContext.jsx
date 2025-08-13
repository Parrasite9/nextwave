import React, { createContext, useEffect, useState } from 'react';

const CaseStudyContext = createContext();

export const CaseStudyProvider = ({ children }) => {
	const [caseStudies, setCaseStudies] = useState([]);

	useEffect(() => {
		fetch('/case-studies/index.json')
			.then((res) => res.json())
			.then((data) => {
				// optional: sort by order
				const sorted = [...data].sort(
					(a, b) => (a.order ?? 999) - (b.order ?? 999),
				);
				setCaseStudies(sorted);
			})
			.catch((err) => console.error('Failed to load case studies:', err));
	}, []);

	return (
		<CaseStudyContext.Provider value={{ caseStudies }}>
			{children}
		</CaseStudyContext.Provider>
	);
};

export default CaseStudyContext;
