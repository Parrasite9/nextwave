// VideoComponent.jsx
import React, { useRef, useEffect } from 'react';

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        threshold: 0.5, // Adjust as needed
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
      };
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      videoElement.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      loop
      muted
      playsInline
    //   controls
      style={{ width: '100%' }}
    />
  );
}

export default VideoPlayer;
