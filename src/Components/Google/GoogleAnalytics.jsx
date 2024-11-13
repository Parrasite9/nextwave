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

    // Send pageview event with UTM parameters as event parameters
    ReactGA.event('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
      ...campaignParams, // Spread UTM parameters directly into event data
    });
  }, [location]);

  return null;
};

export default GoogleAnalytics;
