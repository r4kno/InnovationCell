import React from "react";
import { motion } from "framer-motion";
import "./SponsorCard.css";

export const SponsorCard = ({ sponsor }) => {
  return (
    <div className="sponsor-card">
      <motion.div
        whileHover={{ 
          rotateY: 5,
          rotateX: 5,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0, 0, 255, 0.1)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="sponsor-card-inner"
      >
        <div className="card-content">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-logo"
              />
            </div>
          </div>
          
          <div className="card-body">
            <h3 className="sponsor-name">
              {sponsor.name}
            </h3>
          </div>
          
          <div className="card-footer">
            <span className="sponsor-id">Sponsor #{sponsor.id.toString().padStart(3, '0')}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="learn-more"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
