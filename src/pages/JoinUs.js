import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaUsers, 
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaStar,
  FaGraduationCap,
  FaHandshake,
  FaClipboardList,
  FaComments,
  FaUserTie,
  FaNewspaper,
  FaPagelines,
  FaParagraph,
  FaAddressCard
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
      title: "Business Analyst",
      description: "Focus on data analysis and market research to support consulting projects",
      requirements: [
        "Proficiency in Excel and data analysis",
        "Strong quantitative skills",
        "Attention to detail",
        "Minimum 3.2 GPA"
      ],
      responsibilities: [
        "Perform quantitative analysis",
        "Create financial models",
        "Conduct market research",
        "Prepare detailed reports"
      ]
    },
    {
      title: "Consultant",
      description: "Work directly with clients to analyze problems and develop solutions",
      requirements: [
        "Strong analytical skills",
        "Excellent communication abilities",
        "Ability to work in teams",
        "Minimum 3.0 GPA"
      ],
      responsibilities: [
        "Conduct research and data analysis",
        "Develop strategic recommendations",
        "Present findings to clients",
        "Collaborate with team members"
      ]
    },
    {
      title: "Project Manager",
      description: "Lead consulting teams and manage client relationships",
      requirements: [
        "Previous consulting experience",
        "Strong leadership skills",
        "Excellent project management",
        "Minimum 3.3 GPA"
      ],
      responsibilities: [
        "Lead project teams",
        "Manage client relationships",
        "Ensure project deliverables",
        "Mentor junior team members"
      ]
    }
  ];

  const timelineSteps = [
    {
      id: 1,
      title: "Application Submission",
      description: "Submit your application form with your updated resume.",
      tips: "Remember to submit your application as soon as you can as we get a lot of applicants, but don't rush and make sure to craft thoughful responses to all the questions.",
      date: "September 15-30",
      icon: <FaCalendarAlt />
    },
    {
      id: 2,
      title: "Initial Resume Screening",
      description: "Applications are reviewed and you will be notified if you are selected for an interview.",
      tips: "Ensure your resume is well-formatted and error-free. Make sure your resume highlights any relevant experiences that you can talk to.",
      date: "October 1-7",
      icon: <FaAddressCard />
    },
    {
      id: 3,
      title: "First Round Interview",
      description: "Behavioral interview with our recruitment team.",
      tips: "Prepare examples of your leadership and teamwork experiences. Also make sure to attend our behavioral interview workshop for the utmost preparation.",
      date: "October 8-15",
      icon: <FaHandshake />
    },
    {
      id: 4,
      title: "Second Round Interview",
      description: "Case study interview with our recruitment team.",
      tips: "Practice doing consulting case studies on youtube. Don't panic and just do your best, you got this! Nobody is expected to be perfect at casing but come in confident and be able to explain your ideas thoroughly. Make sure to take advantage of our case study workshop as it will give you a good idea of what to expect.",
      date: "October 16-22",
      icon: <FaUserTie />
    },
    {
      id: 5,
      title: "Final Round Interview",
      description: "Group case study interview with our recruitment team.",
      tips: "Make sure to come in with a positive attitude and be able to work well with others. Make sure to do some practice case studies with friends to best equip yourself for the group case setting.",
      date: "October 23-25",
      icon: <FaStar />
    },
    {
      id: 6,
      title: "Offers Extended",
      description: "Successful candidates receive offers to join the team.",
      // tips: "Congratulations! We can't wait to have you on the team and we're excited to see what you'll bring to the table.",
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
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text-box"
            >
              <h1>Join Our Team</h1>
              <p>Become part of the premier student consulting organization at MSU</p>
              <p>We're looking for passionate students who want to make a real impact in the business world while developing their professional skills.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-circle"
            >
              <div className="circle-container">
                <img 
                  src="/banquet.jpeg" 
                  alt="Banquet Event" 
                  className="circle-image"
                />
              </div>
            </motion.div>
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
            <h2>Roles & Progression</h2>
            <p>Explore the different roles and how you can grow within 180° DC MSU</p>
          </motion.div>

          <div className="roles-grid">
            {roles.map((role, idx) => (
              <React.Fragment key={role.title}>
                <motion.div
                  className="role-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <h3>{role.title}</h3>
                  <p className="role-description">{role.description}</p>
                  <div className="role-details">
                    <div className="requirements">
                      <h4>Requirements</h4>
                      <ul>
                        {role.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="responsibilities">
                      <h4>Responsibilities</h4>
                      <ul>
                        {role.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
                {idx < roles.length - 1 && (
                  <div className="role-arrow">
                    <span style={{ fontSize: '2.5rem', color: '#94C973', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>&#8594;</span>
                  </div>
                )}
              </React.Fragment>
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
            <h2>Application Process</h2>
            
          </motion.div>

          <div className="timeline-cards">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="timeline-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="timeline-card-header">
                  <div className="step-number">{step.id}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <div className="timeline-card-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.tips && (
                    <div className="timeline-tips">
                      <h4>Tips:</h4>
                      <p>{step.tips}</p>
                    </div>
                  )}
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="timeline-connector">
                    <div className="connector-line"></div>
                    <div className="connector-arrow">→</div>
                  </div>
                )}
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

      {/* Business Analysts Section */}
      <section className="business-analyst-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                <li><strong>Comprehensive Training:</strong> Workshops on problem-solving, consulting frameworks, and client communication.</li>
                <li><strong>Mentorship and Support:</strong> Access to experienced project managers and mentors who provide guidance throughout your consulting journey.</li>
                <li><strong>Career Development:</strong> Resume reviews and interview preparation tailored to your industry.</li>
                <li><strong>Real-World Project Experience:</strong> Collaboration on meaningful projects with socially conscious organizations, locally and globally.</li>
                <li><strong>Community and Connections:</strong> Access to a diverse and supportive network of current members and alumni who have excelled in consulting, finance, tech, and more.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs; 