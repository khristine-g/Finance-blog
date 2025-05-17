import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../HowWeDoIt.css";

const HowWeDoIt = () => {
  return (
    <div className="how-wrapper">
      <motion.div
        className="background-blur"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="how-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="how-title"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Strategic Advisors, Trusted Partners, Financial Solutions Architects
        </motion.h1>

        <motion.p
          className="how-description"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We don’t just react to change — we shape it. We
          collaborate with individuals, startups, and institutions to deliver
          accounting, audit, and financial advisory services tailored for growth
          in an evolving economy. From navigating complex tax regulations to
          streamlining compliance, we bring structure, clarity, and confidence to
          your financial journey. Whether you're scaling a business or securing
          your legacy, we offer the tools, insights, and precision to help you
          move forward — with intention.

          
          We
          collaborate with individuals, startups, and institutions to deliver
          accounting, audit, and financial advisory services tailored for growth
          in an evolving economy. From navigating complex tax regulations to
          streamlining compliance, we bring structure, clarity, and confidence to
          your financial journey. Whether you're scaling a business or securing
          your legacy, we offer the tools, insights, and precision to help you
          move forward — with intention.
        </motion.p>
      </motion.div>

      {/* How We Do It Indicator */}
      <motion.div
        className="how-indicator"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="how-text">How We Do It</span>

        <motion.div
  className="circle"
  animate={{ x: [0, 5, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
>
  <FaArrowRight className="arrow-icon" />
</motion.div>

      </motion.div>
    </div>
  );
};

export default HowWeDoIt;
