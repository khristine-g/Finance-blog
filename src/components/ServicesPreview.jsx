import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import  services  from "../data/services";
import "../Services.css";

const ServicesPreview = () => {
  const navigate = useNavigate();
  const previewServices = services.slice(0, 3);

  return (
    <div className="services-wrapper">
      <div className="preview-services-banner">
        <motion.div
          className="preview-services-banner-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        
          <h1 className="preview-header">Explore Top Services</h1>
        </motion.div>
      </div>

      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {previewServices.map((service, index) => (
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

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/services")}
          className="services-button"
        >
          View All Services
        </button>
      </div>
    </div>
  );
};

export default ServicesPreview;
