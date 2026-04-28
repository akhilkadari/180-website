import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

const FOOTER_LOGO = '/images/logos/landscape-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Join Us', path: '/join-us' }
    ],
    services: [
      { name: 'For Clients', path: '/for-clients' },
      { name: 'Our Expertise', path: '/for-clients#why-choose-section' }
    ],
    resources: [
      { name: 'FAQ', path: '/join-us#faq-section' },
      { name: 'Application Process', path: '/join-us#timeline-section' }
    ]
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/180-degrees-consulting-michigan-state-university',
      color: '#0077b5'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/msu180dc/?hl=en',
      color: '#e4405f'
    },
    
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'msu@180dc.org',
      link: 'mailto:msu@180dc.org'
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Michigan State University, East Lansing, MI',
      link: 'https://maps.google.com/?q=Michigan+State+University'
    }
  ];

  return (
    <footer className="footer">
      <div
        className="footer-cta"
        style={{ "--footer-cta-bg": "url('/images/backgrounds/donor-wall.jpg')" }}
      >
        <div className="container">
          <div className="footer-cta-inner">
            <div>
              <p className="footer-cta-eyebrow">Ready to make an impact?</p>
              <h2 className="footer-cta-title">
                Let's build something <span className="accent">meaningful</span>.
              </h2>
            </div>
            <div className="footer-cta-actions">
              <Link to="/for-clients" className="btn btn-primary">
                Work with us <FaArrowRight />
              </Link>
              <Link to="/join-us" className="btn btn-secondary">
                Apply <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Organization Info */}
            <div className="footer-section">
              <div className="footer-brand">
                <img
                  src={FOOTER_LOGO}
                  alt="180 Degrees Consulting at Michigan State"
                  className="footer-logo-img"
                />
              </div>
              <p className="footer-description">
                Empowering organizations through student-driven consulting excellence. 
                We provide innovative solutions while developing the next generation of business leaders.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Organization</h3>
              <ul className="footer-links">
                {footerLinks.organization.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-links">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul className="footer-links">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact</h3>
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{info.icon}</span>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {currentYear} 180 Degrees Consulting MSU. All rights reserved.</p>
              <div className="footer-bottom-links">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 