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
