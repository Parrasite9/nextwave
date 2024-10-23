import React from 'react';
import DynamicSwiper from '../Packages/Swiper';  // Assuming this is the Swiper component
import CaseStudyData from '../Data/CaseStudyData';  // Import your case study data

const imageSwiperConfig = {
  slidesPerView: 1.25,
  navigation: false,
  pagination: true,
  loop: true,
};

const CaseStudySwiper = () => {
  // Assuming you want to display images from the first case study
  const imageData = CaseStudyData[0].image.map((img) => ({
    content: <img className="mb-8 border-2" src={img.image} alt={img.alt} />,
  }));

  return <DynamicSwiper data={imageData} config={imageSwiperConfig} />;
};

export default CaseStudySwiper;
