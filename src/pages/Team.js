import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaTwitter, 
  FaInstagram,
  FaCrown,
  FaUserTie,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true });

  const executiveBoard = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President",
      image: "https://via.placeholder.com/300x300/1a365d/ffffff?text=AJ",
      bio: "Senior studying Business Administration with a passion for strategic consulting and team leadership.",
      major: "Business Administration",
      year: "Senior",
      social: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        email: "alex.johnson@msu.edu",
        twitter: "https://twitter.com/alexjohnson"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Vice President",
      image: "https://via.placeholder.com/300x300/2d3748/ffffff?text=SC",
      bio: "Dedicated to fostering innovation and excellence in our consulting projects and team development.",
      major: "Finance",
      year: "Senior",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        email: "sarah.chen@msu.edu"
      }
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Director of Operations",
      image: "https://via.placeholder.com/300x300/4a5568/ffffff?text=MR",
      bio: "Ensuring smooth operations and maintaining the highest standards of project delivery and client satisfaction.",
      major: "Supply Chain Management",
      year: "Junior",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        email: "michael.rodriguez@msu.edu"
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Director of Marketing",
      image: "https://via.placeholder.com/300x300/667eea/ffffff?text=ED",
      bio: "Creative strategist focused on building our brand and expanding our reach in the consulting community.",
      major: "Marketing",
      year: "Junior",
      social: {
        linkedin: "https://linkedin.com/in/emilydavis",
        email: "emily.davis@msu.edu",
        instagram: "https://instagram.com/emilydavis"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Director of Finance",
      image: "https://via.placeholder.com/300x300/764ba2/ffffff?text=DK",
      bio: "Financial expert ensuring sustainable growth and responsible resource management for our organization.",
      major: "Accounting",
      year: "Senior",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        email: "david.kim@msu.edu"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Director of Recruitment",
      image: "https://via.placeholder.com/300x300/f6ad55/ffffff?text=LT",
      bio: "Passionate about attracting and developing the next generation of consulting talent at MSU.",
      major: "Human Resources",
      year: "Junior",
      social: {
        linkedin: "https://linkedin.com/in/lisathompson",
        email: "lisa.thompson@msu.edu"
      }
    }
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case "President":
        return <FaCrown />;
      case "Vice President":
        return <FaUserTie />;
      case "Director of Operations":
        return <FaChartLine />;
      case "Director of Marketing":
        return <FaUsers />;
      case "Director of Finance":
        return <FaChartLine />;
      case "Director of Recruitment":
        return <FaUsers />;
      default:
        return <FaUserTie />;
    }
  };

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
            <p>Dedicated leaders driving innovation and excellence in student consulting</p>
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
                    <div className="role-icon">
                      {getRoleIcon(member.role)}
                    </div>
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
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link twitter"
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a 
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link instagram"
                      >
                        <FaInstagram />
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