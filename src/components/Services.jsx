// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import "../Services.css";

const services = [
  {
    title: "Corporate Tax",
    description: "Efficient corporate tax strategies that align with business goals.",
    image: "/images/finance11.jpg",
    points: [
      "Tax planning and structuring",
      "Compliance with regulations",
      "Cross-border advisory"
    ],
  },
  {
    title: "External Audit",
    description: "Independent assurance that enhances the credibility of your financial statements.",
    image: "/images/finance3.jpg",
    points: [
      "Statutory audits",
      "Risk assessments",
      "Regulatory compliance"
    ],
  },
  {
    title: "Stock Taking",
    description: "Accurate inventory auditing for businesses of all sizes.",
    image: "/images/finance4.jpg",
    points: [
      "Physical stock counts",
      "Inventory valuation",
      "Warehouse audits"
    ],
  },
  {
    title: "Private Client Tax",
    description: "Tailored tax advice for individuals and families.",
    image: "/images/finance5.jpg",
    points: [
      "Personal tax planning",
      "Wealth structuring",
      "Inheritance tax guidance"
    ],
  },
  {
    title: "Bookkeeping",
    description: "Reliable and accurate bookkeeping to manage your finances.",
    image: "/images/finance6.jpg",
    points: [
      "Monthly reconciliations",
      "Accounts payable/receivable",
      "Ledger management"
    ],
  },
  {
    title: "Data Analysis",
    description: "Data-driven insights for smarter decision-making.",
    image: "/images/finance8.jpg",
    points: [
      "Trend analysis",
      "Financial forecasting",
      "Business intelligence"
    ],
  },
  {
    title: "Sustainability & ESG",
    description: "Support for your environmental, social and governance reporting.",
    image: "/images/finance.jpg",
    points: [
      "ESG metrics tracking",
      "Sustainability reporting",
      "Regulatory alignment"
    ],
  },
  {
    title: "Financial Reporting",
    description: "Transparent and accurate reporting to meet stakeholder needs.",
    image: "/images/finance7.jpg",
    points: [
      "IFRS/GAAP reporting",
      "Consolidated statements",
      "Disclosure support"
    ],
  },
  {
    title: "Training",
    description: "Upskill your team with expert-led financial training programs.",
    image: "/images/finance9.jpg",
    points: [
      "Custom training modules",
      "Workshops & webinars",
      "CPD-accredited sessions"
    ],
  }
];

const Services = () => {
  return (
    <div className="services-wrapper">
      {/* Top Banner */}
      <div className="services-banner">
        <motion.div
          className="services-banner-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>Services</p>
          <h1>Discover all services</h1>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="service-content">
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point, idx) => (
                    <li key={idx}>
                      <FaChevronRight className="icon" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.img
                src={service.image}
                alt={service.title}
                className="service-image"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;

