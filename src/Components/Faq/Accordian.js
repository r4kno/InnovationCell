import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import astropic from "../../imgs/astropic.png";
import "./Accordian.css";
import data from "./AccordianData";


//  accordion item component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={{
          height: isOpen ? `${contentHeight.current.scrollHeight}px` : "0px",
        }}
      >
        {answer.map((value, index) => (
          <p key={`${index}`} className="answer-content">
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="acc-main">
      <div className="teamHeading FAQ-heading">
        <h1>FAQ</h1>
      </div>

      <div className="acc-container">
        <div className="acc-img">
          <img className="snowman" src={astropic} alt="snowman" />
        </div>
        <div className="container">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
