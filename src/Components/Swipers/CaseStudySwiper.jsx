import React from 'react';
import DynamicSwiper from '../Packages/Swiper'; // Assuming this is the Swiper component

const imageSwiperConfig = {
	slidesPerView: 1.25,
	spaceBetween: 10,
	navigation: false,
	pagination: true,
	loop: true,
	breakpoints: {
		1023: {
			slidesPerView: 2.25,
		},
	},
};

const CaseStudySwiper = ({ caseStudy }) => {
	// Assuming you want to display images from the first case study
	const imageData = caseStudy.image.map((img, index) => ({
		content: (
			<img
				key={`slide-image-${index}`}
				className="w-full mb-8 border-2"
				src={img.image}
				alt={img.alt || `Slide ${index + 1}`}
			/>
		),
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
