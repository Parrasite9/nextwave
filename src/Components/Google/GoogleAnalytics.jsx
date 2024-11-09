import { useEffect } from 'react';

function GoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P4L9CBZRB9';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-P4L9CBZRB9');
  }, []);

  return null;
}

export default GoogleAnalytics;
