import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaBullseye, 
  FaEye, 
  FaRocket, 
  FaUsers, 
  FaChartLine, 
  FaLightbulb, 
  FaGlobe,
  FaHands,
  FaWrench,
  FaBuilding,
  FaHandsHelping,
  FaForward,
  FaLongArrowAltRight,
  FaRegArrowAltCircleRight
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
      icon: <FaGlobe />,
      title: "Global Network, Local Focus",
      description: "We’re part of a global consulting network, but tailor every project to meet the needs of our diverse clients."
    },
    {
      icon: <FaUsers />,
      title: "Interdisciplinary Teams",
      description: "Our members come from diverse academic backgrounds—engineering, pre-med, business, and more—bringing unique perspectives to each project."
    },
    {
      icon: <FaHandsHelping />,
      title: "Hands-On Leadership",
      description: "All team members contribute directly to projects with real responsibility and opportunities to grow."
    },
    {
      icon: <FaForward />,
      title: "Best Foot Forward",
      description: "We maintain high standards for recruitment, with an extremely selective application process to ensure quality across every engagement."
    },
    {
      icon: <FaBullseye />,
      title: "Client-Centered Approach",
      description: "We structure our work around the goals and capacity of each client with every solution is tailored and actionable."
    },
    {
      icon: <FaChartLine />,
      title: "Long-Term Growth",
      description: "We go beyond deliverables to help organizations build sustainable strategies and roadmaps for the future."
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
            <h1>About 180 DC MSU</h1>
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
              Welcome to 180 Degrees Consulting at Michigan State University. As President, I’m proud to lead a diverse and driven team of students who are passionate about creating real-world impact through strategic problem solving.
              </p>
              <p>
              Offering the best of the best at MSU, what makes 180DC MSU unique is the way we bridge academic insight with hands-on consulting experience. Our members don’t just learn in the classroom—they apply those lessons to help startups, nonprofits, and businesses tackle real challenges across industries.
              </p>
              <p>
              Every project is an opportunity to generate meaningful results for our clients while developing the next generation of leaders. We take pride not only in the work we deliver, but in the collaborative, growth-focused environment we’ve built for our team.
              </p>
              <p>
              Whether you’re a prospective client, a student interested in joining, or simply curious about our work, I invite you to explore our website and discover what makes 180DC MSU one of the most impactful organizations on campus.
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
              We provide mission-driven organizations with high-quality consulting services that help them overcome challenges, scale their impact, and operate more effectively. Our team is committed to producing work that is thoughtful, well-researched, and actionable.
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
              We envision a world where every organization driving positive social change—regardless of size, sector, or location—has access to high-quality strategic support that empowers them to maximize their impact and achieve lasting transformation.
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
            <p>The unique advantages that set 180 DC MSU apart from traditional consulting firms</p>
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

          <div className="fun-moments-gallery">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="gallery-item"
            >
              <img src="/bidnight.jpeg" alt="Bid Night" />
              <div className="gallery-caption">
                <h4>Bid Night</h4>
                <p>Celebrating our new members is a huge part of our culture.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="gallery-item"
            >
              <img src="/chicago.jpeg" alt="Chicago Roadshow" />
              <div className="gallery-caption">
                <h4>Chicago Roadshow</h4>
                <p>We take many trips to places like Chicago to network with top firms and other consulting organizations.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="gallery-item"
            >
              <img src="/bcg.jpeg" alt="BCG Visit" />
              <div className="gallery-caption">
                <h4>Company Visits</h4>
                <p>We visit firms like BCG to learn more about their processes and culture.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="gallery-item"
            >
              <img src="/mmm.jpeg" alt="Mass Member Meetings" />
              <div className="gallery-caption">
                <h4>Mass Member Meetings</h4>
                <p>Our MMM's are always a fun time to touchbase and explore the progress of other teams.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="gallery-item"
            >
              <img src="/eboardbanquet.JPG" alt="E-board Banquet" />
              <div className="gallery-caption">
                <h4>Banquet</h4>
                <p>We always have a great time at our annual end of year banquet.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="gallery-item"
            >
              <img src="/retreat.JPG" alt="Retreat" />
              <div className="gallery-caption">
                <h4>Team Retreat</h4>
                <p>From gingerbread houses to team bonding activities, our retreats are always a blast.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About; 