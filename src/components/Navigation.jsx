import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// NOTE: The useAuth hook has been temporarily removed to resolve a dependency issue.
// You can re-integrate it by uncommenting the relevant lines once your AuthContext is available.
// import { useAuth } from '../context/AuthContext.jsx';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { logout } = useAuth(); // Uncomment when AuthContext is ready
  const navigate = useNavigate();

  // Handles logout action
  const handleLogout = () => {
    // logout(); // Uncomment when AuthContext is ready
    navigate('/login'); // Redirect to login page after logout
  };

  // Navigates to the Contact Us page
  const handleNavigateToContact = () => {
    navigate('/contact-us');
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  // Navigates to the About Us page
  const handleNavigateToAbout = () => {
    navigate('/AboutUs'); // This path must match your route in App.js
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="container">
      <div className="logo">
        <h1>Brickland Consulting</h1>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Links */}
      <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#">Listings</a></li>
        <li><a href="#">Neighborhoods</a></li>
        
        {/* About Us Link */}
        <li>
          <button onClick={handleNavigateToAbout} className="nav-button">
            About Us
          </button>
        </li>

        {/* Contact Us Link */}
        <li>
          <button onClick={handleNavigateToContact} className="nav-button">
            Contact Us
          </button>
        </li>
        
        {/* Logout button for mobile view */}
        <li className="login-btn-mobile">
          <button onClick={handleLogout} className="login-btn">Logout</button>
        </li>
      </ul>

      {/* Logout button for desktop view */}
      <button onClick={handleLogout} className="login-btn login-btn-desktop">
        Logout
      </button>
    </nav>
  );
};

export default Navigation;
