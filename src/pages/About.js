import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaHandsHelping,
  FaForward,
} from "react-icons/fa";
import GlowCard from "../components/GlowCard";
import InteractiveSelector from "../components/InteractiveSelector";
import "./About.css";

// Each card leads with a tangible metric so the section reads
// quantitative instead of vibes-based.
const differences = [
  {
    icon: <FaGlobe />,
    metric: "200+",
    metricLabel: "branches in 40+ countries",
    title: "Global Network, Local Focus",
    description:
      "Part of the world's largest student consulting network, with project insights and alumni connections spanning six continents, applied to every East Lansing engagement.",
  },
  {
    icon: <FaUsers />,
    metric: "10+",
    metricLabel: "majors on active teams",
    title: "Interdisciplinary Teams",
    description:
      "From engineering and pre-med to business and computer science, every project team is staffed across disciplines so clients get the perspective their problem actually needs.",
  },
  {
    icon: <FaHandsHelping />,
    metric: "100%",
    metricLabel: "on live engagements",
    title: "Hands-On Leadership",
    description:
      "Nobody sits on the bench. Every member, including first-semester analysts, contributes directly to client deliverables with real ownership.",
  },
  {
    icon: <FaForward />,
    metric: "<5%",
    metricLabel: "applicant acceptance rate",
    title: "Best Foot Forward",
    description:
      "A selective multi-round recruitment process ensures the team that shows up to your project is sharp, prepared, and ready to deliver from day one.",
  },
  {
    icon: <FaBullseye />,
    metric: "8–12",
    metricLabel: "week tailored engagements",
    title: "Client-Centered Approach",
    description:
      "Scope, deliverables, and timeline are co-designed with every client. No boilerplate decks, no off-the-shelf playbooks, just work built around your capacity.",
  },
  {
    icon: <FaChartLine />,
    metric: "100+",
    metricLabel: "projects delivered to date",
    title: "Long-Term Growth",
    description:
      "Final recommendations come with an implementation roadmap, so the value compounds well after the engagement ends. Never a slide deck on a shelf.",
  },
];

const About = () => {
  const presidentRef = useRef(null);
  const missionRef = useRef(null);
  const differenceRef = useRef(null);
  const isPresidentInView = useInView(presidentRef, { once: true, margin: "-80px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-80px" });
  const isDifferenceInView = useInView(differenceRef, { once: true, margin: "-80px" });

  return (
    <div className="about">
      {/* President's Welcome - first thing on the page */}
      <section
        ref={presidentRef}
        className="president-section-v2"
        style={{
          "--section-bg": "url('/images/backgrounds/donor-wall.jpg')",
        }}
      >
        <div className="container">
          <div className="president-grid-v2">
            <motion.div
              className="president-photo-wrap"
              initial={{ opacity: 0, x: -30 }}
              animate={isPresidentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard glowColor="green" className="president-glow">
                <img
                  src="/images/team/eboard-headshots/1.png"
                  alt="Ethan Oliven, President"
                  className="president-img"
                />
                {/* Removed the floating PRESIDENT / Ethan Oliven caption -
                    it duplicated the President title on the right column
                    and read as templated. The photo now stands clean. */}
              </GlowCard>
            </motion.div>

            <motion.div
              className="president-content-v2"
              initial={{ opacity: 0, x: 30 }}
              animate={isPresidentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-eyebrow">A message from</span>
              <h2 className="section-title">
                Our <span className="accent">President.</span>
              </h2>
              <div className="president-letter">
                <p>
                  Welcome to 180 Degrees Consulting at Michigan State University.
                  As President, I'm proud to lead a diverse and driven team of
                  students who are passionate about creating real-world impact
                  through strategic problem solving.
                </p>
                <p>
                  Offering the best of the best at MSU, what makes 180DC MSU
                  unique is the way we bridge academic insight with hands-on
                  consulting experience. Our members don't just learn in the
                  classroom; they apply those lessons to help startups,
                  nonprofits, and businesses tackle real challenges across
                  industries.
                </p>
                <p>
                  Whether you're a prospective client, a student interested in
                  joining, or simply curious about our work, I invite you to
                  explore our website and discover what makes 180DC MSU one of
                  the most impactful organizations on campus.
                </p>
              </div>
              <p className="president-sign">Ethan Oliven, President</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - moved up so the metrics-led pitch sits
          right under the President's Letter, where users land first. */}
      <section ref={differenceRef} className="difference-section-v2">
        <div className="container">
          <motion.div
            className="difference-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">What sets us apart</span>
            <h2 className="section-title">
              Six things we do <span className="accent">differently.</span>
            </h2>
          </motion.div>

          <div className="difference-grid-v2">
            {differences.map((d, idx) => (
              <motion.div
                key={d.title}
                className="difference-card-v2"
                initial={{ opacity: 0, y: 30 }}
                animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="difference-num">{String(idx + 1).padStart(2, "0")}</div>
                <div className="difference-icon-v2">{d.icon}</div>
                {/* Lead with a hard metric instead of just an adjective. */}
                <div className="difference-metric">
                  <span className="difference-metric-num">{d.metric}</span>
                  <span className="difference-metric-label">{d.metricLabel}</span>
                </div>
                <h3 className="difference-card-title">{d.title}</h3>
                <p className="difference-card-text">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events - Interactive Selector */}
      <section className="events-section">
        <div className="container">
          <motion.div
            className="events-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Behind the scenes</span>
            <h2 className="section-title">
              The team, <span className="accent">in motion.</span>
            </h2>
            <p className="events-sub">
              From celebrations to retreats, the moments that shape our team.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <InteractiveSelector />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - the four pillars block was removed at user
          request; mission/vision now carry the "what we believe" weight
          on this page. Plain light cards (no GlowCard backdrop) so the
          warm-paper section reads soft, not heavy. */}
      <section ref={missionRef} className="mission-section-v2">
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container mission-inner">
          <div className="mission-grid-v2">
            <motion.div
              className="mission-card-v2"
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mission-icon-v2">
                <FaBullseye />
              </div>
              <span className="mission-eyebrow">Our Mission</span>
              <h3 className="mission-card-title">
                Strategy that builds capacity.
              </h3>
              <p className="mission-card-subhead">Why we exist.</p>
              <p className="mission-card-text">
                We work with East Lansing nonprofits and student-led ventures
                that can't afford a strategy firm. The deliverables they leave
                with are the ones an internal strategy team would have built —
                financial models, market sizing, go-to-market plans — written
                for the people who actually have to execute them.
              </p>
            </motion.div>

            <motion.div
              className="mission-card-v2"
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mission-icon-v2">
                <FaEye />
              </div>
              <span className="mission-eyebrow">Our Vision</span>
              <h3 className="mission-card-title">
                Strategy without barriers.
              </h3>
              <p className="mission-card-subhead">Where we're headed.</p>
              <p className="mission-card-text">
                Strategy work shouldn't only be priced for Fortune 500s. The
                organizations doing the most good usually can't afford the
                consulting that would help them scale. 180DC exists to close
                that gap — for free, by students, on real projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
