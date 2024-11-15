import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SharedLayout from './Globals/SharedLayout';
import { CaseStudyDetails, CollectWebsiteURL, Contact } from './Components';
import GoogleAnalytics from './Components/Google/GoogleAnalytics';
import NotFound from './Pages/NotFound';
import { CaseStudyProvider } from './Components/Data/CaseStudyContext';


function App() {

  // Move the hook inside the Router
  return (
    <Router>
      <GoogleAnalytics />
      <CaseStudyProvider>
        <SharedLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/casestudy/:slug" element={<CaseStudyDetails />} />
            <Route path="/free-google-report" element={<CollectWebsiteURL />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SharedLayout>
      </CaseStudyProvider>
    </Router>
  );
}

export default App;
