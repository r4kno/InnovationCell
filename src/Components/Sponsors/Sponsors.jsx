import React from "react";
import { motion } from "framer-motion";
import record from "./record.json";
import "./Sponsors.css";
import { SponsorCard } from "./SponsorCard";

const Sponsors = () => {
  return (
    <div className="sponsors-page">
      {/* <div ref={starsRef} className="stars-container"></div> */}
      
      <div className="contactHeading ">
              <h1>Sponsors</h1>
            </div>

      <div className="sponsors-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="sponsors-grid"
        >
          {record.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + index * 0.1,
                ease: [0.175, 0.885, 0.32, 1]
              }}
            >
              <SponsorCard sponsor={sponsor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="cta-section"
      >
        <div className="cta-box">
          <h2 className="cta-title">Become a Sponsor</h2>
          <p className="cta-description">
          Be a catalyst for innovation! 🌟 Join us in empowering young entrepreneurs and shaping the future of startups.
          </p>
          <button className="cta-button">
            Contact Us
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Sponsors;

