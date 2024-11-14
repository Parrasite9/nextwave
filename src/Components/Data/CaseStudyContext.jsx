// CaseStudyContext.js
import React, { createContext, useState } from 'react';
import CaseStudyData from '../Data/CaseStudyData';

const CaseStudyContext = createContext();

export const CaseStudyProvider = ({ children }) => {
  const [caseStudies] = useState(CaseStudyData);

  return (
    <CaseStudyContext.Provider value={{ caseStudies }}>
      {children}
    </CaseStudyContext.Provider>
  );
};

export default CaseStudyContext;
