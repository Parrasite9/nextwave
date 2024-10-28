import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CSS/styles.css';

const DynamicSwiper = ({ data, config, showProgress = false }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // Conditionally define the onAutoplayTimeLeft callback
  const onAutoplayTimeLeft = showProgress
    ? (swiper, time, progress) => {
        if (progressCircle.current) {
          progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent.current) {
          progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    : null;

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      navigation={config.navigation}
      pagination={config.pagination}
      loop={config.loop}
      slidesPerView={config.slidesPerView}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        ...config.autoplay,
      }}
      on={{
        autoplayTimeLeft: showProgress ? onAutoplayTimeLeft : undefined, // Attach the event properly
      }}
      {...config}
    >
      {data.map((item, index) => (
        <SwiperSlide key={`slide-${index}`}>{item.content}</SwiperSlide>
      ))}

      {/* Conditionally render the progress circle */}
      {showProgress && (
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      )}
    </Swiper>
  );
};

export default DynamicSwiper;
