import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUsers, 
  FaChartLine, 
  FaLightbulb, 
  FaHandshake, 
  FaStar,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import './Home.css';
import Pic1 from '../assets/180Pic1.jpg';
import Pic2 from '../assets/180Pic2.jpg';
import Pic3 from '../assets/180Pic3.jpg';
import Pic4 from '../assets/180Pic4.jpg';
import MinskoffPavilion from '../assets/MinskoffPavilion.jpg';

const heroImages = [
  Pic1, Pic2, Pic3, Pic4
];

const Home = () => {
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isStatsInView = useInView(statsRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });

  const [stats, setStats] = useState({
    projects: 0,
    members: 0,
    impact: 0
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimeout = useRef();

  useEffect(() => {
    slideTimeout.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearTimeout(slideTimeout.current);
  }, [currentSlide]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  useEffect(() => {
    if (isStatsInView) {
      const timer = setTimeout(() => {
        setStats({
          projects: 25,
          members: 45,
          impact: 1500
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isStatsInView]);

  const coreValues = [
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Working together to achieve exceptional results"
    },
    {
      icon: <FaChartLine />,
      title: "Excellence",
      description: "Delivering the highest quality solutions"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Creative problem-solving approaches"
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "Building trust through honest partnerships"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "180 DC MSU transformed our business strategy and helped us increase revenue by 40% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, GreenSolutions",
      content: "The team's analytical approach and innovative solutions exceeded our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director, CommunityFirst",
      content: "Working with 180 DC MSU was a game-changer for our nonprofit organization. Their insights were invaluable.",
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slideshow">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`hero-slide${idx === currentSlide ? ' active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
              aria-hidden={idx !== currentSlide}
            />
          ))}
          <div className="hero-overlay"></div>
          <button className="hero-arrow left" onClick={prevSlide} aria-label="Previous slide"><FaChevronLeft /></button>
          <button className="hero-arrow right" onClick={nextSlide} aria-label="Next slide"><FaChevronRight /></button>
          <div className="hero-dots">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot${idx === currentSlide ? ' active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              <span className="hero-logo"> <span style={{ color: '#94C973' }}>Transforming</span> Organizations. Creating <span style={{ color: '#94C973' }}>Impact</span>.</span>
            </h1>
            <p className="hero-tagline">
            <span style={{color: '#94C973'}}>180 Degrees Consulting</span> at Michigan State University provides high-quality consulting 
            services to nonprofits and social enterprises, helping them maximize their social impact.
            </p>
            <div className="hero-buttons">
              <Link to="/for-clients" className="btn btn-primary">
                Work With Us
                <FaArrowRight />
              </Link>
              <Link to="/join-us" className="btn btn-secondary">
                Join Our Team
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 style={{ color: '#94C973' }}>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>
          
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section ref={statsRef} className="stats-section">
        <div className="stats-background" style={{ backgroundImage: `url(${MinskoffPavilion})` }}></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="stats-grid"
          >
            <div className="stat-item">
              <div className="stat-number">{stats.projects}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.members}</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.impact}+</div>
              <div className="stat-label">Hours of Impact</div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 style={{ color: '#94C973' }}>What Our Clients Say</h2>
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
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 