import React from 'react';
import { motion } from 'framer-motion';
import '../About.css';

const About = () => {
  return (
    <section className="about-page">

      {/* Hero Section */}
      <div className="about-hero">
        <img src="/images/finance11.jpg" alt="Finance hero" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>About Business Unusual</h1>
          <p>Your trusted partner for building a secure financial future.</p>
        </motion.div>
      </div>

      {/* Purpose & Values */}
      <div className="about-section flex-reverse">
        <motion.div
          className="section-heading"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Our Purpose & Values</h2>
        </motion.div>

        <motion.div
          className="section-content"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p>
            At Business Unusual, our mission is to empower individuals and businesses to achieve financial wellness through
            innovative tools, personalized planning, and expert guidance. We believe that everyone deserves clarity
            and confidence in their financial journey.
          </p>

          <div className="cards">
            {['We strive to be transparent in all we do.',
              'We value relationships over transactions.',
              'We foster innovation to stay ahead.',
              'We are committed to ethical financial solutions.'
            ].map((text, i) => (
              <motion.div
                key={i}
                className="info-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* What Makes Us Different */}
      <div className="about-section">
        <motion.div
          className="section-heading"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>What Makes Us Different</h2>
         
        </motion.div>

        <motion.div
          className="section-content"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p>
            We're more than just advisors. We're partners on your financial journey. Our technology-forward approach,
            coupled with deep human insight, allows us to tailor strategies that evolve with your needs.
          </p>
          <p>
            With years of experience, we understand the importance of personalization, trust, and integrity. Your
            goals are at the heart of everything we do.
          </p>

          <motion.img
            src="/images/finance2.jpg"
            alt="Finance discussion"
            className="section-image"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

