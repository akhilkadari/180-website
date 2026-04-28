import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaPlaneDeparture,
  FaBuilding,
  FaComments,
  FaTrophy,
  FaTree,
} from "react-icons/fa";
import "./InteractiveSelector.css";

const defaultOptions = [
  {
    title: "Bid Night",
    description: "Welcoming our newest members.",
    image: "/images/events/bidnight.jpeg",
    icon: <FaUsers />,
  },
  {
    title: "Chicago Roadshow",
    description: "Networking with top-tier consulting firms.",
    image: "/images/events/chicago.jpeg",
    icon: <FaPlaneDeparture />,
  },
  {
    title: "Company Visits",
    description: "Inside BCG and beyond.",
    image: "/images/events/bcg.jpeg",
    icon: <FaBuilding />,
  },
  {
    title: "Mass Member Meetings",
    description: "Where every team syncs up.",
    image: "/images/events/mmm.jpeg",
    icon: <FaComments />,
  },
  {
    title: "Annual Banquet",
    description: "Celebrating a year of impact.",
    image: "/images/events/eboardbanquet.JPG",
    icon: <FaTrophy />,
  },
  {
    title: "Team Retreat",
    description: "Building bonds beyond the boardroom.",
    image: "/images/events/retreat.JPG",
    icon: <FaTree />,
  },
];

const InteractiveSelector = ({ options = defaultOptions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  useEffect(() => {
    const timers = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, [options]);

  const handleOptionClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <div className="interactive-selector">
      <div className="is-options">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={`is-option ${activeIndex === index ? "is-active" : ""} ${
              animatedOptions.includes(index) ? "is-loaded" : ""
            }`}
            style={{ backgroundImage: `url('${option.image}')` }}
            onClick={() => handleOptionClick(index)}
            aria-label={option.title}
          >
            <div className="is-shadow" />
            <div className="is-label">
              <div className="is-icon">{option.icon}</div>
              <div className="is-info">
                <div className="is-main">{option.title}</div>
                <div className="is-sub">{option.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
