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
  const presidentRef = useRef(null);
  const missionRef = useRef(null);
  const differenceRef = useRef(null);
  const galleryRef = useRef(null);
  
  const isPresidentInView = useInView(presidentRef, { once: true });
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

      {/* President's Welcome Section */}
      <section ref={presidentRef} className="president-section">
        <div className="container">
          <div className="president-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isPresidentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="president-image"
            >
              <img 
                src="/sahib.webp" 
                alt="President Sahib" 
                className="president-photo"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isPresidentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="president-content"
            >
              <h2>President's Welcome</h2>
              <p className="president-name">Sahib Sekhon</p>
              <p>
                Welcome to 180 Degrees Consulting MSU! As the President of this incredible 
                organization, I am proud to lead a team of dedicated students who are 
                passionate about making a real impact in the business world.
              </p>
              <p>
                Our organization represents the perfect blend of academic excellence and 
                practical business experience. We believe that the best learning happens 
                when theory meets practice, and that's exactly what we offer to both our 
                clients and our members.
              </p>
              <p>
                What sets us apart is our commitment to delivering high-quality consulting 
                services while fostering a supportive environment where students can grow, 
                learn, and develop their professional skills. Every project we undertake 
                is an opportunity to create value for our clients while building the next 
                generation of business leaders.
              </p>
              <p>
                I invite you to explore our website and learn more about how we can help 
                your organization achieve its goals, or how you can become part of our 
                dynamic team.
              </p>
            </motion.div>
          </div>
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

      {/* Gallery Section (now Business Analysts Section) */}
      <section ref={galleryRef} className="gallery-section business-analyst-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Business Analysts</h2>
          </motion.div>

          <div className="ba-grid">
            <div className="ba-image">
              <img 
                src="/ba_pic.jpeg" 
                alt="Business Analyst Team" 
                className="ba-photo"
              />
            </div>
            <div className="ba-content">
              <h3>Professional Development</h3>
              <ul className="ba-bullets">
                {/* Add bullet points here */}
                <li><strong>Comprehensive Training:</strong> Workshops on problem-solving, consulting frameworks, and client communication.</li>
                <li><strong>Mentorship and Support:</strong> Access to experienced project managers and mentors who provide guidance throughout your consulting journey.</li>
                <li><strong>Career Development:</strong> Resume reviews and interview preparation tailored to your industry.</li>
                <li><strong>Real-World Project Experience:</strong> Collaboration on meaningful projects with socially conscious organizations, locally and globally.</li>
                <li><strong>Community and Connections:</strong> ccess to a diverse and supportive network of current members and alumni who have excelled in consulting, finance, tech, and more.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 