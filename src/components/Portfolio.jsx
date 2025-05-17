import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import '../Portfolio.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Portfolio = () => {
  const chartData = {
    labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
    datasets: [
      {
        label: 'Projected Revenue ($)',
        data: [80000, 95000, 110000, 130000],
        fill: false,
        borderColor: '#28a745', // green
        backgroundColor: '#28a745',
        tension: 0.3,
        pointRadius: 5,
      },
      {
        label: 'Projected Expenses ($)',
        data: [50000, 52000, 60000, 65000],
        fill: false,
        borderColor: '#dc3545', // red
        backgroundColor: '#dc3545',
        tension: 0.3,
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#0e2a47',
          font: { size: 14, weight: 'bold' },
        },
      },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false,
        callbacks: {
          label: (context) => `$${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#0e2a47',
          callback: (value) => `$${(value / 1000).toFixed(0)}k`,
        },
        title: {
          display: true,
          text: 'Amount (USD)',
          color: '#0e2a47',
          font: { size: 14, weight: 'bold' },
        },
      },
      x: {
        ticks: {
          color: '#0e2a47',
          font: { size: 14, weight: 'bold' },
        },
        title: {
          display: true,
          text: 'Quarters of 2025',
          color: '#0e2a47',
          font: { size: 14, weight: 'bold' },
        },
      },
    },
  };

  return (
    <motion.div
      className="portfolio-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Column: Text + Chart */}
      <motion.div className="left-column">
        <motion.h2
          variants={textVariants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Comprehensive Accounting Insights for 2025
        </motion.h2>
        <motion.p
          variants={textVariants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Empower your business with precise accounting analysis. Track revenue, expenses,
          and optimize your financial decisions for a profitable 2025.
        </motion.p>
        <motion.ul
          variants={textVariants}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li variants={textVariants} custom={4}>
            📈 Detailed revenue and expense tracking
          </motion.li>
          <motion.li variants={textVariants} custom={5}>
            🧾 Streamlined bookkeeping and financial reports
          </motion.li>
          <motion.li variants={textVariants} custom={6}>
            💼 Strategic advice to maximize your business growth
          </motion.li>
        </motion.ul>

        <motion.div
          className="chart-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Line data={chartData} options={chartOptions} />
        </motion.div>

        <motion.a
          href="/services"
          className="cta-button"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: 'backOut' }}
          viewport={{ once: true }}
        >
          Explore Our Services
        </motion.a>
      </motion.div>

      {/* Right Column: Local Video */}
      <motion.div
        className="video-column"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <video
          className="local-video"
          controls
          src="/videos/finance5.mp4"
          type="video/mp4"
          preload="metadata"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
