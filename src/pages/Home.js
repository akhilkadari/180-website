import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaTrophy,
} from "react-icons/fa";
import "./Home.css";
import ArcGallery from "../components/ArcGallery";
import Globe from "../components/Globe";
import StatNum from "../components/StatNum";

// Three-layer hero. Building is the foreground scene (campus + its own
// baked-in sky), logo is the brand mark mid-layer, and the back layer
// is a CSS gradient sky so any parallax overflow stays continuous.
const HERO_LAYERS = {
  // WebP, not JPG — the source PNG has a transparent sky region so the
  // sky-gradient CSS layer can show through the top half of the photo.
  // Converting to JPG flattens that alpha to black, which is what made
  // the live hero look like a black slab. WebP keeps the alpha at
  // a fraction of the PNG's weight (~540 KB vs 54 MB).
  building: "/images/backgrounds/Hero%201%20GLow.webp",
  logo: "/images/backgrounds/Hero%201%20Glow%20Logo.png",
};

// Curated event photos for the arc gallery - all newly uploaded labeled
// shots first, then a few legacy ones for variety. Spaces are URL-encoded
// because filenames preserve them as-is.
const ARC_PHOTOS = [
  "/images/events/st-jude-basketball.jpg",
  "/images/events/Spring%202026%20BA%20Class.JPEG",
  "/images/events/Women%20in%20180.JPEG",
  "/images/events/gala2026.jpg",
  "/images/events/Chicago%20trip%20-%20social.JPEG",
  "/images/events/Social%20party.JPEG",
  "/images/events/retreat.JPG",
  "/images/events/E-Board%20Photo.JPEG",
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
  const headlineStats = [
    { num: 100, suffix: "+", label: "Projects delivered" },
    { num: 45, suffix: "", label: "Active members" },
    { num: 500, suffix: "+", label: "180DC alumni" },
    { num: 6, suffix: "", label: "Practice areas" },
  ];

  return (
    <div className="home">
      {/* Hero Reveal */}
      <section
        className="hero-reveal"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          e.currentTarget.style.setProperty("--nx", nx.toFixed(3));
          e.currentTarget.style.setProperty("--ny", ny.toFixed(3));
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--nx", "0");
          e.currentTarget.style.setProperty("--ny", "0");
        }}
      >
        <div className="hero-layer hero-layer-sky" aria-hidden="true" />
        {/* Building + logo layers ride inside a `.hero-rise` wrapper that
            slides up from below on mount. The inner `.hero-layer` keeps its
            scale(1.06) + cursor-parallax transform untouched, so entrance
            and parallax compose without fighting each other. */}
        <div className="hero-rise hero-rise-building">
          <div
            className="hero-layer hero-layer-building"
            style={{ backgroundImage: `url('${HERO_LAYERS.building}')` }}
            aria-hidden="true"
          />
        </div>
        <div className="hero-rise hero-rise-logo">
          <div
            className="hero-layer hero-layer-logo"
            style={{ backgroundImage: `url('${HERO_LAYERS.logo}')` }}
            aria-hidden="true"
          />
        </div>
        <div className="hero-reveal-vignette" />

        <div className="hero-reveal-content">
          <motion.h1
            className="hero-reveal-headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="line-bold">180 Degrees Consulting</span>
            <span className="line-accent">
              {/* Desktop: white italic with a green hand-drawn brush
                  underline. Mobile: drops the underline and the white,
                  reverts to plain green italic (handled in CSS). */}
              <span className="line-accent-prefix">at </span>
              <span className="line-accent-msu">
                Michigan State
                <svg
                  className="msu-stroke"
                  viewBox="0 0 320 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 11 C 60 4, 130 15, 210 7 S 308 13, 316 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-reveal-tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            We're the MSU chapter of the world's largest student-run
            consulting network, delivering pro-bono strategy work for
            nonprofits, social enterprises, and mission-driven ventures.
          </motion.p>

          <motion.div
            className="hero-reveal-buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
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
            transition={{ duration: 0.7, delay: 1.6 }}
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
          transition={{ delay: 2.8, duration: 0.6 }}
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
          {/* Award block deliberately renders static — no entrance animation
              per user request. Photo just sits at its tilt; copy is pinned
              from first paint. */}
          <div className="award-photo-stack">
            <img
              className="award-photo-img"
              src="/images/events/gala2026.jpg"
              alt="180DC MSU receiving the Consulting Organization of the Year award at the 2026 Gala"
            />
          </div>

          <div className="award-creative-text">
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
              Voted by the Broad Student Senate for the work we delivered to
              MSU nonprofits and student ventures over the past year.
            </p>
          </div>
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
          The people behind <span className="accent">the work.</span>
        </h2>
        <p className="arc-gallery-sub">
          Forty-plus members across business, engineering, design, and
          pre-med.
        </p>
      </ArcGallery>

      {/* By the numbers - hard stats in a centered horizontal strip. */}
      <section
        className="stats-strip"
        style={{ "--stats-bg": "url('/images/backgrounds/donor-wall.jpg')" }}
      >
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
              The proof, <span className="accent">at a glance.</span>
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
