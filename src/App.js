import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SharedLayout from './Globals/SharedLayout';
import {
	CaseStudyDetails,
	CollectWebsiteURL,
	Contact,
	GetWebsite,
	Cookies,
	Privacy,
	Terms,
	MidlandWebDesign,
	RequestGBP,
	ThankYou,
} from './Components';
import GoogleAnalytics from './Components/Google/GoogleAnalytics';
import NotFound from './Pages/NotFound';
import { CaseStudyProvider } from './Components/Data/CaseStudyContext';
import BlogPost from './Components/Blogs/BlogPost';
import BlogList from './Components/Blogs/BlogList';
import FacebookPixel from './Components/Facebook/FacebookPixel';

function App() {
	// Move the hook inside the Router
	return (
		<Router>
			<GoogleAnalytics />
			<FacebookPixel />
			<CaseStudyProvider>
				<SharedLayout>
					<Routes>
						{/* CORE PAGES  */}
						<Route path="/" element={<Home />} />
						<Route
							path="/casestudy/:slug"
							element={<CaseStudyDetails />}
						/>
						<Route
							path="/free-google-report"
							element={<CollectWebsiteURL />}
						/>
						<Route path="/contact" element={<Contact />} />
						<Route path="/404" element={<NotFound />} />
						<Route path="/get-website" element={<GetWebsite />} />
						<Route path="/thank-you" element={<ThankYou />} />

						{/* BLOGS  */}
						<Route path="/blogs" element={<BlogList />} />
						<Route path="/blog/:slug" element={<BlogPost />} />

						{/* POLICIES  */}
						<Route path="/cookies-policy" element={<Cookies />} />
						<Route path="/privacy-policy" element={<Privacy />} />
						<Route
							path="/terms-and-conditions"
							element={<Terms />}
						/>

						{/* SEO DEDICATED  */}
						<Route
							path="/web-design-midland-tx"
							element={<MidlandWebDesign />}
						/>

						{/* REQUEST GBP */}
						<Route path="/requestGBP" element={<RequestGBP />} />

						{/* WILDCARD */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</SharedLayout>
			</CaseStudyProvider>
		</Router>
	);
}

export default App;
