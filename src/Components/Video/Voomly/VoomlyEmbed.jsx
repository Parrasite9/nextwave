import React from 'react';

const VoomlyEmbed = () => {
	return (
		<div
			className="voomly-embed-container w-full rounded-[10px] aspect-video bg-gradient-to-br from-[#8E96A4] to-[#C9D0DE]"
			style={{
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<iframe
				src="https://embed.voomly.com/embed/assets/embed.html?videoId=IYiDnbXNi&amp;videoRatio=1.7777777777777777&amp;type=f&amp;skinColor=%23008EFF"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
				title="Voomly Video"
			></iframe>
		</div>
	);
};

export default VoomlyEmbed;
