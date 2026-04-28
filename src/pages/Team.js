import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import GlowCard from "../components/GlowCard";
import StatNum from "../components/StatNum";
import "./Team.css";

const Team = () => {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: "-80px" });

  const executiveBoard = [
    {
      id: 1,
      name: "Ethan Oliven",
      role: "President",
      image: "/images/team/eboard-headshots/1.png",
      bio: "Sahib is a senior who joined 180 in Spring '23. He has a background in investment banking and was most recently a summer restructuring analyst at Alvarez & Marsal!",
      major: "Accounting",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/ethanoliven/",
        email: "olivenet@msu.edu",
      },
    },
    {
      id: 2,
      name: "Ava Soltysiak",
      role: "Senior Vice President",
      image: "/images/team/eboard-headshots/2.png",
      bio: "Puja is a senior who joined 180 in Fall '23. She has a background in technology consulting through her experience at Plante Moran the past two summers.",
      major: "Finance",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/ava-soltysiak/",
        email: "soltysi9@msu.edu",
      },
    },
    {
      id: 3,
      name: "Anirudh Jillellamudi",
      role: "VP of External Affairs",
      image: "/images/team/eboard-headshots/5.png",
      bio: "Ethan is a junior who joined 180 in Spring '24. He has gained in experience in the accounting and consulting fields, interning at KPMG in audit and Plante Moran in national tax in Chicago.",
      major: "Accounting",
      year: "Junior",
      social: {
        linkedin: "http://www.linkedin.com/in/anirudhjill",
        email: "jillell2@msu.edu",
      },
    },
    {
      id: 4,
      name: "Caleb Brown",
      role: "VP of Operations",
      image: "/images/team/eboard-headshots/4.png",
      bio: "Rucha is a senior who joined 180 in Fall '23. She has worked in different areas of supply chain, most recently as a supply chain capabilities intern at Nike.",
      major: "Supply Chain Management",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/calebwbrown/",
        email: "brow1274@msu.edu",
      },
    },
    {
      id: 5,
      name: "Jack Zhang",
      role: "VP of Events & Marketing",
      image: "/images/team/eboard-headshots/6.png",
      bio: "Ava is a junior who joined 180 in Spring 2024. She has experience in commercial banking at Mercantile Bank and in alternative investments at Proteus. On campus, Ava is involved in research with the Department of Finance.",
      major: "Finance",
      year: "Junior",
      social: {
        linkedin: "http://www.linkedin.com/in/-jackzhang-",
        email: "zhangjac@msu.edu",
      },
    },
    {
      id: 6,
      name: "Anvi Thakur",
      role: "VP of Recruitment & Training",
      image: "/images/team/eboard-headshots/7.png",
      bio: "Shivang is a senior who joined 180 in Fall '23. He has a background in digital transformations and sustainable solutions, most recently working as a Consultant at KPMG Chicago this past summer.",
      major: "Supply Chain Management",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/anvithakur/",
        email: "thakura2@msu.edu",
      },
    },
    {
      id: 7,
      name: "Yash Chainani",
      role: "VP of Quality Assurance",
      image: "/images/team/eboard-headshots/3.png",
      bio: "Pranav is a senior who joined 180 in Spring '23. He has a background in Electronics and was most recently a summer engineering sales internship at Texas Instruments.",
      major: "Computer Engineering",
      year: "Senior",
      social: {
        linkedin: "https://www.linkedin.com/in/yash-chainani/",
        email: "chainan1@msu.edu",
      },
    },
  ];

  return (
    <div className="team">
      {/* Hero - center-aligned, with eboard avatar strip below for a peek.
          --hero-bg drives the dim-overlayed E-Board photo (consumed by
          .team-hero-v2::before in Team.css). */}
      <section
        className="page-hero team-hero-v2"
        style={{ "--hero-bg": "url('/images/events/E-Board%20Photo.JPEG')" }}
      >
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container page-hero-inner">
          <motion.span
            className="page-hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Executive Board
          </motion.span>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            The team driving
            <br />
            <span className="accent">180DC MSU forward.</span>
          </motion.h1>
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Seven leaders shaping every project, every recruit, and every
            partnership at Michigan State's premier student consulting
            organization.
          </motion.p>
          <motion.div
            className="team-hero-avatars"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {executiveBoard.map((m, idx) => (
              <span
                key={m.id}
                className="team-hero-avatar"
                style={{ zIndex: executiveBoard.length - idx }}
                title={`${m.name} - ${m.role}`}
              >
                <img src={m.image} alt={m.name} />
              </span>
            ))}
            <span className="team-hero-avatars-caption">
              Meet all 7 below
            </span>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={teamRef} className="team-section-v2">
        <div className="container">
          <div className="team-grid-v2">
            {executiveBoard.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`team-card-wrap ${index === 0 ? "team-card-featured" : ""}`}
              >
                <GlowCard glowColor="green" className="team-card-v2">
                  <div className="team-card-img-wrap">
                    <img src={member.image} alt={member.name} />
                    {/* Bio overlay removed - old text was wrong (carried
                        over from a different person's bio). */}
                  </div>
                  <div className="team-card-info">
                    <span className="team-card-role">{member.role}</span>
                    <h3 className="team-card-name">{member.name}</h3>
                    <div className="team-card-social">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          aria-label="Email"
                        >
                          <FaEnvelope />
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="team-stats-v2">
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="container team-stats-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="team-stats-header"
          >
            <span className="page-hero-eyebrow">By the numbers</span>
            <h2 className="team-stats-title">
              The team, <span className="accent">at a glance.</span>
            </h2>
          </motion.div>

          <div className="team-stats-grid">
            <div className="team-stat">
              <span className="team-stat-num">
                <StatNum value={45} suffix="" />
              </span>
              <span className="team-stat-label">Active members</span>
            </div>
            <div className="team-stat">
              <span className="team-stat-num">
                <StatNum value={3.78} suffix="" decimals={2} />
              </span>
              <span className="team-stat-label">Average GPA</span>
            </div>
            <div className="team-stat">
              <span className="team-stat-num">
                <StatNum value={8} suffix="+" />
              </span>
              <span className="team-stat-label">Majors represented</span>
            </div>
            <div className="team-stat">
              <span className="team-stat-num">
                <StatNum value={50} suffix="+" />
              </span>
              <span className="team-stat-label">Projects delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="team-cta-v2">
        <div className="container">
          <motion.div
            className="team-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="page-hero-eyebrow">Join the team</span>
            <h2 className="team-cta-title">
              Ready to make an <span className="accent">impact?</span>
            </h2>
            <p className="team-cta-sub">
              We're always looking for talented students who want to do real
              consulting work for organizations that matter.
            </p>
            <a href="/join-us" className="btn btn-primary">
              Apply now <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
