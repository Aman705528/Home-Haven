import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    // This structure uses the classes from your App.css file
    <div className="hero">
      <div className="hero-content">
        <h1>
          Your Dream Home Awaits with Brickland Consulting
        </h1>
        <p>
          Expert guidance in finding the perfect property for you. From cozy apartments to luxury estates, we're here to make your journey seamless.
        </p>
        <div className="hero-button">
          <button onClick={() => navigate('/search')}>
            Start Your Search
          </button>
          <button onClick={() => navigate('/listings')} className="secondary-button">
            Browse Listings
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80" 
          alt="Modern house" 
        />
      </div>
    </div>
  );
};

export default HomePage;
