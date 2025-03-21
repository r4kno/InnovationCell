import React from "react";
import Projects from "./Projects";
import Projects2 from "./Projects2";
import "./Makerspace.css";
import slides from "./Data/memories.json";
import Memories from "./Memories";
import data from "./Data/Projects.json";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Contact from "../ContactUs/Contact";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FlipCard from "./FlipCard";

const MakerSpace = () => {
  const makerspaceimg =
    "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742765/i_cell_4rth_year/makerspace/c7uhwyswmb2jnsbjvxor.webp";
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      // console.log("hi"+scrolled);
      setScrolled(true); // User has scrolled down
    } else {
      // console.log("hi"+scrolled);
      setScrolled(false); // User is at the top
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="time-turner-animation" href="" previewlistener="true">
        <span className="time-turner-animation__outer"></span>
        <span className="time-turner-animation__inner"></span>
      </div>
      <div className={scrolled ? "dark-overlay" : ""}></div>
      <div className="maker__container teamHeading">
        <h1>MakerSpace</h1>
        <div className="maker__about">
          <FlipCard />
        </div>
        <div className="maker__projects teamHeading">
          <h1 className="heading_maker">Want to know what we have done ?</h1>
          <Projects2 />
        </div>
        <div className="memories__section teamHeading">
          <h1>Some of the Glimps of our previous events</h1>
          <Memories data={slides} />
        </div>
      </div>
      <div id="contactusnav"></div>
      <Contact />
      <Footer />
    </>
  );
};

export default MakerSpace;
