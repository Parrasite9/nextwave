import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Push a page_view event to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_location: window.location.href,
    });
  }, [location]);

  return null;
};

export default usePageView;
