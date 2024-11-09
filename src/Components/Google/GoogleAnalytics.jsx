import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Ensure the Google Analytics script is only added once
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P4L9CBZRB9';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'G-P4L9CBZRB9');
    }

    // Track page views on route change
    if (window.gtag) {
      window.gtag('config', 'G-P4L9CBZRB9', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

export default GoogleAnalytics;
