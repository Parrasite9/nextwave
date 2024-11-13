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

    // Map UTM parameters to GA4's expected parameter names
    const utmToGaMapping = {
      utm_source: 'campaign_source',
      utm_medium: 'campaign_medium',
      utm_campaign: 'campaign_name',
      utm_term: 'campaign_term',
      utm_content: 'campaign_content',
      utm_id: 'campaign_id',
    };

    Object.keys(utmToGaMapping).forEach((utmKey) => {
      const value = searchParams.get(utmKey);
      if (value) {
        campaignParams[utmToGaMapping[utmKey]] = value;
      }
    });

    // Send page_view event with campaign parameters
    ReactGA.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
      debug_mode: true, // Enable debug mode
      ...campaignParams, // Include campaign parameters
    });
  }, [location]);

  return null;
};

export default GoogleAnalytics;
