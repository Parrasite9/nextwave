// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SharedLayout from './Globals/SharedLayout';
import { CaseStudyDetails, CollectWebsiteURL, Contact } from './Components';
import GoogleAnalytics from './Components/Google/GoogleAnalytics';
// Import other program pages...

function App() {
  return (
    <Router>
      {/* Include Google Analytics here to track all routes */}
      <GoogleAnalytics />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/casestudy/:name' element={<CaseStudyDetails />} />
          <Route path='/free-google-report' element={<CollectWebsiteURL />}  />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </SharedLayout>
    </Router>
  );
}

export default App;
