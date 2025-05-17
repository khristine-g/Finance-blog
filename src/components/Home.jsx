import React from 'react';
import Portfolio from './Portfolio';
import DataAnalysisService from './DataAnalysisService';
import TransformationIdeas from './TransformationIdeas';
import UniqueSection from './UniqueSection';
import About from './About';
import HowWeDoIt from './HowWeDoIt';
import Insights from './Insights';
import Quote from './Quote';
import '../Home.css';

const Home = () => {
  return (
    <>
    <div className="home-hero">
      <video className="background-video" autoPlay muted loop playsInline>
      <source src="/videos/finance.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      <div className="overlay">
        <div className="home-hero-content">
          <h1>Making Your Business Grow in a Quick Time-Frame</h1>
          <p>
          Asset Manager | Capital Provider | Wealth & Retirement Solutions 


          </p>
          <a href="/about" className="home-discover-btn">Discover More</a>
        </div>
      </div>
    </div>
    <Portfolio />
   
    <HowWeDoIt />
    <Quote />
    <Insights />
    <DataAnalysisService />
  <About />
    <TransformationIdeas />
    <UniqueSection />
    
    </>
  );
};

export default Home;
