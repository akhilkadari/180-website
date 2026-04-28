import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaGraduationCap,
  FaHandshake,
  FaUserTie,
  FaAddressCard,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaWrench,
  FaChartLine,
  FaSitemap,
  FaCheckCircle,
} from "react-icons/fa";
import GlowCard from "../components/GlowCard";
import "./JoinUs.css";

const benefits = [
  {
    icon: <FaWrench />,
    title: "Real-World Experience",
    description:
      "Our teams don't work on hypotheticals. We've helped startups refine go-to-market strategies, guided nonprofits through growth planning, and delivered client-ready solutions implemented within weeks.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Global & Local Networks",
    description:
      "With 180+ branches worldwide, you'll join a consulting ecosystem spanning six continents. From project mentorship to alumni chats with consultants around the globe, the connections extend far beyond East Lansing.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Growth & Leadership",
    description:
      "You'll learn to lead client calls, build models, and present to real executives. Many of our consultants take on leadership roles in their second semester.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Tailored Training",
    description:
      "From pre-med to computer science to business, our onboarding is designed to match your background and build your confidence. Hands-on training customized to your experience.",
  },
];

const roles = [
  {
    title: "Business Analyst",
    duration: "Semester 1",
    icon: <FaChartLine />,
    description:
      "A professional development program with industry-tailored recruitment expertise and a foundational consulting skill set.",
    requirements: [
      "Up-to-date resume",
      "Strong communication skills",
      "Strong work ethic",
      "Preferably above 3.5 GPA",
    ],
    responsibilities: [
      "Weekly training with VP of Recruitment",
      "Mentorship meetings with senior mentors",
      "Industry-based presentations",
      "Support consulting projects",
    ],
  },
  {
    title: "Consultant",
    duration: "Semester 2+",
    icon: <FaUserTie />,
    description:
      "Work directly with clients to analyze problems and deliver recommendations on bottlenecks and inefficiencies.",
    requirements: [
      "Completion of Business Analyst semester",
      "Communication and teamwork skills",
      "Ability to meet tight deadlines",
      "Availability for project meetings",
    ],
    responsibilities: [
      "Research client problems",
      "Meet PM deadlines and requirements",
      "Develop project deliverables with team",
      "Present findings to clients",
    ],
  },
  {
    title: "Project Manager",
    duration: "Semester 3+",
    icon: <FaSitemap />,
    description:
      "Oversee consulting teams, set the project roadmap, and serve as primary contact between clients and team members.",
    requirements: [
      "Previous consulting project experience",
      "Strong leadership skills",
      "Excellent communication",
      "Active in the organization",
    ],
    responsibilities: [
      "Lead project teams",
      "Manage client relationships",
      "Set deadlines and expectations",
      "Mentor junior team members",
    ],
  },
];

const timelineSteps = [
  {
    id: 1,
    title: "Application",
    description:
      "Submit your application form with your updated resume.",
    tips: "Apply early. Slots fill up. Craft thoughtful responses for every question.",
    date: "Sep 15–30",
    icon: <FaCalendarAlt />,
  },
  {
    id: 2,
    title: "Resume Screening",
    description:
      "Applications are reviewed and you'll be notified if selected for an interview.",
    tips: "Format cleanly, no errors. Highlight relevant experiences you can speak to.",
    date: "Oct 1–7",
    icon: <FaAddressCard />,
  },
  {
    id: 3,
    title: "First-Round Interview",
    description:
      "45-minute behavioral and case interview with our recruitment team.",
    tips: "Prepare clear behavioral examples. Practice walking through case logic out loud.",
    date: "Oct 8–15",
    icon: <FaHandshake />,
  },
  {
    id: 4,
    title: "Second-Round Interview",
    description:
      "Individual take-home case with a short presentation.",
    tips: "Be structured. Lead with your recommendation, key insights, and assumptions.",
    date: "Oct 16–22",
    icon: <FaUserTie />,
  },
  {
    id: 5,
    title: "Final Round",
    description:
      "Group case study interview with our recruitment team.",
    tips: "Bring a positive attitude. Practice group cases with friends beforehand.",
    date: "Oct 23–25",
    icon: <FaStar />,
  },
  {
    id: 6,
    title: "Offers",
    description:
      "Successful candidates receive offers to join the team.",
    date: "Oct 26",
    icon: <FaGraduationCap />,
  },
];

const testimonials = [
  {
    quote:
      "180 DC MSU provided me with invaluable experience that directly contributed to my success at my internship with Cherry Republic. The hands-on projects and mentorship were game-changers for my career development.",
    name: "Andrew Mossington",
    role: "Class of 2025",
  },
  {
    quote:
      "My semester as a Business Analyst at 180 Degrees Consulting gave me hands-on experience solving real client challenges, sharpening the problem-solving and data skills that prepared me to hit the ground running at Delta Dental.",
    name: "Kavin Chana",
    role: "Class of 2025",
  },
  {
    quote:
      "Being part of 180 DC MSU's Business Analyst team taught me how to think strategically and communicate complex ideas effectively. The experience was transformative for my professional growth.",
    name: "Neha Khedekar",
    role: "Class of 2026",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is the application process like?",
    answer:
      "The process includes submitting an application, participating in interviews, and completing a case study. We look for analytical thinking, communication skills, and team collaboration.",
  },
  {
    id: 2,
    question: "What majors are eligible to apply?",
    answer:
      "We welcome students from all majors. Our team includes students from Business, Engineering, Arts & Sciences, and more. We value diverse perspectives.",
  },
  {
    id: 3,
    question: "How much time commitment is required?",
    answer:
      "Team members typically spend 7–10 hours per week on consulting projects, including client meetings, research, and team collaboration. Business analysts can expect to meet 1–2 times a week for training sessions.",
  },
  {
    id: 4,
    question: "Who do we work with?",
    answer:
      "We partner with both for-profit and nonprofit organizations across diverse industries, from local enterprises to nationally recognized institutions.",
  },
  {
    id: 5,
    question: "Do I need previous consulting experience?",
    answer:
      "No previous consulting experience is required. We provide comprehensive training and mentorship to help you succeed.",
  },
  {
    id: 6,
    question: "Are there opportunities for leadership roles?",
    answer:
      "Yes! We offer various leadership opportunities including Project Manager positions and Executive Board roles for experienced team members.",
  },
];

const JoinUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const benefitsRef = useRef(null);
  const rolesRef = useRef(null);
  const timelineRef = useRef(null);

  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const isRolesInView = useInView(rolesRef, { once: true, margin: "-80px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);
  const nextRole = () => setCurrentRoleIndex((p) => (p + 1) % roles.length);
  const prevRole = () =>
    setCurrentRoleIndex((p) => (p - 1 + roles.length) % roles.length);

  return (
    <div className="join-us">
      {/* Hero */}
      <section className="page-hero join-hero-v2">
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container join-hero-grid">
          <motion.div
            className="join-hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="page-hero-eyebrow">Now recruiting</span>
            <h1 className="page-hero-title page-hero-title-left">
              Build your career
              <br />
              <span className="accent">on real work.</span>
            </h1>
            <p className="page-hero-sub page-hero-sub-left">
              Join Michigan State's premier student consulting organization
              and work with real clients, alongside a team of driven peers,
              backed by a global network.
            </p>
            <div className="page-hero-cta page-hero-cta-left">
              <a
                href="https://forms.gle/a1w3L12YNuQKwdtn8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply now <FaArrowRight />
              </a>
              <a href="#faq-section" className="btn btn-secondary">
                See FAQ
              </a>
            </div>
          </motion.div>

          <motion.div
            className="join-hero-photo"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlowCard glowColor="green" className="join-hero-glow">
              <img
                src="/images/events/banquet.jpeg"
                alt="180DC MSU members at the annual banquet"
                className="join-hero-img"
              />
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* BA Testimonials - moved up so prospective applicants hear from
          current BAs immediately after the hero, before any pitch copy. */}
      <section className="ba-section-v2">
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container ba-inner">
          <motion.div
            className="ba-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-hero-eyebrow">From the BA's</span>
            <h2 className="ba-title">
              What it's <span className="accent">actually like.</span>
            </h2>
          </motion.div>

          <div className="ba-grid-v2">
            <motion.div
              className="ba-photo-wrap"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard glowColor="green" className="ba-photo-glow">
                <img
                  src="/images/events/Spring%202026%20BA%20Class.JPEG"
                  alt="Spring 2026 Business Analyst class"
                  className="ba-photo-img"
                />
              </GlowCard>
            </motion.div>

            <div className="ba-testimonials">
              {testimonials.map((t, idx) => (
                <motion.blockquote
                  key={idx}
                  className="ba-testimonial"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                >
                  <p>{t.quote}</p>
                  <footer>
                    <span className="ba-testimonial-name">{t.name}</span>
                    <span className="ba-testimonial-role">{t.role}</span>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="benefits-section-v2">
        <div className="container">
          <motion.div
            className="benefits-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Why join</span>
            <h2 className="section-title">
              Four reasons it's <span className="accent">worth it.</span>
            </h2>
          </motion.div>

          <div className="benefits-grid-v2">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlowCard glowColor="green" className="benefit-card-v2">
                  <div className="benefit-icon-v2">{b.icon}</div>
                  <h3 className="benefit-title-v2">{b.title}</h3>
                  <p className="benefit-desc-v2">{b.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="timeline-section"
        ref={timelineRef}
        className="timeline-section-v2"
      >
        <div className="container">
          <motion.div
            className="timeline-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">The process</span>
            <h2 className="section-title">
              Six steps to <span className="accent">an offer.</span>
            </h2>
          </motion.div>

          <div className="timeline-track">
            <motion.div
              className="timeline-track-line"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "linear" }}
            />
            <div className="timeline-steps-v2">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  className="timeline-step-v2"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                >
                  <div className="timeline-step-dot">
                    <span>{step.id}</span>
                  </div>
                  <div className="timeline-step-card">
                    <span className="timeline-step-date">{step.date}</span>
                    <div className="timeline-step-icon">{step.icon}</div>
                    <h3 className="timeline-step-title">{step.title}</h3>
                    <p className="timeline-step-desc">{step.description}</p>
                    {step.tips && (
                      <div className="timeline-step-tips">
                        <span className="timeline-step-tips-label">Tip</span>
                        <p>{step.tips}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section ref={rolesRef} className="roles-section-v2">
        <div className="container">
          <motion.div
            className="roles-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Roles & progression</span>
            <h2 className="section-title">
              Three steps, one <span className="accent">trajectory.</span>
            </h2>
          </motion.div>

          {/* Desktop - promotion-ladder layout. The three roles are
              connected by a horizontal trajectory line (drawn under the
              numbered milestone markers). Each card has its own duration
              badge + role icon so the progression reads visually, not just
              from the inline arrow. */}
          <div className="roles-stepper">
            <motion.div
              className="roles-stepper-line"
              initial={{ scaleX: 0 }}
              animate={isRolesInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            {roles.map((role, idx) => (
              <motion.div
                key={role.title}
                className="role-step"
                initial={{ opacity: 0, y: 30 }}
                animate={isRolesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
              >
                <div className="role-step-marker">
                  <span className="role-step-marker-num">{idx + 1}</span>
                </div>
                <div className="role-step-card">
                  <div className="role-step-card-head">
                    <div className="role-step-icon-v2">{role.icon}</div>
                    <span className="role-step-duration">{role.duration}</span>
                  </div>
                  <h3 className="role-step-title">{role.title}</h3>
                  <p className="role-step-desc">{role.description}</p>
                  <div className="role-step-cols">
                    <div>
                      <h4>Requirements</h4>
                      <ul>
                        {role.requirements.map((r, i) => (
                          <li key={i}>
                            <FaCheckCircle className="role-step-li-icon" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Responsibilities</h4>
                      <ul>
                        {role.responsibilities.map((r, i) => (
                          <li key={i}>
                            <FaArrowRight className="role-step-li-icon" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile - single role visible, swipeable via prev/next buttons.
              Same role-step-card markup so the visual treatment matches the
              desktop stepper. */}
          <div className="roles-mobile-v2">
            <motion.div
              className="role-step role-step-mobile"
              key={currentRoleIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="role-step-marker">
                <span className="role-step-marker-num">
                  {currentRoleIndex + 1}
                </span>
              </div>
              <div className="role-step-card">
                <div className="role-step-card-head">
                  <div className="role-step-icon-v2">
                    {roles[currentRoleIndex].icon}
                  </div>
                  <span className="role-step-duration">
                    {roles[currentRoleIndex].duration}
                  </span>
                </div>
                <h3 className="role-step-title">
                  {roles[currentRoleIndex].title}
                </h3>
                <p className="role-step-desc">
                  {roles[currentRoleIndex].description}
                </p>
                <div className="role-step-cols">
                  <div>
                    <h4>Requirements</h4>
                    <ul>
                      {roles[currentRoleIndex].requirements.map((r, i) => (
                        <li key={i}>
                          <FaCheckCircle className="role-step-li-icon" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Responsibilities</h4>
                    <ul>
                      {roles[currentRoleIndex].responsibilities.map((r, i) => (
                        <li key={i}>
                          <FaArrowRight className="role-step-li-icon" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="roles-nav">
              <button
                onClick={prevRole}
                disabled={currentRoleIndex === 0}
                aria-label="Previous"
                className="roles-nav-btn"
              >
                <FaArrowLeft />
              </button>
              <div className="roles-dots">
                {roles.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentRoleIndex(i)}
                    className={`roles-dot ${i === currentRoleIndex ? "active" : ""}`}
                    aria-label={`Stage ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextRole}
                disabled={currentRoleIndex === roles.length - 1}
                aria-label="Next"
                className="roles-nav-btn"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-section" className="faq-section-v2">
        <div className="container">
          <motion.div
            className="faq-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Questions</span>
            <h2 className="section-title">
              Frequently asked.
            </h2>
          </motion.div>

          <div className="faq-list-v2">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.id}
                className={`faq-item-v2 ${openFaq === faq.id ? "open" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <button
                  className="faq-q"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="faq-q-num">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="faq-q-text">{faq.question}</span>
                  {openFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <motion.div
                  className="faq-a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFaq === faq.id ? "auto" : 0,
                    opacity: openFaq === faq.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
