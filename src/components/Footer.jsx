import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
import "../Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

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
          <p>Empowering growth through innovative financial strategies.</p>
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

        <div className="footer-subscribe-social">
          <div className="footer-subscribe">
            <h4>Subscribe to our newsletter</h4>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
              <button type="submit">Subscribe</button>
            </form>
            {message && <p className="subscribe-message">{message}</p>}
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <FaLinkedin />
              <FaTwitter />
              <FaFacebookF />
            </div>
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

