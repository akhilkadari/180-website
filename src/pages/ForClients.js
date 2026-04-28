import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDollarSign,
  FaSearch,
  FaExpand,
  FaCogs,
  FaSitemap,
  FaLaptopCode,
  FaArrowRight,
  FaPaperPlane,
  FaUsers,
  FaCheckCircle,
  FaSeedling,
} from "react-icons/fa";
import GlowCard from "../components/GlowCard";
import StatNum from "../components/StatNum";
import "./ForClients.css";

const advantages = [
  {
    icon: <FaDollarSign />,
    title: "Revenue Generation",
    description:
      "Strategic pricing models, sales funnel optimization, and new revenue stream identification to maximize your organization's financial performance.",
  },
  {
    icon: <FaSearch />,
    title: "Market Research",
    description:
      "Competitive analysis, consumer behavior studies, and market opportunity assessment to inform strategic decision-making.",
  },
  {
    icon: <FaExpand />,
    title: "Expansion Strategy",
    description:
      "Market entry planning, growth opportunity analysis, and scalability assessment to drive sustainable business expansion.",
  },
  {
    icon: <FaCogs />,
    title: "Operational Efficiency",
    description:
      "Process optimization, resource allocation, and cost reduction strategies to streamline operations and improve productivity.",
  },
  {
    icon: <FaSitemap />,
    title: "Organization",
    description:
      "Organizational structure design, team development strategies, and change management to optimize your human capital.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technology",
    description:
      "Digital transformation, tech stack assessment, and implementation roadmap to modernize your technological infrastructure.",
  },
];

const processSteps = [
  {
    n: "01",
    icon: <FaPaperPlane />,
    title: "Initial inquiry",
    detail: "You reach out, we set up a call to understand your organization and the challenge you're facing.",
  },
  {
    n: "02",
    icon: <FaUsers />,
    title: "Project scoping",
    detail: "We define deliverables, timeline, and team composition together. No fees, ever, just a clear plan.",
  },
  {
    n: "03",
    icon: <FaCheckCircle />,
    title: "Engagement",
    detail: "A 4–6 person team works with you over the semester: research, analysis, weekly check-ins, full transparency.",
  },
  {
    n: "04",
    icon: <FaSeedling />,
    title: "Recommendation & handoff",
    detail: "Final presentation with actionable recommendations, a written report, and an implementation roadmap.",
  },
];

const ForClients = () => {
  const advRef = useRef(null);
  const procRef = useRef(null);
  const isAdvInView = useInView(advRef, { once: true, margin: "-80px" });
  const isProcInView = useInView(procRef, { once: true, margin: "-80px" });

  return (
    <div className="for-clients">
      {/* Hero - split layout: left text, right deliverables card.
          --hero-bg is consumed by the .clients-hero-v2::before pseudo
          element to render the Minskoff Pavilion photo behind the dim
          overlay. */}
      <section
        className="page-hero clients-hero-v2"
        style={{ "--hero-bg": "url('/images/backgrounds/donor-wall-close.jpg')" }}
      >
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container clients-hero-grid">
          <motion.div
            className="clients-hero-text"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="page-hero-eyebrow">For Clients</span>
            <h1 className="page-hero-title page-hero-title-left">
              Strategic consulting,
              <br />
              <span className="accent">built around your goals.</span>
            </h1>
            <p className="page-hero-sub page-hero-sub-left">
              We work with nonprofits, social enterprises, startups, and
              established organizations across industries. Rigorous, always
              student-led, always partner-mentored.
            </p>
            <div className="page-hero-cta page-hero-cta-left">
              <a href="/contact" className="btn btn-primary">
                Start a project <FaArrowRight />
              </a>
              <a href="#why-choose-section" className="btn btn-secondary">
                See what we do
              </a>
            </div>
          </motion.div>

          <motion.div
            className="clients-hero-card"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="clients-hero-card-label">What you get</span>
            <ol className="clients-hero-list">
              <li>Multidisciplinary 4–6 person team</li>
              <li>8–12 week engagement</li>
              <li>Senior partner mentorship</li>
              <li>Tailored research &amp; analysis</li>
              <li>Final report + implementation roadmap</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Process timeline */}
      <section ref={procRef} className="process-section">
        <div className="container">
          <motion.div
            className="process-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isProcInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">How it works</span>
            <h2 className="section-title">
              From inquiry to <span className="accent">impact.</span>
            </h2>
            <p className="process-subtitle">
              An 8–12 week engagement with a dedicated student team backed by
              senior mentors.
            </p>
          </motion.div>

          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.n}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="process-step-num">{step.n}</div>
                <div className="process-step-icon">{step.icon}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-detail">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose / Advantages */}
      <section
        id="why-choose-section"
        ref={advRef}
        className="advantages-section"
      >
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container advantages-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isAdvInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="advantages-header"
          >
            <span className="page-hero-eyebrow">Our expertise</span>
            <h2 className="advantages-title">
              Six practice areas, <span className="accent">one team.</span>
            </h2>
          </motion.div>

          <div className="advantages-grid-v2">
            {advantages.map((a, idx) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isAdvInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <GlowCard glowColor="green" className="advantage-card-v2">
                  <div className="advantage-icon-v2">{a.icon}</div>
                  <h3 className="advantage-title-v2">{a.title}</h3>
                  <p className="advantage-desc-v2">{a.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="clients-stats">
        <div className="container">
          <div className="clients-stats-grid">
            <div className="clients-stat">
              <span className="clients-stat-num">
                <StatNum value={100} suffix="+" />
              </span>
              <span className="clients-stat-label">Projects delivered</span>
            </div>
            <div className="clients-stat">
              <span className="clients-stat-num">8–12</span>
              <span className="clients-stat-label">Week engagements</span>
            </div>
            <div className="clients-stat">
              <span className="clients-stat-num">
                <StatNum value={4} suffix="–6" />
              </span>
              <span className="clients-stat-label">Consultants per project</span>
            </div>
            <div className="clients-stat">
              <span className="clients-stat-num">
                <StatNum value={6} suffix="" />
              </span>
              <span className="clients-stat-label">Practice areas</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ForClients;
