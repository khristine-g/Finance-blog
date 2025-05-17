import React from 'react';
import { motion } from 'framer-motion';
import '../Contact.css';

const Contact = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <div className="contact-content">
        {/* Left side image */}
        <motion.div 
          className="contact-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img src="/images/finance11.jpg" alt="Contact us" />
        </motion.div>

        {/* Right side form + details */}
        <motion.div
          className="contact-info-form"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your Full Name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
              Phone
              <input type="tel" name="phone" placeholder="+123 456 7890" />
            </label>

            <label>
              Subject
              <input type="text" name="subject" placeholder="Subject" />
            </label>

            <label>
              Message
              <textarea name="message" placeholder="Write your message..." rows="5" required />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-btn"
            >
              Send Message
            </motion.button>
          </form>

         

            
            <div className="map-container">
              <iframe
                title="office-location"
                src="https://maps.google.com/maps?q=finance%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
         
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
