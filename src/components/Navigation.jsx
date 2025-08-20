import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  // Function to handle all navigation clicks
  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="container">
      <div className="logo">
        <h1>Brickland Consulting</h1>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
        {/* --- HOME BUTTON ADDED HERE --- */}
        <li>
          <button onClick={() => handleNavigate('/')} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigate('/dashboard')} className="nav-button">
            Dashboard
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigate('/search')} className="nav-button">
            Search
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigate('/listings')} className="nav-button">
            Listings
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigate('/neighborhoods')} className="nav-button">
            Neighborhoods
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigate('/AboutUs')} className="nav-button">
            About Us
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigate('/contact-us')} className="nav-button">
            Contact Us
          </button>
        </li>
        <li className="login-btn-mobile">
          <button onClick={handleLogout} className="login-btn">Logout</button>
        </li>
      </ul>

      <button onClick={handleLogout} className="login-btn login-btn-desktop">
        Logout
      </button>
    </nav>
  );
};

export default Navigation;
