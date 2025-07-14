import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaChartLine, 
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import './ForClients.css';

const ForClients = () => {
  const timelineRef = useRef(null);
  const projectsRef = useRef(null);
  
  const isTimelineInView = useInView(timelineRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });

  const timelineSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "We meet to understand your organization's challenges and objectives",
      duration: "1-2 weeks",
      icon: <FaUsers />
    },
    {
      id: 2,
      title: "Project Planning",
      description: "Our team develops a comprehensive project plan and timeline",
      duration: "1 week",
      icon: <FaCalendarAlt />
    },
    {
      id: 3,
      title: "Research & Analysis",
      description: "In-depth research and data analysis to identify solutions",
      duration: "4-6 weeks",
      icon: <FaChartLine />
    },
    {
      id: 4,
      title: "Solution Development",
      description: "Creating innovative strategies and actionable recommendations",
      duration: "3-4 weeks",
      icon: <FaLightbulb />
    },
    {
      id: 5,
      title: "Implementation Support",
      description: "Guiding you through the implementation of our recommendations",
      duration: "2-3 weeks",
      icon: <FaCheckCircle />
    }
  ];

  const projectCards = [
    {
      id: 1,
      clientName: "TechStart Inc.",
      clientLogo: "https://via.placeholder.com/100x100/1a365d/ffffff?text=TS",
      challenge: "Struggling with market expansion and customer acquisition in competitive tech sector",
      solution: "Developed comprehensive market entry strategy with targeted customer segmentation and digital marketing optimization",
      impact: "40% increase in customer acquisition, 25% improvement in market share within 6 months",
      industry: "Technology"
    },
    {
      id: 2,
      clientName: "GreenSolutions",
      clientLogo: "https://via.placeholder.com/100x100/38b2ac/ffffff?text=GS",
      challenge: "Needed to optimize supply chain operations and reduce environmental impact",
      solution: "Implemented sustainable supply chain practices with cost optimization and carbon footprint reduction strategies",
      impact: "30% reduction in operational costs, 50% decrease in carbon emissions",
      industry: "Sustainability"
    },
    {
      id: 3,
      clientName: "CommunityFirst",
      clientLogo: "https://via.placeholder.com/100x100/f6ad55/ffffff?text=CF",
      challenge: "Required strategic planning for nonprofit growth and donor engagement",
      solution: "Created comprehensive fundraising strategy with donor relationship management and program expansion plan",
      impact: "60% increase in donor contributions, 35% growth in program reach",
      industry: "Nonprofit"
    },
    {
      id: 4,
      clientName: "Local Retail Chain",
      clientLogo: "https://via.placeholder.com/100x100/e53e3e/ffffff?text=LR",
      challenge: "Facing declining sales and need for digital transformation",
      solution: "Developed omnichannel retail strategy with e-commerce integration and customer experience optimization",
      impact: "45% increase in online sales, 20% improvement in customer retention",
      industry: "Retail"
    }
  ];

  return (
    <div className="for-clients">
      {/* Hero Section */}
      <section className="clients-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="clients-hero-content"
          >
            <h1>For Clients</h1>
            <p>Transform your organization with student-driven consulting excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Project Timeline */}
      <section ref={timelineRef} className="timeline-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Project Timeline</h2>
            <p>From initial consultation to implementation, we guide you through every step</p>
          </motion.div>

          <div className="timeline">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-duration">{step.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section ref={projectsRef} className="projects-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Success Stories</h2>
            <p>Real results from organizations we've helped transform</p>
          </motion.div>

          <div className="projects-grid">
            {projectCards.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="project-header">
                  <div className="client-logo">
                    <img src={project.clientLogo} alt={project.clientName} />
                  </div>
                  <div className="client-info">
                    <h3>{project.clientName}</h3>
                    <span className="industry">{project.industry}</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-section">
                    <h4>Challenge</h4>
                    <p>{project.challenge}</p>
                  </div>

                  <div className="project-section">
                    <h4>Our Solution</h4>
                    <p>{project.solution}</p>
                  </div>

                  <div className="project-section impact">
                    <h4>Impact</h4>
                    <p>{project.impact}</p>
                  </div>
                </div>

                <div className="project-footer">
                  <a href="/contact" className="learn-more">
                    Learn More <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Why Choose 180° DC MSU?</h2>
            <p>The unique advantages of working with student consultants</p>
          </motion.div>

          <div className="advantages-grid">
            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaUsers />
              </div>
              <h3>Fresh Perspectives</h3>
              <p>Young, innovative minds bring new ideas and approaches to traditional business challenges.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaChartLine />
              </div>
              <h3>Cost-Effective</h3>
              <p>High-quality consulting services at a fraction of traditional consulting firm costs.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaLightbulb />
              </div>
              <h3>Innovation Focus</h3>
              <p>Students are trained in the latest business methodologies and technologies.</p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaCheckCircle />
              </div>
              <h3>Proven Results</h3>
              <p>Track record of delivering measurable impact for organizations across various industries.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Transform Your Organization?</h2>
            <p>Let's discuss how our student consulting team can help you achieve your goals.</p>
            <a href="/contact" className="btn btn-primary">
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForClients; 