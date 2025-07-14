import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaBullseye, 
  FaEye, 
  FaRocket, 
  FaUsers, 
  FaChartLine, 
  FaLightbulb 
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const missionRef = useRef(null);
  const differenceRef = useRef(null);
  const galleryRef = useRef(null);
  
  const isMissionInView = useInView(missionRef, { once: true });
  const isDifferenceInView = useInView(differenceRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });

  const differences = [
    {
      icon: <FaUsers />,
      title: "Student-Driven",
      description: "Our team consists of talented MSU students who bring fresh perspectives and innovative solutions to every project."
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Approach",
      description: "We leverage advanced analytics and research methodologies to provide evidence-based recommendations."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description: "We think outside the box to create unique strategies that set our clients apart from the competition."
    },
    {
      icon: <FaRocket />,
      title: "Proven Results",
      description: "Our track record speaks for itself - we've helped numerous organizations achieve measurable success."
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Team Meeting",
      description: "Collaborative strategy session with our consulting team"
    },
    {
      id: 2,
      title: "Client Presentation",
      description: "Delivering impactful recommendations to stakeholders"
    },
    {
      id: 3,
      title: "Workshop",
      description: "Interactive workshop with community partners"
    },
    {
      id: 4,
      title: "Award Ceremony",
      description: "Celebrating our team's achievements and recognition"
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <h1>About 180° DC MSU</h1>
            <p>Empowering organizations through student-driven consulting excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mission-card"
            >
              <div className="mission-icon">
                <FaBullseye />
              </div>
              <h2>Our Mission</h2>
              <p>
                To provide high-quality, student-driven consulting services that empower 
                organizations to achieve their strategic goals while developing the next 
                generation of business leaders through hands-on experience and mentorship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="vision-card"
            >
              <div className="vision-icon">
                <FaEye />
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the premier student consulting organization at Michigan State University, 
                recognized for delivering exceptional value to our clients while fostering 
                a community of innovative thinkers and future business leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section ref={differenceRef} className="difference-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>What Makes Us Different</h2>
            <p>The unique advantages that set 180° DC MSU apart from traditional consulting firms</p>
          </motion.div>

          <div className="differences-grid">
            {differences.map((difference, index) => (
              <motion.div
                key={index}
                className="difference-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="difference-icon">{difference.icon}</div>
                <h3>{difference.title}</h3>
                <p>{difference.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="gallery-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Journey</h2>
            <p>Capturing moments from our projects, events, and team activities</p>
          </motion.div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="gallery-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-text">{image.title}</span>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="history-content"
          >
            <h2>Our Story</h2>
            <p>
              180 Degrees Consulting MSU was founded with a vision to bridge the gap between 
              academic learning and real-world business challenges. Since our establishment, 
              we have grown from a small group of passionate students to a thriving organization 
              that has made a significant impact on numerous organizations across Michigan.
            </p>
            <p>
              Our journey has been marked by continuous learning, innovation, and a commitment 
              to excellence. We've worked with startups, nonprofits, and established businesses, 
              helping them navigate complex challenges and achieve their strategic objectives.
            </p>
            <p>
              Today, we continue to uphold our founding principles while embracing new 
              technologies and methodologies to deliver even greater value to our clients 
              and provide our members with unparalleled learning experiences.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 