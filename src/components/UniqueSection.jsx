import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../UniqueSection.css';

const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const UniqueSection = () => {
  const [activeTab, setActiveTab] = useState('what');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const renderContent = () => {
    const contentMap = {
      what: `We offer financial strategies and superior services. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.`,
      results: `Our competent specialists ensure full compliance with worldwide standards. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
      impact: `We help businesses make an impact through tailored financial strategies, ensuring growth and long-term stability.`,
    };

    return (
      <AnimatePresence mode="wait">
        <motion.p
          key={activeTab}
          className="animated-tab-text"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {contentMap[activeTab]}
        </motion.p>
      </AnimatePresence>
    );
  };

  return (
    <motion.section
      className="unique-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* FLEX WRAPPER ADDED */}
      <motion.div
        className="unique-flex-wrapper"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Left - Video */}
        <motion.div
          className="unique-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            className="unique-video"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <source src="/videos/finance3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="unique-right"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          >
            We are Unique
          </motion.h2>

          <motion.p
            className="intro-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <motion.div
            className="tab-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {['what', 'results', 'impact'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? 'active' : ''}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1, backgroundColor: '#0e76a8', color: '#fff' }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tab === 'what' && 'WHAT WE DO'}
                {tab === 'results' && 'FINACIA RESULTS'}
                {tab === 'impact' && 'FINACIA IMPACT'}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="tab-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {renderContent()}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default UniqueSection;


