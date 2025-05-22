import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [ 'Home','About', 'Services', 'Insights', 'Blogs', 'Contact'];

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.h1 
          className="logo" 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Business Unusual
        </motion.h1>

        <div className="nav-links">
          {navLinks.map((link, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={`/${link.toLowerCase()}`} 
                className="nav-link"
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={`/${link.toLowerCase()}`} 
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

