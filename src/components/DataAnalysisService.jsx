import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaSearchDollar, FaUserShield } from 'react-icons/fa';
import '../DataAnalysisService.css';

// Section entrance animation
const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

// Text intro
const textVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

// Image slide-in
const imageVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

// Card container with staggered children
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

// Each card
const cardVariant = {
  hidden: { opacity: 0, y: 60, rotateX: 20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// Icon animation
const iconVariant = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
};

const DataAnalysisService = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: 'Trend Forecasting',
      desc: 'Identify future trends from historical and real-time financial data.',
    },
    {
      icon: <FaDatabase />,
      title: 'Big Data Insights',
      desc: 'Handle and visualize large datasets with precision and clarity.',
    },
    {
      icon: <FaSearchDollar />,
      title: 'Financial Pattern Analysis',
      desc: 'Detect spending patterns, investment behavior, and more.',
    },
    {
      icon: <FaUserShield />,
      title: 'Risk Management',
      desc: 'Analyze and mitigate financial risks using robust data models.',
    },
  ];

  return (
    <motion.section
      className="data-analysis-section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="data-grid">
        {/* Image */}
        <motion.div className="data-image" variants={imageVariant}>
          <img src="/images/finance4.jpg" alt="Financial data" />
        </motion.div>

        {/* Content */}
        <div className="data-content">
          <motion.div className="data-intro" variants={textVariant}>
            <h2>📊 Make Smarter Financial Decisions with Data</h2>
            <p>
              Our advanced analytics platform helps clients turn complex data into clear insights,
              empowering smarter financial decisions and growth strategies.
            </p>
          </motion.div>

          <motion.div
            className="data-cards"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                className="data-card"
                variants={cardVariant}
                whileHover={{ scale: 1.06, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >
                <motion.div className="icon" variants={iconVariant}>
                  {item.icon}
                </motion.div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DataAnalysisService;


