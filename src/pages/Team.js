import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaLinkedin, 
  FaEnvelope
} from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true });
  // eboard things
  const executiveBoard = [
    {
      id: 1,
      name: "Sahib Sekhon",
      role: "President",
      image: "/eboard headshots/sahib.webp",
      bio: "Sahib is a senior who joined 180 in Spring '23. He has a background in investment banking and was most recently a summer restructuring analyst at Alvarez & Marsal!",
      major: "Finance",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/sahibsekhon/",
        email: "sekhons1@msu.edu"
      }
    },
    {
      id: 2,
      name: "Puja Patel",
      role: "Vice President",
      image: "/eboard headshots/puja.JPG",
      bio: "Puja is a senior who joined 180 in Fall '23. She has a background in technology consulting through her experience at Plante Moran the past two summers.",
      major: "Finance",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/pujapatel2026/",
        email: "patelpu6@msu.edu"
      }
    },
    {
      id: 3,
      name: "Ethan Oliven",
      role: "Vice President of External Affairs",
      image: "/eboard headshots/Ethan Oliven Headshot.jpg",
      bio: "Ethan is a junior who joined 180 in Spring '24. He has gained in experience in the accounting and consulting fields, interning at KPMG in audit and Plante Moran in national tax in Chicago.",
      major: "Accounting",
      year: "Junior",
      social: {
        linkedin: "https://www.linkedin.com/in/ethanoliven/",
        email: "olivenet@msu.edu"
      }
    },
    {
      id: 4,
      name: "Rucha Deshpande",
      role: "Vice President of Operations",
      image: "/eboard headshots/rucha.jpg",
      bio: "Rucha is a senior who joined 180 in Fall '23. She has worked in different areas of supply chain, most recently as a supply chain capabilities intern at Nike.",
      major: "Supply Chain Management",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/rucha-deshpande-/",
        email: "deshpa48@msu.edu"
      }
    },
    {
      id: 5,
      name: "Ava Soltysiak",
      role: "Vice President of Events",
      image: "/eboard headshots/ava.jpeg",
      bio: "Ava is a junior who joined 180 in Spring 2024. She has experience in commercial banking at Mercantile Bank and in alternative investments at Proteus. On campus, Ava is involved in research with the Department of Finance.",
      major: "Finance",
      year: "Junior",
      social: {
        linkedin: "https://www.linkedin.com/in/ava-soltysiak/",
        email: "soltysi9@msu.edu"
      }
    },
    {
      id: 6,
      name: "Shivang Kapoor",
      role: "Vice President of Recruitment and Training",
      image: "/eboard headshots/shiv.jpeg",
      bio: "Shivang is a senior who joined 180 in Fall '23. He has a background in digital transformations and sustainable solutions, most recently working as a Consultant at KPMG Chicago this past summer.",
      major: "Supply Chain Management",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/shivangkapoor1/",
        email: "kapoors6@msu.edu"
      }
    },
    {
      id: 7,
      name: "Pranav Bellad",
      role: "Vice President of Quality Assurance",
      image: "/eboard headshots/pranav.jpeg",
      bio: "Pranav is a senior who joined 180 in Spring '23. He has a background in Electronics and was most recently a summer engineering sales internship at Texas Instruments.",
      major: "Computer Engineering",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/pranav-bellad/",
        email: "belladpr@msu.edu"
      }
    }
  ];



  return (
    <div className="team">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="team-hero-content"
          >
            <h1>Meet Our Executive Board</h1>
            <p>Our leaders here at 180DC MSU driving innovation and excellence in student consulting</p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={teamRef} className="team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="team-grid"
          >
            {executiveBoard.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="member-bio">
                      <p>{member.bio}</p>
                      <div className="member-details">
                        <span><strong>Major:</strong> {member.major}</span>
                        <span><strong>Year:</strong> {member.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="member-info">
                  <div className="member-header">
                    <div className="member-details">
                      <h3>{member.name}</h3>
                      <span className="role">{member.role}</span>
                    </div>
                  </div>
                  
                  <div className="member-social">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link linkedin"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="social-link email"
                      >
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="team-stats">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="stats-content"
          >
            <h2>Our Team at a Glance</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">40</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3.78</div>
                <div className="stat-label">Average GPA</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Majors Represented</div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="join-team-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Join Our Team</h2>
            <p>Ready to make an impact? We're always looking for talented students to join our consulting team.</p>
            <a href="/join-us" className="btn btn-primary">
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team; 