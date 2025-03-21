import React, { useState, useEffect } from "react";
import Bulb1 from "../../Assets/images/bulb11.png";
import Bulb2 from "../../Assets/images/bulb22.png";
import Holder from "../../Assets/images/wood.png";
import Owl from "../../Assets/images/Owl.gif";
import bgImage from "../../Assets/images/icellimage1.jpg"; // Corrected import
import { FaQuestion } from "react-icons/fa6";
import AnimatonComponent from "./AnimationComponent";
import "./AboutUs.css";

const AboutUs = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const [content, setContent] = useState(`
    Welcome to the Innovation Cell, the beating heart of innovation, 
    creativity, entrepreneurship, and technology at NIT Raipur.
    We are a vibrant club dedicated to fostering a culture of innovation,
    startups, and cutting-edge technology among students.
    At Innovation Cell, we believe in empowering the next generation of visionaries,
    thinkers, and doers by providing them with the necessary tools,
    resources, and opportunities to transform their ideas into reality.
  `);

  // Automatic active div switching
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDiv((prevActive) => (prevActive + 1) % 4);
    }, 1900);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="About-main-container">
      <div className="teamHeading">
        <h1>About Us</h1>
      </div>
      <div className="About-container">
        <div className="About-pic">
          <div className="holder">
            <img className="owl" src={Owl} alt="owl" width={125} height={140} />
            <img src={Holder} alt="holder" width={300} height={100} />
          </div>
          <div className="About-imgs">
            {[Bulb1, Bulb2, Bulb1, Bulb2].map((bulb, index) => (
              <div className="About-img" key={index}>
                <img src={bulb} alt={`bulb${index + 1}`} width={75} height={index % 2 === 0 ? 375 : 277.5} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="About-content"
          onMouseEnter={() =>
            setContent(
              <div className="highlighted-objectives">
                <strong>Objectives of the Innovation Cell:</strong><br /><br />
                🔹 <strong>Promote Innovation-Driven Entrepreneurship:</strong> Encouraging a culture where innovation leads to startups.<br /><br />
                🔹 <strong>Provide Support Services:</strong> Offering resources for aspiring entrepreneurs.<br /><br />
                🔹 <strong>Mentorship:</strong> Supporting students in developing their ideas.<br /><br />
             
              </div>
            )
          }
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
            opacity: "0.7",
          }}
        >
          <div className="About-item-main" style={{ fontFamily: "Poppins" }}>
            {content}
          </div>
          <div className="About-item-heading">What do we do?</div>
          <div>
            <AnimatonComponent className="About-item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
