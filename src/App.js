import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SharedLayout from './Globals/SharedLayout';
import { CaseStudyDetails, CollectWebsiteURL, Contact, GetWebsite } from './Components';
import GoogleAnalytics from './Components/Google/GoogleAnalytics';
import NotFound from './Pages/NotFound';
import { CaseStudyProvider } from './Components/Data/CaseStudyContext';
import BlogPost from './Components/Blogs/BlogPost';
import BlogList from './Components/Blogs/BlogList';


function App() {

  // Move the hook inside the Router
  return (
    <Router>
      <GoogleAnalytics />
      <CaseStudyProvider>
        <SharedLayout>
          <Routes>
            {/* CORE PAGES  */}
            <Route path="/" element={<Home />} />
            <Route path="/casestudy/:slug" element={<CaseStudyDetails />} />
            <Route path="/free-google-report" element={<CollectWebsiteURL />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/get-website' element={<GetWebsite />} />

            {/* BLOGS  */}
            <Route path='/blogs' element={<BlogList />} />
            <Route path='/blog/:slug' element={<BlogPost />} />
          </Routes>
        </SharedLayout>
      </CaseStudyProvider>
    </Router>
  );
}

export default App;
