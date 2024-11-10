// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function GoogleAnalytics() {
//   const location = useLocation();

//   useEffect(() => {
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: 'page_view',
//       page_path: location.pathname,
//       page_location: window.location.href,
//       page_title: document.title,
//     });
//   }, [location]);

//   return null;
// }

// export default GoogleAnalytics;

// //THIS IS A WORKING VERSION

// GoogleAnalytics.jsx
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-KQT8ZV8J'
};

const GoogleAnalytics = () => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return null;
};

export default GoogleAnalytics;
