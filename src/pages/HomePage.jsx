import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Astrological Consultation</h1>
      <p>Your gateway to expert astrological guidance.</p>
      <Link to="/problems" className="home-button">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
