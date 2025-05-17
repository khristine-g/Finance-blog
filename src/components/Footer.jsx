import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="footer-brand">
          <h2>Business Unusual</h2>
          <p>
            Empowering growth through innovative financial strategies.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>About</h4>
            <ul>
              <li>Our Story</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Asset Management</li>
              <li>Wealth Planning</li>
              <li>Retirement Solutions</li>
              <li>Private Capital</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email Us</li>
              <li>Call Center</li>
              <li>Office Locations</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaLinkedin />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
      </motion.div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Business Unusual. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
