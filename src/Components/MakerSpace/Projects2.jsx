import React, { useState } from 'react';
import './Project2.css'; // Import the CSS file
import { Link, NavLink } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const Projects2 = () => {
    // Hardcoded event data for testing
    const [events, setEvents] = useState([
        {
            id: 1,
            name: "SecQR",
            icon_url: "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742320/i_cell_4rth_year/makerspace/project1.webp",
            venue: "NIT Raipur Auditorium",
            date: "March 15, 2025",
            time: "10:00 AM",
            techstack: "Android Studio, QR, Cryptography, Firebase",
            details: "Inroducing our revolutionary SecQR Application to solve the problems faced by vehicals users.SecQR is an android app empowers users to generate custom QR codes for vehicles, and the data within these QR codes can be interpreted at different stakeholder levels. Every Levels will show different data from the same QR code. Online once then all the things will work offline.",
        },
        {
            id: 2,
            name: "Hackathon 2025",
            icon_url: "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742320/i_cell_4rth_year/makerspace/project2.webp",
            venue: "Innovation Lab",
            date: "April 5, 2025",
            time: "9:00 AM",
            techstack: "Android studio, Arduino",
            details: "A 24-hour coding competition with exciting problem statements and rewards.",
        },
        {
            id: 3,
            name: "Investment Pitch Day",
            icon_url: "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742319/i_cell_4rth_year/makerspace/project3.webp",
            venue: "Conference Hall",
            date: "May 10, 2025",
            time: "2:00 PM",
            techstack: "Programming in C++, Tincercad, RFID Technology",
            details: "Pitch your startup ideas to top investors and get valuable feedback.",
        },
    ]);



    const [projects, setProjects] = useState([
        {
            src: "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742320/i_cell_4rth_year/makerspace/project1.webp",
            alt: "Project img",
            title: "SecQR",
            text: "Introducing our revolutionary SecQR Application to solve the problems faced by vehicals users. SecQR is an android app that empowers users to generate custom QR codes for vehicles, and the data within these QR codes can be interpreted at different stakeholder levels. Every level will show different data from the same QR code. Online once then all the things will work offline.",
            techstack: "Android Studio, QR, Cryptography, Firebase"
        },
        {
            src: "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742320/i_cell_4rth_year/makerspace/project2.webp",
            alt: "Project img",
            title: "Fire and Gas Detector",
            text: "Introducing our revolutionary Fire and Gas Detector System—ensuring heightened accuracy, swift response, and comprehensive coverage. With state-of-the-art sensors and intelligent algorithms, enjoy minimal false alarms, timely alerts, and seamless mobile app integration for real-time updates and control. Redefine safety with our advanced, reliable, and user-centric solution.",
            techstack: "Android studio, Arduino"
        },
        {
            src: "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742319/i_cell_4rth_year/makerspace/project3.webp",
            alt: "Project img",
            title: "RFID Automation",
            text: "RFID technology revolutionizes the mining sector by addressing safety and efficiency challenges. Implementing RFID tags on vehicles and personnel enables automated tracking in underground and open-cast mines, enhancing authorization processes and ensuring accurate attendance records. This innovation streamlines operations, reduces errors, and boosts overall productivity in the mining industry.",
            techstack: "Programming in C++, Tincercad, RFID Technology"
        }
    ]);


    return (
        <>
            <div className="outerhead mainCtn">

                <div className="Cards">
                    <div className="mainContainer">
                        {projects.map((project) => (
                            <div className="item-container glowing-border" >
                                <div className="img-container">
                                    <img src={project.src} alt={project.name} />
                                </div>

                                <div className="body-container">
                                    <div className="overlay"></div>

                                    <div className="event-info">
                                        <p className="title">{project.title}</p>
                                        <div className="separator"></div>

                                        <div className="additional-info">
                                            {/* <p className="info">
                                                <i className="fas fa-map-marker-alt"></i> {event.venue}
                                            </p>
                                            <p className="info">
                                                <i className="far fa-calendar-alt"></i> {event.date}, {event.time}
                                            </p> */}
                                            <p className="info description">
                                                {project.text.length > 200
                                                    ? `${project.text.substring(0, 200)}...`
                                                    : project.text}{' '}
                                                <NavLink to={""}><span>more...</span></NavLink>
                                            </p>
                                            <p className="techStack"><span >TechStack:</span> {project.techstack} <span>
                                                <FaGithub /></span></p>
                                        </div>
                                    </div>
                                    <button className="action">
                                        <NavLink to={""}>
                                            KNOW MORE
                                        </NavLink>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects2;