import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaDollarSign,
  FaSearch,
  FaExpand,
  FaCogs,
  FaSitemap,
  FaLaptopCode,
} from "react-icons/fa";
import "./ForClients.css";
import MinskoffPavilion from "../assets/Minskoff-Pavilion-Lawn.jpg";

const ForClients = () => {
  const timelineRef = useRef(null);
  const projectsRef = useRef(null);

  const isTimelineInView = useInView(timelineRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });

  const timelineSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description:
        "We will get to know your organization, its mission, operations, and both short-term and long-term goals. We will also discuss any challenges you're facing and how we can assist.",
      duration: "1-2 weeks",
      icon: <FaUsers />,
    },
    {
      id: 2,
      title: "Team Introduction",
      description:
        "Meet the team who will work with you over the next 7–9 weeks. This first call will involve introductions, discussions about pain points, clarifying questions, and drafting a project roadmap and framework.",
      duration: "1 week",
      icon: <FaCalendarAlt />,
    },
    {
      id: 3,
      title: "Development Phase",
      description:
        "The team works to develop personalized recommendations through ideation, research, data analysis, and synthesis, with weekly updates on their progress.",
      duration: "4-6 weeks",
      icon: <FaChartLine />,
    },
    {
      id: 4,
      title: "Mid-Project Check-In",
      description:
        "A formal review to ensure the team is on track, followed by a presentation or written deliverable, providing enough time to adjust strategy if needed.",
      duration: "3-4 weeks",
      icon: <FaLightbulb />,
    },
    {
      id: 5,
      title: "Final Presentation",
      description:
        "After review by the Director of Quality Assurance, E-Board, and Project Advisors, the team will present their findings and recommendations.",
      duration: "2-3 weeks",
      icon: <FaCheckCircle />,
    },
    {
      id: 6,
      title: "Feedback Collection",
      description:
        "We will obtain feedback on the team's performance, our branch's onboarding process, communication, and the quality deliverables.",
      duration: "1 week",
      icon: <FaCheckCircle />,
    },
  ];

  const projectCards = [
    {
      id: 1,
      clientName: "TechStart Inc.",
      clientLogo: "https://via.placeholder.com/100x100/1a365d/ffffff?text=TS",
      challenge:
        "Struggling with market expansion and customer acquisition in competitive tech sector",
      solution:
        "Developed comprehensive market entry strategy with targeted customer segmentation and digital marketing optimization",
      impact:
        "40% increase in customer acquisition, 25% improvement in market share within 6 months",
      industry: "Technology",
    },
    {
      id: 2,
      clientName: "GreenSolutions",
      clientLogo: "https://via.placeholder.com/100x100/38b2ac/ffffff?text=GS",
      challenge:
        "Needed to optimize supply chain operations and reduce environmental impact",
      solution:
        "Implemented sustainable supply chain practices with cost optimization and carbon footprint reduction strategies",
      impact:
        "30% reduction in operational costs, 50% decrease in carbon emissions",
      industry: "Sustainability",
    },
    {
      id: 3,
      clientName: "CommunityFirst",
      clientLogo: "https://via.placeholder.com/100x100/f6ad55/ffffff?text=CF",
      challenge:
        "Required strategic planning for nonprofit growth and donor engagement",
      solution:
        "Created comprehensive fundraising strategy with donor relationship management and program expansion plan",
      impact:
        "60% increase in donor contributions, 35% growth in program reach",
      industry: "Nonprofit",
    },
    {
      id: 4,
      clientName: "Local Retail Chain",
      clientLogo: "https://via.placeholder.com/100x100/e53e3e/ffffff?text=LR",
      challenge: "Facing declining sales and need for digital transformation",
      solution:
        "Developed omnichannel retail strategy with e-commerce integration and customer experience optimization",
      impact:
        "45% increase in online sales, 20% improvement in customer retention",
      industry: "Retail",
    },
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
            <p>
              Transform your organization with student-driven consulting
              excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-section" className="why-choose-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 style={{ color: "#94C973" }}>Why Choose 180° DC MSU?</h2>
            <p>
              Comprehensive consulting expertise across all key business areas
            </p>
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
                <FaDollarSign />
              </div>
              <h3>Revenue Generation</h3>
              <p>
                Strategic pricing models, sales funnel optimization, and new
                revenue stream identification to maximize your organization's
                financial performance.
              </p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaSearch />
              </div>
              <h3>Market Research</h3>
              <p>
                Competitive analysis, consumer behavior studies, and market
                opportunity assessment to inform strategic decision-making.
              </p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaExpand />
              </div>
              <h3>Expansion Strategy</h3>
              <p>
                Market entry planning, growth opportunity analysis, and
                scalability assessment to drive sustainable business expansion.
              </p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaCogs />
              </div>
              <h3>Operational Efficiency</h3>
              <p>
                Process optimization, resource allocation, and cost reduction
                strategies to streamline operations and improve productivity.
              </p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaSitemap />
              </div>
              <h3>Organization</h3>
              <p>
                Organizational structure design, team development strategies,
                and change management to optimize your human capital.
              </p>
            </motion.div>

            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="advantage-icon">
                <FaLaptopCode />
              </div>
              <h3>Technology</h3>
              <p>
                Digital transformation, tech stack assessment, and
                implementation roadmap to modernize your technological
                infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      {/* <section ref={timelineRef} className="timeline-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Our Project Journey</h2>
          <p>
            Experience our streamlined approach to delivering exceptional
            results
          </p>
        </motion.div>

        <div className="modern-timeline">
          <div className="timeline-progress-container">
            <motion.div
              className="timeline-progress-bar"
              initial={{ width: 0 }}
              animate={isTimelineInView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          <div className="timeline-steps-container">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="modern-timeline-step"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isTimelineInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="step-number">{step.id}</div>
                <div className="modern-step-content">
                  <div className="step-icon-modern">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-duration-modern">
                    <span>{step.duration}</span>
                  </div>
                </div>
                <div className="step-connector">
                  <motion.div
                    className="connector-dot"
                    initial={{ scale: 0 }}
                    animate={isTimelineInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Project Cards */}
      {/* <section ref={projectsRef} className="projects-section">
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
      </section> */}

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
            <p>
              Let's discuss how our student consulting team can help you achieve
              your goals.
            </p>
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
