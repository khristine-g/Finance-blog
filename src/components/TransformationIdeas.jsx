import React from 'react';
import { motion } from 'framer-motion';
import '../TransformationIdeas.css';
import bgVideo from '/videos/finance2.mp4'; // Replace with your actual video path

const items = [
  {
    title: 'Assessment',
    desc: 'We help you evaluate current operations to identify inefficiencies and opportunities.',
  },
  {
    title: 'Assets',
    desc: 'Unlock the full potential of your resources through structured analysis and reallocation.',
  },
  {
    title: 'Innovative Ideas',
    desc: 'Drive transformation with creative solutions tailored to your financial goals.',
  },
];

const TransformationIdeas = () => {
  return (
    <section className="transformation-section">
      <video className="bg-video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <motion.div
        className="content-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h2
          className="main-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Business Transformation Ideas that Turn Your Company into a Financial Powerhouse
        </motion.h2>

        <motion.p
          className="intro-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We reject shortcuts and focus on strategic growth, eliminating distractions and aligning operations for long-term value.
        </motion.p>

        <div className="ideas-grid">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="idea-card"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TransformationIdeas;
