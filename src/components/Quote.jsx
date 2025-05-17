import React from "react";
import { motion } from "framer-motion";
import "../Quote.css";

const Quote = () => {
  return (
    <div className="quote-container">
      {/* Background image or video */}
      <video
        autoPlay
        muted
        loop
        className="quote-bg"
        poster="/fallback.jpg" // Optional fallback image
      >
        <source src="/videos/finance4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="quote-overlay">
        <motion.h1
          className="quote-text"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          “In the world of business, the people who are most successful are
          those who are doing what they love.”
        </motion.h1>

        <motion.p
          className="quote-author"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          – Warren Buffett
        </motion.p>
      </div>
    </div>
  );
};

export default Quote;
