import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Consulting Team', path: '/consulting-team' },
      { name: 'Join Us', path: '/join-us' }
    ],
    services: [
      { name: 'For Clients', path: '/for-clients' },
      { name: 'Our Process', path: '/for-clients' },
      { name: 'Success Stories', path: '/for-clients' },
      { name: 'Industries', path: '/for-clients' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Resources', path: '/resources' },
      { name: 'FAQ', path: '/join-us' }
    ]
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/180-degrees-consulting-msu/',
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
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Organization Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-text">180°</span>
                <span className="logo-subtext">DC MSU</span>
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
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
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