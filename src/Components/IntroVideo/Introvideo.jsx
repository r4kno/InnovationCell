import React, { useState, useEffect, useRef } from 'react';
import './Introvideo.css';
import Video from "../../Assets/IntroVideo.mp4"
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const IntroVideo = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    const handleCanPlay = () => {
      setIsLoading(false);
      video.play();
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onComplete();
    };

    const handleTimeUpdate = () => {
      // Show overlay text when video reaches 23 seconds
      if (video.currentTime >= 23 && !showOverlay) {
        setShowOverlay(true);
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [onComplete, showOverlay]);

  const handleSkip = () => {
    setIsPlaying(false);
    onComplete();
  };

  const toggleAudio = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  if (!isPlaying) return null;

  return (
    <div className="intro-container">
      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="intro-video"
        playsInline
        muted
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Text overlay that appears at 23 seconds */}
      {showOverlay && (
        <div className="exit-text">
          <div className="tagline">Beyond Orbits</div>
          <div className="byline">by Innovation Cell</div>
        </div>
      )}

      <div className="controls-container">
        <button className="audio-button" onClick={toggleAudio}>
          {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>
        <button className="skip-button" onClick={handleSkip}>
          Skip Intro
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;