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

      {/* Fun Moments Section */}
      <section className="fun-moments-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Fun Moments</h2>
            <p>Capturing the memories and experiences that make our team special</p>
          </motion.div>

          <div className="fun-moments-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="fun-moment-item"
            >
              <div className="fun-moment-image">
                <img src="/silly_group_pic.jpeg" alt="Team Fun Moment" />
              </div>
              <div className="fun-moment-caption">
                <h4>Team Building</h4>
                <p>Building lasting friendships while solving complex business challenges</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="fun-moment-item"
            >
              <div className="fun-moment-image">
                <img src="/broad night.jpg" alt="Professional Development" />
              </div>
              <div className="fun-moment-caption">
                <h4>Professional Growth</h4>
                <p>Developing skills and confidence through real-world consulting projects</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="fun-moment-item"
            >
              <div className="fun-moment-image">
                <img src="/banquet.jpeg" alt="Celebration" />
              </div>
              <div className="fun-moment-caption">
                <h4>Celebrating Success</h4>
                <p>Recognizing achievements and milestones together as a team</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="fun-moment-item"
            >
              <div className="fun-moment-image">
                <img src="/minskoff.jpg" alt="Collaboration" />
              </div>
              <div className="fun-moment-caption">
                <h4>Collaboration</h4>
                <p>Working together to deliver exceptional results for our clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About; 