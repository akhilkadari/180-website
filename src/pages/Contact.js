import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let stateKey = name;
    if (name === "user_name") stateKey = "name";
    if (name === "user_email") stateKey = "email";
    setFormData((prev) => ({ ...prev, [stateKey]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "msu@180dc.org",
      sub: "Reply within 24 hours",
      link: "mailto:msu@180dc.org",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Minskoff Pavilion",
      sub: "Michigan State University · East Lansing, MI",
      link: "https://maps.google.com/?q=Michigan+State+University+Minskoff+Pavilion",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/180-degrees-consulting-michigan-state-university",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/msu180dc/?hl=en",
    },
  ];

  return (
    <div className="contact">
      {/* Hero - left-aligned with inline info chips (business-card feel) */}
      <section
        className="page-hero contact-hero-v2"
        style={{
          "--hero-bg": "url('/images/backgrounds/minskoff-atrium.jpg')",
        }}
      >
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container contact-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="page-hero-eyebrow">Get in touch</span>
            <h1 className="page-hero-title page-hero-title-left">
              Let's build something
              <br />
              <span className="accent">meaningful.</span>
            </h1>
            <p className="page-hero-sub page-hero-sub-left">
              Whether you're a nonprofit looking for strategic support, a
              student ready to apply, or just curious about what we do, we'd
              love to hear from you.
            </p>
            <motion.div
              className="contact-hero-chips"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="mailto:msu@180dc.org" className="contact-hero-chip">
                <FaEnvelope />
                <span>msu@180dc.org</span>
              </a>
              <a
                href="https://maps.google.com/?q=Michigan+State+University+Minskoff+Pavilion"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-hero-chip"
              >
                <FaMapMarkerAlt />
                <span>Minskoff Pavilion · East Lansing</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Form + Info Grid - simplified. The previous version stacked too
          many redundant section headers ("Send a message" + "Start the
          conversation"; "Other ways" + "Or reach us directly"; "Follow us"),
          which made the page feel cluttered. Now: one clear header per
          column, sidebar collapses contact methods into a single card with
          inline social row, no nested eyebrows. */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid-v2">
            {/* Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="contact-form-title">Send us a message.</h2>
              <p className="contact-form-sub">
                We reply to every inquiry within 24 hours, on weekdays.
              </p>

              <form
                onSubmit={handleSubmit}
                className="contact-form-v2"
                ref={form}
              >
                <input type="hidden" name="to_email" value="msu@180dc.org" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@org.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">What's this about?</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="client-inquiry">Client inquiry</option>
                    <option value="join-team">Join our team</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="general">General question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      Send message <FaPaperPlane />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    className="form-banner form-banner-success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thanks! We'll be in touch within 24 hours.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    className="form-banner form-banner-error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Something went wrong sending your message. Email us directly at msu@180dc.org.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Sidebar - single consolidated card. No nested headers. */}
            <motion.aside
              className="contact-sidebar"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="contact-sidebar-card">
                <h3 className="contact-sidebar-title">Prefer not to use the form?</h3>
                <p className="contact-sidebar-sub">
                  Reach out directly - we read everything that lands in our
                  inbox.
                </p>

                <div className="contact-sidebar-list">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-sidebar-row"
                    >
                      <span className="contact-sidebar-icon">{info.icon}</span>
                      <span className="contact-sidebar-row-text">
                        <span className="contact-sidebar-row-value">
                          {info.value}
                        </span>
                        <span className="contact-sidebar-row-sub">
                          {info.sub}
                        </span>
                      </span>
                      <FaArrowRight className="contact-sidebar-arrow" />
                    </a>
                  ))}
                </div>

                <div className="contact-sidebar-divider" />

                <div className="contact-sidebar-social">
                  <span className="contact-sidebar-social-label">
                    Follow along
                  </span>
                  <div className="contact-sidebar-social-icons">
                    {socialLinks.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-sidebar-social-icon"
                        aria-label={s.name}
                        title={s.name}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
