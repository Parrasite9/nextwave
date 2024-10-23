import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DynamicSwiper = ({ data, config }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={config.navigation}
      pagination={config.pagination}
      loop={config.loop}
      slidesPerView={config.slidesPerView}
      {...config} // Spread any other dynamic config passed via props
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          {item.content} {/* Render dynamic content */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DynamicSwiper;
