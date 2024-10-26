import React from 'react';
import DynamicSwiper from '../Packages/Swiper';  // Assuming this is the Swiper component
import CaseStudyData from '../Data/CaseStudyData';  // Import your case study data

const imageSwiperConfig = {
  slidesPerView: 1.25,
  spaceBetween: 10,
  navigation: false,
  pagination: true,
  loop: true,
  breakpoints: {
    1023: {
        slidesPerView: 2.25,
    }
  }
};

const CaseStudySwiper = () => {
  // Assuming you want to display images from the first case study
  const imageData = CaseStudyData[0].image.map((img) => ({
    content: <img className="w-full mb-8 border-2" src={img.image} alt={img.alt} />,
  }));

  return (
    <div className="slider__parent flex justify-end w-full">
        <div className="w-full ">
            <DynamicSwiper data={imageData} config={imageSwiperConfig} />
        </div>
    </div>
  );
  };

export default CaseStudySwiper;
