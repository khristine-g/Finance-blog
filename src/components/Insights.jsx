import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../Insights.css';

const insights = [
  {
    title: 'AI-Powered Investing',
    description: 'Forecasting 2025’s biggest shift in asset management.',
    image: './images/finance2.jpg',
  },
  {
    title: 'Sustainable Finance Surge',
    description: 'Green bonds, ESG, and why investors are pivoting.',
    image: './images/finance6.jpg',
  },
  {
    title: 'Crypto Regulatory Outlook',
    description: 'New regulations shaping decentralized finance.',
    image: './images/finance8.jpg',
  }
];

// Mock financial chart data
const chartData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1600 },
  { name: 'Mar', value: 1450 },
  { name: 'Apr', value: 1700 },
  { name: 'May', value: 2100 },
  { name: 'Jun', value: 1900 },
  { name: 'Jul', value: 2300 }
];

const Insights = () => {
  return (
    <div className="insights-container">
      <motion.div 
        className="insights-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Financial Insights 2025</h2>
        <p>Explore data-driven trends and analysis that shape tomorrow’s investments.</p>
      </motion.div>

      <div className="insight-cards">
        {insights.map((item, idx) => (
          <motion.div
            key={idx}
            className="insight-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="insight-chart"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Real-Time Investment Index (YTD)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0a2a66" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="expert-section">
        <motion.div
          className="expert-quote"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote>
            “In 2025, smart money is not just fast — it’s intelligent. Real-time data powers real-time strategy.”
          </blockquote>
          <p>— Dr. Amani Kale, FinTech Strategist</p>
        </motion.div>
      </div>

      <motion.div 
        className="insight-cta"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Don’t Miss Weekly Market Insights</h3>
        <button>Subscribe Now</button>
      </motion.div>
    </div>
  );
};

export default Insights;
