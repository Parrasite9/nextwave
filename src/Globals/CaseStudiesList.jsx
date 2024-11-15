// src/Components/CaseStudiesList.jsx
import React, { useContext } from 'react';
import CaseStudyContext from './Data/CaseStudyContext';
import CaseStudyLink from './CaseStudyLink';

function CaseStudiesList() {
  const { caseStudies } = useContext(CaseStudyContext);

  return (
    <div className="case-studies-list">
      {caseStudies.map((study) => (
        <div key={study.slug} className="case-study-item">
          <CaseStudyLink slug={study.slug} title={study.title} />
          {/* Optional: Add more details like images or descriptions here */}
        </div>
      ))}
    </div>
  );
}

export default CaseStudiesList;
