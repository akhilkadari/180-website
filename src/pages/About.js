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

          <div className="fun-moments-collage">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/bidnight.jpeg" alt="Bid Night" />
              <div className="collage-caption">
                <h4>Bid Night</h4>
                <p>Celebrating our new members is a huge part of our culture.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/chicago.jpeg" alt="Chicago Roadshow" />
              <div className="collage-caption">
                <h4>Chicago Roadshow</h4>
                <p>We take many trips to places like Chicago to network with top firms and other consulting organizations.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/bcg.jpeg" alt="BCG Visit" />
              <div className="collage-caption">
                <h4>Company Visits</h4>
                <p>We visit firms like BCG to learn more about their processes and culture.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/minskoff.jpg" alt="Collaboration" />
              <div className="collage-caption">
                <h4>Collaboration</h4>
                <p>Working together to deliver exceptional results for our clients</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/eboardbanquet.JPG" alt="E-board Banquet" />
              <div className="collage-caption">
                <h4>Banquet</h4>
                <p>We always have a great time at our annual end of year banquet.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/retreat.JPG" alt="Retreat" />
              <div className="collage-caption">
                <h4>Team Retreat</h4>
                <p>From gingerbread houses to team bonding activities, our retreats are always a blast.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/silly_group_pic.jpeg" alt="Fun Times" />
              <div className="collage-caption">
                <h4>Fun Times</h4>
                <p>Enjoying the journey together with laughter and joy</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/sahib.webp" alt="Networking" />
              <div className="collage-caption">
                <h4>Networking</h4>
                <p>Connecting with industry professionals and expanding horizons</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="collage-item"
            >
              <img src="/180Pic1.jpg" alt="Growth" />
              <div className="collage-caption">
                <h4>Growth</h4>
                <p>Continuous learning and development as a team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About; 