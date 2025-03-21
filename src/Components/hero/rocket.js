import React, { useRef, useEffect } from 'react';
import RocketVideo from '../../Assets/rocket.webm';

export default function App() {
  const videoRef = useRef(null);
  
  // Set start and end times in seconds
  const startTime = 0; // Start at 2 seconds
  const endTime = 7.8;   // End at 6 seconds
  
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Function to handle time updates
      const handleTimeUpdate = () => {
        // If current time reaches or exceeds the end time, jump back to start time
        if (videoElement.currentTime >= endTime) {
          videoElement.currentTime = startTime;
        }
      };
      
      // Set initial time to start time when loaded
      const handleLoaded = () => {
        videoElement.currentTime = startTime;
      };
      
      videoElement.addEventListener('loadeddata', handleLoaded);
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      
      // Cleanup
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        videoElement.removeEventListener('loadeddata', handleLoaded);
      };
    }
  }, [startTime, endTime]);
  
  return (
    <div className="rocket-container" style={{
      position: "absolute",
      top: "10%",
      left: "50%",
      transform: "translate(-20%, 0)",
      width: "100%",
      height: "100%",
      zIndex: 1,
      overflow: "hidden",
    }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={RocketVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}