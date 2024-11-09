// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SharedLayout from './Globals/SharedLayout';
import { CaseStudyDetails, CollectWebsiteURL } from './Components';
import GoogleAnalytics from './Components/Google/GoogleAnalytics';
// Import other program pages...

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/casestudy/:name' element={<CaseStudyDetails />} />
          <Route path='/free-google-report' element={<CollectWebsiteURL />}  />
        </Routes>
      </SharedLayout>
    </Router>
  );
}

export default App;
