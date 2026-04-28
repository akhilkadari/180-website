import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Stay anchored-dark until the user scrolls roughly past the hero
      // section, then lift off into the semi-transparent glass state.
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'For Clients', path: '/for-clients' },
    { name: 'Apply', path: '/join-us' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-glass' : 'navbar-solid'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="/images/logos/landscape-white.png"
            alt="180 Degrees Consulting MSU"
            className="logo-img"
          />
        </Link>

        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <motion.div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
