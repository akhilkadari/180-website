import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaUsers, 
  FaChartLine, 
  FaLightbulb,
  FaStar
} from 'react-icons/fa';
import './ConsultingTeam.css';

const ConsultingTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true });

  const consultingTeams = {
    projectManagers: [
      {
        id: 1,
        name: "Jessica Wang",
        image: "https://via.placeholder.com/200x200/1a365d/ffffff?text=JW",
        major: "Business Administration",
        year: "Senior",
        projects: 8,
        rating: 4.9
      },
      {
        id: 2,
        name: "Ryan Patel",
        image: "https://via.placeholder.com/200x200/2d3748/ffffff?text=RP",
        major: "Supply Chain Management",
        year: "Senior",
        projects: 6,
        rating: 4.8
      },
      {
        id: 3,
        name: "Amanda Foster",
        image: "https://via.placeholder.com/200x200/4a5568/ffffff?text=AF",
        major: "Marketing",
        year: "Junior",
        projects: 5,
        rating: 4.7
      }
    ],
    consultants: [
      {
        id: 4,
        name: "Marcus Johnson",
        image: "https://via.placeholder.com/200x200/667eea/ffffff?text=MJ",
        major: "Finance",
        year: "Senior",
        projects: 12,
        rating: 4.9
      },
      {
        id: 5,
        name: "Sophie Chen",
        image: "https://via.placeholder.com/200x200/764ba2/ffffff?text=SC",
        major: "Economics",
        year: "Junior",
        projects: 9,
        rating: 4.8
      },
      {
        id: 6,
        name: "Kevin Rodriguez",
        image: "https://via.placeholder.com/200x200/f6ad55/ffffff?text=KR",
        major: "Information Systems",
        year: "Senior",
        projects: 7,
        rating: 4.7
      },
      {
        id: 7,
        name: "Nina Thompson",
        image: "https://via.placeholder.com/200x200/38b2ac/ffffff?text=NT",
        major: "Business Administration",
        year: "Junior",
        projects: 6,
        rating: 4.6
      }
    ],
    businessAnalysts: [
      {
        id: 8,
        name: "Alex Rivera",
        image: "https://via.placeholder.com/200x200/ed8936/ffffff?text=AR",
        major: "Statistics",
        year: "Senior",
        projects: 10,
        rating: 4.9
      },
      {
        id: 9,
        name: "Maya Singh",
        image: "https://via.placeholder.com/200x200/e53e3e/ffffff?text=MS",
        major: "Data Science",
        year: "Junior",
        projects: 8,
        rating: 4.8
      },
      {
        id: 10,
        name: "Chris Wilson",
        image: "https://via.placeholder.com/200x200/805ad5/ffffff?text=CW",
        major: "Computer Science",
        year: "Senior",
        projects: 11,
        rating: 4.7
      }
    ]
  };

  const highlights = [
    {
      id: 1,
      title: "Project Success Rate",
      value: "95%",
      description: "Client satisfaction rate across all projects"
    },
    {
      id: 2,
      title: "Average Project Duration",
      value: "12 weeks",
      description: "From initial consultation to final delivery"
    },
    {
      id: 3,
      title: "Team Experience",
      value: "2.5 years",
      description: "Average consulting experience per team member"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  const renderTeamSection = (title, members, icon) => (
    <div className="team-section">
      <div className="section-header">
        <div className="header-icon">{icon}</div>
        <h2>{title}</h2>
        <p>Meet our talented {title.toLowerCase()}</p>
      </div>
      <div className="team-members">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            className="member-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="member-image">
              <img src={member.image} alt={member.name} />
              <div className="member-rating">
                <FaStar />
                <span>{member.rating}</span>
              </div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-major">{member.major}</p>
              <p className="member-year">{member.year}</p>
              <div className="member-stats">
                <span>{member.projects} Projects</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="consulting-team">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="team-hero-content"
          >
            <h1>Our Consulting Team</h1>
            <p>Dedicated professionals delivering exceptional results for our clients</p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="highlights-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="highlights-carousel"
          >
            <button className="carousel-btn prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            
            <div className="carousel-content">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.id}
                  className={`highlight-slide ${index === currentSlide ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="highlight-value">{highlight.value}</div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </motion.div>
              ))}
            </div>
            
            <button className="carousel-btn next" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </motion.div>
          
          <div className="carousel-indicators">
            {highlights.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section ref={teamRef} className="teams-container">
        <div className="container">
          {renderTeamSection(
            "Project Managers",
            consultingTeams.projectManagers,
            <FaUsers />
          )}
          
          {renderTeamSection(
            "Consultants",
            consultingTeams.consultants,
            <FaChartLine />
          )}
          
          {renderTeamSection(
            "Business Analysts",
            consultingTeams.businessAnalysts,
            <FaLightbulb />
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="join-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Join Our Consulting Team</h2>
            <p>Ready to make an impact? We're looking for talented students to join our consulting team.</p>
            <a href="/join-us" className="btn btn-primary">
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingTeam; 