import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/components/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="mailto:info@malamacabs.com">
              <i className="fas fa-envelope"></i>
              info@malamacabs.com
            </a>
            <a href="tel:+91-79756-12340">
              <i className="fas fa-phone"></i>
              Tel: +91 79756 12340
            </a>
          </div>
          <div className="social-links">
            <a href="https://x.com/malamacabs" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/malamacabs" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/@malamacabs" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/malamacabs" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/malamacabs" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/mainlogo.png" alt="Malama" />
          </Link>

          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/drive-with-us" className={location.pathname === "/drive-with-us" ? "active" : ""}>
                  Drive With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <motion.a 
            href="tel:+91-79756-12340"
            className="call-now-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="phone-icon"
              animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              <i className="fas fa-phone-alt"></i>
            </motion.div>
            <span className="phone-number">+91 79756 12340</span>
          </motion.a>
        </div>
      </header>
    </>
  );
};

export default Header; 