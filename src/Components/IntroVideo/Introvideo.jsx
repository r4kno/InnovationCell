import React, { useState, useEffect, useRef } from 'react';
import './Introvideo.css';
import Video from "../../Assets/IntroVideo2.mp4"
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Title from "./ICell.jsx"
import logo from "../../Assets/images/i_cell_logo.png";


const IntroVideo = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayState, setOverlayState] = useState({
    firstText: false,
    secondText: false, 
    thirdText: false
  });
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
      // First text (appears at 23 seconds)
      if (video.currentTime >= 23 && !overlayState.firstText) {
        setOverlayState(prev => ({ ...prev, firstText: true }));
      }
      
      if (video.currentTime >= 2 && video.currentTime < 8 && !overlayState.secondText) {
        setOverlayState(prev => ({ ...prev, secondText: true }));
      } else if (video.currentTime >= 8.5 && overlayState.secondText) {
        setOverlayState(prev => ({ ...prev, secondText: false }));
      }
      
      if (video.currentTime >= 10.7 && video.currentTime < 15 && !overlayState.thirdText) {
        setOverlayState(prev => ({ ...prev, thirdText: true }));
      } else if (video.currentTime >= 15 && overlayState.thirdText) {
        setOverlayState(prev => ({ ...prev, thirdText: false }));
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
  }, [onComplete, overlayState]);

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
      <div className="logo-i">
        <a href="/">
          <img src={logo} alt="I-Cell Logo" />
        </a>
      </div>
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
      {overlayState.firstText && (
        <div className="exit-text">
          <div className="tagline">
            BEYOND ORBITS
          </div>
          <div className="byline">by Innovation Cell</div>
        </div>
      )}
      {overlayState.secondText && (
        <div className="intro-text">
          <div className="tagline-intro">INNOVATION CELL</div>
          <div className="byline-intro">Presents</div>
        </div>
      )}
      {overlayState.thirdText && (
        <div className="intro-text">
          <div className="tagline-mid">MOST AWAITED FEST</div>
          <div className="byline-mid">Ever</div>
        </div>
      )}

      <div className="controls-container">
        <button className="audio-button" onClick={toggleAudio}>
          {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>
        <button className="skip-button" onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;