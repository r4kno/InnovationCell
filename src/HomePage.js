import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import SnowfallComponent from "./Components/Snowfall/SnowfallComponent";
import Contact from "./Components/ContactUs/Contact";
import Accordian from "./Components/Faq/Accordian";
import Timeline from "./Components/Timeline/Timeline";
import Footer from "./Components/Footer/Footer";
import Snitch from "./Components/snitch/Snitch";
import Cursor from "./Components/cursor/Cursor";
import IntroVideo from './Components/IntroVideo/Introvideo';
import Sponsors from "./Components/Sponsors/Sponsors";

function App() {
  const contactUsRef = useRef(null); // Create a ref for the ContactUs component
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener and clear the timeout on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolled(true); // User has scrolled down
    } else {
      setScrolled(false); // User is at the top
    }
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroVideo onComplete={handleIntroComplete} />}
      <div className="App">
        <div className={scrolled ? "dark-overlay" : ""}></div>
        <LandingPage />
        <a id="" className="scroll-down" href="#aboutusnav">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </a>
        <div id="aboutusnav"></div>
        <AboutUs />

        <div id="eventsnav"></div>
        <Timeline />
        <div id="faqnav"></div>
        <Accordian />
        <div id="contactusnav"></div>
        <Contact />
        {/* <Sponsors></Sponsors>
        <div id="spons">
          <Sponsors></Sponsors>
        </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
