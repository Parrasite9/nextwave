import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DynamicSwiper = ({ data, config }) => {
  useEffect(() => {
    // Initialize Swiper with dynamic config
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination], // Enable modules
      navigation: config.navigation || false, // Pass navigation config if provided
      pagination: config.pagination || false, // Pass pagination config if provided
      loop: config.loop || false, // Example: pass loop config
      slidesPerView: config.slidesPerView || 1, // Example: control slides per view
      ...config, // Spread any other dynamic config passed via props
    });
  }, [config]);

  return (
    <div className="swiper">
      {/* Swiper wrapper */}
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div key={index} className="swiper-slide">
            {item.content} {/* Render dynamic content */}
          </div>
        ))}
      </div>

      {/* Conditionally render navigation and pagination if enabled */}
      {config.navigation && (
        <>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </>
      )}
      {config.pagination && <div className="swiper-pagination"></div>}
    </div>
  );
};

export default DynamicSwiper;
