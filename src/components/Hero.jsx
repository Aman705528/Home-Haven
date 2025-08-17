
import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Your Dream Home Awaits with Brickland Consulting</h1>
        <p>
          We are committed to helping you find the perfect property.
          From cozy apartments to luxury estates, our expert agents are here to guide you every step of the way.
        </p>
        <div className="hero-button">
          <button>Search Properties</button>
          <button className="secondary-button">List Your Property</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/housing.png" alt="Modern houses" />
      </div>
    </div>
  );
};

export default Hero;