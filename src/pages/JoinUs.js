import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaUsers, 
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaGraduationCap,
  FaHandshake,
  FaClipboardList,
  FaComments,
  FaUserTie,
  FaNewspaper,
  FaPagelines,
  FaParagraph,
  FaAddressCard,
  FaTrain,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaWrench
} from 'react-icons/fa';
import './JoinUs.css';

const JoinUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const benefitsRef = useRef(null);
  const rolesRef = useRef(null);
  const timelineRef = useRef(null);
  
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isRolesInView = useInView(rolesRef, { once: true });
  const isTimelineInView = useInView(timelineRef, { once: true });

  const nextRole = () => {
    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
  };

  const prevRole = () => {
    setCurrentRoleIndex((prev) => (prev - 1 + roles.length) % roles.length);
  };

  const benefits = [
    {
      icon: <FaWrench />,
      title: "Real-World Experience",
      description: "Our teams don’t work on hypotheticals. We’ve helped startups refine go-to-market strategies, guided nonprofits through growth planning, and delivered client-ready solutions that have been implemented within weeks."
    },
    {
      icon: <FaNetworkWired />,
      title: "Global and Local Networks",
      description: "With 150 branches worldwide, you’ll join a consulting ecosystem that spans five continents. From project mentorship to alumni chats with consultants around the globe, the connections extend far beyond East Lansing."
    },
    {
      icon: <FaGraduationCap />,
      title: "Growth and Leadership",
      description: "You’ll learn to lead client calls, build models, and present to real executives. Many of our consultants take on some type of leadership roles in their second semester, shaping client outcomes and internal strategy before most clubs let you vote."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Tailored Training That Meets You Where You Are",
      description: "From pre-med to computer science to business, our onboarding is designed to match your background and build your confidence. Every analyst receives hands-on training customized to their experience level and academic strengths."
    }
  ];

  const roles = [
    {
      title: "Business Analyst",
      description: "Engage in a professional development program that provides industry-tailored recruitment expertise and a consulting skill set",
      requirements: [
        "Well formatted and up-to-date resume",
        "Strong communication skills",
        "Great work ethic",
        "Preferrably above a 3.5 GPA"
      ],
      responsibilities: [
        "Attend weekly training sessions with VP of Recruitment",
        "Engage in mentorship meetings with senior mentors",
        "Work on and deliver industry-based presentations",
        "Support consulting projects when necessary"
      ]
    },
    {
      title: "Consultant",
      description: "Work directly with clients to analyze problems and develop sound recommendations based on bottlenecks and inefficiencies within organizations",
      requirements: [
        "Completion of Business Analyst Semester",
        "Excellent communication and teamwork skills",
        "Ability to meet tight deadlines",
        "Availability for project meetings"
      ],
      responsibilities: [
        "Conduct research on problems within client organizations",
        "Meet project managers' deadlines and requirements",
        "Collaborate with team members to develop project deliverables",
        "Present findings to clients"
      ]
    },
    {
      title: "Project Manager",
      description: "Oversee consulting teams and create project roadmap while being the first point of contact between clients and team members",
      requirements: [
        "Previous consulting project experience",
        "Strong leadership skills",
        "Astounding communication skills",
        "Active within organization"
      ],
      responsibilities: [
        "Lead project teams",
        "Manage client relationships",
        "Set deadlines and expectations for team members",
        "Mentor junior team members"
      ]
    }
  ];

  const timelineSteps = [
    {
      id: 1,
      title: "Application Submission",
      description: "Submit your application form with your updated resume.",
      tips: "Remember to submit your application as soon as you can as we get a lot of applicants, and make sure to craft thoughful responses to all the questions.",
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
      question: "What is the application process like?",
      answer: "The process includes submitting an application, participating in interviews, and completing a case study. We look for analytical thinking, communication skills, and team collaboration."
    },

    {
      id: 2,
      question: "What majors are eligible to apply?",
      answer: "We welcome students from all majors! Our team includes students from Business, Engineering, Arts & Sciences, and more. We value diverse perspectives and skills."
    },
    {
      id: 3,
      question: "How much time commitment is required?",
      answer: "Team members typically spend 7-10 hours per week on consulting projects, including client meetings, research, and team collaboration. Business analysts can expect to meet 1-2 times a week for their training sessions. "
    },
    {
      id: 4,
      question: "Who do we work with?",
      answer: "We partner with both for-profit and nonprofit organizations across a diverse range of industries, serving entities that span from local enterprises to nationally recognized institutions."
    },
    {
      id: 5,
      question: "Do I need previous consulting experience?",
      answer: "No previous consulting experience is required! We provide comprehensive training and mentorship to help you succeed."
    },
    
    {
      id: 6,
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
              <button className="btn btn-primary" disabled>
                Application Dropping Soon
              </button>
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
            <h2>Business Analyst Testimonials</h2>
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
              <div className="testimonial-placeholder">
                <h4>Testimonial 1</h4>
                <p>"180° DC MSU provided me with invaluable experience that directly contributed to my success at my internship with Cherry Republic. The hands-on projects and mentorship were game-changers for my career development."</p>
                <span className="testimonial-author">- Andrew Mossington</span>
              </div>
              
              <div className="testimonial-placeholder">
                <h4>Testimonial 2</h4>
                <p>"My semester as a Business Analyst at 180 Degrees Consulting gave me hands-on experience solving real client challenges, sharpening the problem-solving and data skills that prepared me to hit the ground running at Delta Dental"</p>
                <span className="testimonial-author">- Kavin Chana</span>
              </div>
              
              <div className="testimonial-placeholder">
                <h4>Testimonial 3</h4>
                <p>"Being part of 180° DC MSU's Business Analyst team taught me how to think strategically and communicate complex ideas effectively. The experience was transformative for my professional growth."</p>
                <span className="testimonial-author">- Neha Khedekar</span>
              </div>
            </div>
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
            {/* Desktop view - show all roles */}
            <div className="roles-desktop">
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

            {/* Mobile view - carousel with navigation */}
            <div className="roles-mobile">
              <motion.div
                className="role-card"
                key={currentRoleIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{roles[currentRoleIndex].title}</h3>
                <p className="role-description">{roles[currentRoleIndex].description}</p>
                <div className="role-details">
                  <div className="requirements">
                    <h4>Requirements</h4>
                    <ul>
                      {roles[currentRoleIndex].requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="responsibilities">
                    <h4>Responsibilities</h4>
                    <ul>
                      {roles[currentRoleIndex].responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <div className="roles-navigation">
                <button 
                  className="nav-arrow prev-arrow" 
                  onClick={prevRole}
                  disabled={currentRoleIndex === 0}
                  aria-label="Previous role"
                >
                  <FaArrowLeft />
                </button>
                <div className="role-indicators">
                  {roles.map((_, idx) => (
                    <button
                      key={idx}
                      className={`role-indicator ${idx === currentRoleIndex ? 'active' : ''}`}
                      onClick={() => setCurrentRoleIndex(idx)}
                      aria-label={`Go to ${roles[idx].title} role`}
                    />
                  ))}
                </div>
                <button 
                  className="nav-arrow next-arrow" 
                  onClick={nextRole}
                  disabled={currentRoleIndex === roles.length - 1}
                  aria-label="Next role"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section id="timeline-section" ref={timelineRef} className="timeline-section">
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
      <section id="faq-section" className="faq-section">
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

    </div>
  );
};

export default JoinUs; 