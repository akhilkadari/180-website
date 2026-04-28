import React from "react";
import {
  FaUsers,
  FaTrain,
  FaBuilding,
  FaComments,
  FaTrophy,
  FaTree,
  FaBasketballBall,
  FaGlassCheers,
} from "react-icons/fa";
import "./InteractiveSelector.css";

const defaultOptions = [
  {
    title: "Annual Banquet",
    description: "Celebrating a year of impact.",
    image: "/images/events/eboardbanquet.JPG",
    icon: <FaTrophy />,
  },
  {
    title: "Welcome Night",
    description: "Welcoming our newest members.",
    image: "/images/events/bidnight.jpeg",
    icon: <FaUsers />,
  },
  {
    title: "Chicago Roadshow",
    description: "Networking with top consulting firms.",
    image: "/images/events/chicago.jpeg",
    icon: <FaTrain />,
  },
  {
    title: "St. Jude Basketball Tournament",
    description: "Charity hoops with Limitless, SCG, and SCNO.",
    image: "/images/events/st-jude-basketball.jpg",
    icon: <FaBasketballBall />,
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
    title: "Team Retreat",
    description: "Building bonds beyond the boardroom.",
    image: "/images/events/retreat.JPG",
    icon: <FaTree />,
  },
  {
    title: "Socials",
    description: "Off-the-clock memories with the team.",
    image: "/images/events/Social%20party.JPEG",
    icon: <FaGlassCheers />,
  },
];

/* Mosaic gallery: 4-column grid, two equal rows of square photo tiles.
   Every tile is the same size so no event reads as more important than
   the others. Captions sit on a soft gradient at the bottom. */
const InteractiveSelector = ({ options = defaultOptions }) => {
  return (
    <div className="event-mosaic">
      {options.map((option, index) => (
        <div
          key={index}
          className="mosaic-tile"
          style={{ backgroundImage: `url('${option.image}')` }}
          role="img"
          aria-label={option.title}
        >
          <div className="mosaic-tile-overlay" />
          <div className="mosaic-tile-icon">{option.icon}</div>
          <div className="mosaic-tile-caption">
            <div className="mosaic-tile-title">{option.title}</div>
            <div className="mosaic-tile-desc">{option.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveSelector;
