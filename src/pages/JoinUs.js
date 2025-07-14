import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaUsers, 
  FaChartLine, 
  FaLightbulb, 
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaStar,
  FaGraduationCap,
  FaHandshake
} from 'react-icons/fa';
import './JoinUs.css';

const JoinUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const benefitsRef = useRef(null);
  const rolesRef = useRef(null);
  const timelineRef = useRef(null);
  
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isRolesInView = useInView(rolesRef, { once: true });
  const isTimelineInView = useInView(timelineRef, { once: true });

  const benefits = [
    {
      icon: <FaGraduationCap />,
      title: "Professional Development",
      description: "Gain hands-on consulting experience and develop critical business skills"
    },
    {
      icon: <FaHandshake />,
      title: "Networking Opportunities",
      description: "Connect with industry professionals, alumni, and fellow students"
    },
    {
      icon: <FaStar />,
      title: "Resume Enhancement",
      description: "Add valuable consulting experience to your professional portfolio"
    },
    {
      icon: <FaUsers />,
      title: "Leadership Experience",
      description: "Take on leadership roles and manage real client projects"
    }
  ];

  const roles = [
    {
      title: "Consultant",
      description: "Work directly with clients to analyze problems and develop solutions",
      responsibilities: [
        "Conduct research and data analysis",
        "Develop strategic recommendations",
        "Present findings to clients",
        "Collaborate with team members"
      ],
      requirements: [
        "Strong analytical skills",
        "Excellent communication abilities",
        "Ability to work in teams",
        "Minimum 3.0 GPA"
      ]
    },
    {
      title: "Business Analyst",
      description: "Focus on data analysis and market research to support consulting projects",
      responsibilities: [
        "Perform quantitative analysis",
        "Create financial models",
        "Conduct market research",
        "Prepare detailed reports"
      ],
      requirements: [
        "Proficiency in Excel and data analysis",
        "Strong quantitative skills",
        "Attention to detail",
        "Minimum 3.2 GPA"
      ]
    },
    {
      title: "Project Manager",
      description: "Lead consulting teams and manage client relationships",
      responsibilities: [
        "Lead project teams",
        "Manage client relationships",
        "Ensure project deliverables",
        "Mentor junior team members"
      ],
      requirements: [
        "Previous consulting experience",
        "Strong leadership skills",
        "Excellent project management",
        "Minimum 3.3 GPA"
      ]
    }
  ];

  const timelineSteps = [
    {
      id: 1,
      title: "Application Submission",
      description: "Submit your application with resume and cover letter",
      date: "September 15-30",
      icon: <FaCalendarAlt />
    },
    {
      id: 2,
      title: "Initial Screening",
      description: "Applications reviewed by our recruitment team",
      date: "October 1-7",
      icon: <FaUsers />
    },
    {
      id: 3,
      title: "First Round Interview",
      description: "Behavioral and case interview with team members",
      date: "October 8-15",
      icon: <FaHandshake />
    },
    {
      id: 4,
      title: "Final Round Interview",
      description: "Case study presentation and team fit assessment",
      date: "October 16-22",
      icon: <FaStar />
    },
    {
      id: 5,
      title: "Offers Extended",
      description: "Successful candidates receive offers to join the team",
      date: "October 23-25",
      icon: <FaGraduationCap />
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What majors are eligible to apply?",
      answer: "We welcome students from all majors! Our team includes students from Business, Engineering, Arts & Sciences, and more. We value diverse perspectives and skills."
    },
    {
      id: 2,
      question: "How much time commitment is required?",
      answer: "Team members typically spend 8-12 hours per week on consulting projects, including client meetings, research, and team collaboration."
    },
    {
      id: 3,
      question: "Do I need previous consulting experience?",
      answer: "No previous consulting experience is required! We provide comprehensive training and mentorship to help you succeed."
    },
    {
      id: 4,
      question: "What is the application process like?",
      answer: "The process includes submitting an application, participating in interviews, and completing a case study. We look for analytical thinking, communication skills, and team collaboration."
    },
    {
      id: 5,
      question: "Are there opportunities for leadership roles?",
      answer: "Yes! We offer various leadership opportunities including Project Manager positions and Executive Board roles for experienced team members."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="join-us">
      {/* Hero Section */}
      <section className="join-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="join-hero-content"
          >
            <h1>Join Our Team</h1>
            <p>Become part of the premier student consulting organization at MSU</p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section ref={benefitsRef} className="benefits-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Why Join 180° DC MSU?</h2>
            <p>Discover the benefits of being part of our consulting team</p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section ref={rolesRef} className="roles-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Available Roles</h2>
            <p>Find the perfect role that matches your skills and interests</p>
          </motion.div>

          <div className="roles-grid">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                className="role-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3>{role.title}</h3>
                <p className="role-description">{role.description}</p>
                
                <div className="role-details">
                  <div className="responsibilities">
                    <h4>Responsibilities</h4>
                    <ul>
                      {role.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="requirements">
                    <h4>Requirements</h4>
                    <ul>
                      {role.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section ref={timelineRef} className="timeline-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Application Timeline</h2>
            <p>Important dates for the Fall 2024 recruitment cycle</p>
          </motion.div>

          <div className="timeline">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-date">{step.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about joining our team</p>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  {openFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFaq === faq.id ? 'auto' : 0,
                    opacity: openFaq === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="apply-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Join Our Team?</h2>
            <p>Take the first step towards an exciting consulting career with 180° DC MSU</p>
            <a href="/contact" className="btn btn-primary">
              Apply Now <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs; 