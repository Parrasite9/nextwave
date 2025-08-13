import React from 'react';
import DynamicSwiper from '../Packages/Swiper';

const imageSwiperConfig = {
	slidesPerView: 1.25,
	spaceBetween: 10,
	navigation: false,
	pagination: true,
	loop: true,
	breakpoints: {
		1023: { slidesPerView: 2.25 },
	},
};

export default function CaseStudySwiper({ caseStudy }) {
	// Guard against missing caseStudy
	if (!caseStudy) return null;

	// Accept multiple shapes and normalize
	const raw = caseStudy.image ?? caseStudy.images ?? [];
	const slides = Array.isArray(raw) ? raw : [];

	const normalized = slides
		.map((item, i) => {
			if (!item) return null;

			// { image: '/path', alt?: '...' }
			if (typeof item === 'object' && (item.image || item.src)) {
				return {
					src: item.image || item.src,
					alt:
						item.alt ||
						(caseStudy.title
							? `${caseStudy.title} ${i + 1}`
							: `Slide ${i + 1}`),
				};
			}

			// '/path'
			if (typeof item === 'string') {
				return {
					src: item,
					alt: caseStudy.title
						? `${caseStudy.title} ${i + 1}`
						: `Slide ${i + 1}`,
				};
			}

			return null;
		})
		.filter(Boolean);

	if (!normalized.length) return null;

	const imageData = normalized.map((img, index) => ({
		key: `slide-image-${index}`,
		content: (
			<img
				loading="lazy"
				className="w-full mb-8 border-2"
				src={img.src}
				alt={img.alt}
			/>
		),
	}));

	return (
		<div className="slider__parent flex justify-end w-full">
			<div className="w-full">
				<DynamicSwiper data={imageData} config={imageSwiperConfig} />
			</div>
		</div>
	);
}
