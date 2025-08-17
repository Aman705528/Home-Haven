import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
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
        <li><a href="#">Listings</a></li>
        <li><a href="#">Neighborhoods</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
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