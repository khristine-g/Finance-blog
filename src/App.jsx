import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

import Footer from './components/Footer';
import Services from './components/Services'; // Make sure this exists
import About from './components/About';       
import Contact from './components/Contact';   

import './App.css';
import Insights from './components/Insights';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
