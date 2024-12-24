import React, { useState } from 'react';

function RequestGBPVideo() {
	const [isPlaying, setIsPlaying] = useState(false);

	const handleVideoClick = (e) => {
		e.preventDefault(); // Prevents the default video click behavior
		const video = e.target;

		if (video.paused) {
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	};

	const handleVideoEnded = () => {
		setIsPlaying(false); // Reset when the video ends
	};

	return (
		<div className="relative group">
			<video
				id="requestGBPVideo"
				src="/images/requestGBP_descript.mp4"
				className="w-full h-auto rounded-lg shadow-md"
				controls
				controlsList="nodownload noplaybackrate"
				disablePictureInPicture
				onClick={handleVideoClick}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onEnded={handleVideoEnded}
			>
				{/* Captions */}
				<track
					src="/Components/Video/RequestGBP/RequestGBPVideo_Script.vtt"
					kind="subtitles"
					srcLang="en"
					label="English"
					default
				/>
			</video>
			{!isPlaying && (
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
					<svg
						width="64"
						height="64"
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-white"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			)}
		</div>
	);
}

export default RequestGBPVideo;