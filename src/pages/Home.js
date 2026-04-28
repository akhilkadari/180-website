import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
  FaTrophy,
} from "react-icons/fa";
import "./Home.css";
import ArcGallery from "../components/ArcGallery";
import Globe from "../components/Globe";
import StatNum from "../components/StatNum";

const HERO_BG = "/images/backgrounds/hero-new-4.jpg";

// Curated event photos for the arc gallery - all newly uploaded labeled
// shots first, then a few legacy ones for variety. Spaces are URL-encoded
// because filenames preserve them as-is.
const ARC_PHOTOS = [
  "/images/events/E-Board%20Photo.JPEG",
  "/images/events/Spring%202026%20BA%20Class.JPEG",
  "/images/events/Women%20in%20180.JPEG",
  "/images/events/gala2026.jpg",
  "/images/events/Chicago%20trip%20-%20social.JPEG",
  "/images/events/Social%20party.JPEG",
  "/images/events/retreat.JPG",
];


const branchMarkers = [
  // MSU - highlighted with pin and bigger marker
  { location: [42.7370, -84.4839], size: 0.035, label: "180DC MSU", highlight: true },
  // Asia-Pacific (180DC was founded at Univ. of Sydney)
  { location: [-33.8688, 151.2093], size: 0.018, label: "180DC Sydney" },
  { location: [-37.8136, 144.9631], size: 0.014, label: "180DC Melbourne" },
  { location: [-27.4698, 153.0251], size: 0.014, label: "180DC Brisbane" },
  { location: [-36.8485, 174.7633], size: 0.014, label: "180DC Auckland" },
  { location: [1.3521, 103.8198], size: 0.014, label: "180DC Singapore" },
  { location: [22.3193, 114.1694], size: 0.014, label: "180DC Hong Kong" },
  { location: [35.6762, 139.6503], size: 0.014, label: "180DC Tokyo" },
  { location: [19.0760, 72.8777], size: 0.014, label: "180DC Mumbai" },
  { location: [28.6139, 77.2090], size: 0.014, label: "180DC Delhi" },
  { location: [13.7563, 100.5018], size: 0.014, label: "180DC Bangkok" },
  // Europe
  { location: [51.5074, -0.1278], size: 0.018, label: "180DC London" },
  { location: [52.5200, 13.4050], size: 0.014, label: "180DC Berlin" },
  { location: [48.8566, 2.3522], size: 0.014, label: "180DC Paris" },
  { location: [55.6761, 12.5683], size: 0.014, label: "180DC Copenhagen" },
  { location: [59.3293, 18.0686], size: 0.014, label: "180DC Stockholm" },
  { location: [52.3676, 4.9041], size: 0.014, label: "180DC Amsterdam" },
  { location: [48.2082, 16.3738], size: 0.014, label: "180DC Vienna" },
  { location: [40.4168, -3.7038], size: 0.014, label: "180DC Madrid" },
  { location: [45.4642, 9.1900], size: 0.014, label: "180DC Milan" },
  // Americas
  { location: [40.7128, -74.0060], size: 0.018, label: "180DC NYC" },
  { location: [42.3601, -71.0589], size: 0.014, label: "180DC Boston" },
  { location: [34.0522, -118.2437], size: 0.014, label: "180DC LA" },
  { location: [41.8781, -87.6298], size: 0.014, label: "180DC Chicago" },
  { location: [43.6532, -79.3832], size: 0.014, label: "180DC Toronto" },
  { location: [49.2827, -123.1207], size: 0.014, label: "180DC Vancouver" },
  { location: [-23.5505, -46.6333], size: 0.014, label: "180DC São Paulo" },
  { location: [-34.6037, -58.3816], size: 0.014, label: "180DC Buenos Aires" },
  { location: [19.4326, -99.1332], size: 0.014, label: "180DC Mexico City" },
  // Africa
  { location: [-33.9249, 18.4241], size: 0.014, label: "180DC Cape Town" },
  { location: [-26.2041, 28.0473], size: 0.014, label: "180DC Johannesburg" },
  { location: [-1.2921, 36.8219], size: 0.014, label: "180DC Nairobi" },
];

const Home = () => {
  // Four pillars + four numbers - combined into a single editorial
  // "manifesto" section below so they reinforce each other instead of
  // sitting in two separate generic blocks.
  const pillars = [
    {
      icon: <FaChartLine />,
      title: "Impact-Driven",
      description: "Every engagement is scoped around measurable change - not slide volume.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative",
      description:
        "Interdisciplinary teams from engineering, business, pre-med, and design.",
    },
    {
      icon: <FaLightbulb />,
      title: "Learning-Oriented",
      description:
        "Members work on live problems with senior mentorship, not case-prep busywork.",
    },
    {
      icon: <FaHandshake />,
      title: "Ethical",
      description:
        "Transparent scoping, honest deliverables, accountable handoff.",
    },
  ];

  const headlineStats = [
    { num: 50, suffix: "+", label: "Projects delivered" },
    { num: 45, suffix: "", label: "Active members" },
    { num: 500, suffix: "+", label: "180DC alumni" },
    { num: 6, suffix: "", label: "Practice areas" },
  ];

  return (
    <div className="home">
      {/* Hero Reveal */}
      <section className="hero-reveal">
        <div
          className="hero-reveal-bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="hero-reveal-vignette" />

        <div className="hero-reveal-content">
          <motion.h1
            className="hero-reveal-headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="line-bold">180 Degrees Consulting</span>
            <span className="line-accent">
              {/* "at" stays plain white, "Michigan State" gets a brand-green
                  gradient so the school name visually pops as the hero's
                  payoff line. */}
              <span className="line-accent-prefix">at </span>
              <span className="line-accent-msu">Michigan State</span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-reveal-tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            We're the MSU chapter of the world's largest student-run
            consulting network, delivering pro-bono strategy work for
            nonprofits, social enterprises, and mission-driven ventures.
          </motion.p>

          <motion.div
            className="hero-reveal-buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <Link to="/for-clients" className="btn btn-primary">
              Start a project <FaArrowRight />
            </Link>
            <Link to="/join-us" className="btn btn-secondary">
              Join the team
            </Link>
          </motion.div>

          <motion.div
            className="hero-reveal-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <div className="hero-stat">
              <span className="hero-stat-num">
                <StatNum value={100} suffix="+" />
              </span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-num">
                <StatNum value={45} suffix="" />
              </span>
              <span className="hero-stat-label">Members</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-num">
                <StatNum value={500} suffix="+" />
              </span>
              <span className="hero-stat-label">Alumni</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-reveal-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <span>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </section>

      {/* Award Section - magazine-style spread with tilted photo + stamped seal */}
      <section className="award-strip award-creative">
        <div
          className="award-strip-bg"
          style={{ backgroundImage: `url(/images/backgrounds/donor-wall-close.jpg)` }}
        />
        <div className="award-strip-overlay" />
        <div className="container award-creative-stage">
          <motion.div
            className="award-photo-stack"
            initial={{ opacity: 0, y: 30, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              className="award-photo-img"
              src="/images/events/gala2026.jpg"
              alt="180DC MSU receiving the Consulting Organization of the Year award at the 2026 Gala"
            />
            {/* Removed the #1 corner seal - user wanted the photo to stand on
                its own with the trophy mention living in the eyebrow on the
                right column. */}
          </motion.div>

          <motion.div
            className="award-creative-text"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Editorial meta block - replaced the trophy-in-a-pill chip
                (which read as templated/AI) with a structured masthead-style
                label: vertical brand rule + small label / source line. */}
            <div className="editorial-meta">
              <FaTrophy className="editorial-meta-icon" />
              <div className="editorial-meta-text">
                <span className="editorial-meta-label">Recognized by</span>
                <span className="editorial-meta-value">
                  Broad Student Senate · 2025–2026
                </span>
              </div>
            </div>
            <h3 className="award-creative-title">
              Consulting Organization
              <br />
              <span className="accent">of the Year.</span>
            </h3>
            <p className="award-creative-sub">
              Recognized for excellence in delivering measurable impact across
              Michigan State's nonprofits and social enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="global-section">
        <div className="container global-container">
          <motion.div
            className="global-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="global-eyebrow">Worldwide</span>
            <h2 className="global-title">
              Part of the world's largest <br />
              <span className="accent">student consulting network.</span>
            </h2>
            <p className="global-tagline">
              180 Degrees Consulting is the largest consultancy for non-profits and
              social enterprises on Earth, with offices in over 40 countries
              across six continents. MSU is proud to be part of that network.
            </p>
            <div className="global-stats">
              <div className="global-stat">
                <span className="global-stat-num">
                  <StatNum value={180} suffix="+" />
                </span>
                <span className="global-stat-label">Branches</span>
              </div>
              <div className="global-stat">
                <span className="global-stat-num">
                  <StatNum value={40} suffix="+" />
                </span>
                <span className="global-stat-label">Countries</span>
              </div>
              <div className="global-stat">
                <span className="global-stat-num">
                  <StatNum value={6} suffix="" />
                </span>
                <span className="global-stat-label">Continents</span>
              </div>
              <div className="global-stat">
                <span className="global-stat-num">
                  <StatNum value={70} suffix="k+" />
                </span>
                <span className="global-stat-label">Alumni</span>
              </div>
            </div>
            <div className="global-location">
              <span className="global-location-pin">●</span>
              <span>
                <strong>180DC MSU</strong> · Minskoff Pavilion · East Lansing, Michigan
              </span>
            </div>
          </motion.div>
          <motion.div
            className="global-globe"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Globe
              markers={branchMarkers}
              dark={1}
              baseColor={[0.96, 0.97, 0.95]}
              markerColor={[0.42, 0.79, 0.29]}
              glowColor={[0.78, 0.92, 0.65]}
              mapBrightness={2.5}
              diffuse={1.0}
              markerSize={0.022}
              theta={0.28}
              speed={0.0012}
              // Start centered on MSU (lng -84.4839 → phi ≈ -0.096)
              initialPhi={-0.0964}
            />
          </motion.div>
        </div>
      </section>

      {/* Arc Gallery - fan of curated event photos replacing the old
          iPad-style scroll perspective */}
      <ArcGallery
        images={ARC_PHOTOS}
        startAngle={20}
        endAngle={160}
        radiusLg={460}
        radiusMd={340}
        radiusSm={220}
        cardSizeLg={170}
        cardSizeMd={120}
        cardSizeSm={84}
      >
        <h2 className="arc-gallery-title">
          Real consulting. <span className="accent">Real impact.</span>
        </h2>
        <p className="arc-gallery-sub">
          Bid nights, banquets, retreats, Chicago. The team behind every
          deck we ship.
        </p>
      </ArcGallery>

      {/* By the numbers - hard stats in a centered horizontal strip. */}
      <section className="stats-strip">
        <div className="container">
          <motion.div
            className="stats-strip-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">By the numbers</span>
            <h2 className="stats-strip-title">
              The receipts, <span className="accent">at a glance.</span>
            </h2>
          </motion.div>

          <div className="stats-strip-grid">
            {headlineStats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stats-strip-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="stats-strip-num">
                  <StatNum value={s.num} suffix={s.suffix} />
                </span>
                <span className="stats-strip-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars - the four principles that shape every engagement. */}
      <section className="pillars-section">
        <div className="container">
          <motion.div
            className="pillars-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">What we're built on</span>
            <h2 className="pillars-title">
              Four <span className="accent">principles.</span>
            </h2>
            <p className="pillars-sub">
              The shared mindset behind every project we deliver.
            </p>
          </motion.div>

          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="pillar-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pillar-icon">{p.icon}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Commented out for future use
      <section ref={testimonialsRef} className="testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 style={{ color: "#94C973" }}>What Our Clients Say</h2>
            <p>Success stories from organizations we've helped</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <br />
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default Home;
