// src/GoogleAnalytics.jsx
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Parse UTM parameters from the URL
    const searchParams = new URLSearchParams(location.search);
    const campaignParams = {};

    // Extract UTM parameters
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'].forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        campaignParams[key] = value;
      }
    });

    // Send pageview with campaign parameters
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search, // Path and query string
      location: window.location.href,            // Full URL
      title: document.title,
      campaign: campaignParams,                  // UTM parameters
    });
  }, [location]);

  return null;
};

export default GoogleAnalytics;
