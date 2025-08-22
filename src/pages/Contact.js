import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaInstagram, 
  FaPaperPlane
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Map form field names to state keys
    let stateKey = name;
    if (name === 'user_name') stateKey = 'name';
    if (name === 'user_email') stateKey = 'email';
    
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Log the configuration being used
      console.log('Attempting to send email with config:', {
        SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
        TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID,
        PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? '***' + EMAILJS_CONFIG.PUBLIC_KEY.slice(-4) : 'NOT_SET'
      });
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        stack: error.stack
      });
      
      // Show more specific error message
      if (error.text) {
        console.error('EmailJS error text:', error.text);
      }
      if (error.message) {
        console.error('Error message:', error.message);
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "msu@180dc.org",
      link: "mailto:msu@180dc.org"
    },
   
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Michigan State University, East Lansing, MI",
      link: "https://maps.google.com/?q=Michigan+State+University"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/180-degrees-consulting-msu/",
      color: "#0077b5"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/msu180dc/?hl=en",
      color: "#e4405f"
    },
    
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1>Contact Us</h1>
            <p>Get in touch with our team to discuss your consulting needs or learn more about joining us</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="contact-form" ref={form}>
                {/* Hidden recipient field for EmailJS */}
                <input type="hidden" name="to_email" value="msu@180dc.org" />
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="client-inquiry">Client Inquiry</option>
                    <option value="join-team">Join Our Team</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Sorry! There was an error sending your message. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Get in Touch</h2>
              <p style={{ color: '#6E9F32' }}>We'd love to hear from you. Here are the best ways to reach us.</p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
            
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--social-color': social.color }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 