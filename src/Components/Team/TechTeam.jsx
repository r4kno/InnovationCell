import React from "react";
import "./techteam.css";
import TeamCard from "./TeamCard";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Contact from "../ContactUs/Contact";
import teamRecord from "./members.json";

const TechTeam = () => {
  return (
    <div className="team-container" style={{ width: "100%" }}>
      <Navbar2 />
      <div className="dark-overlay"></div>
      <div className="teams-page">
        <div id="team" className="teamHeading">
          <h1>Tech Team</h1>  
        </div>
        <div className="Teams">
          {teamRecord.teamData.techteam.map((member, index) => (
            <TeamCard
              key={index}
              profileImg={member.picture}
              name={member.Name}
              instaLink={member.InstagramID}
              linkedinLink={member.LinkedINID}
              domain={member.Domain}
              branch={member.Year + " Year"}
            />
          ))}
        </div>
      </div>
      <div id="contactusnav"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default TechTeam;
