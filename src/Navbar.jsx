import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false); 

  return (
    <nav className="navbar">
      {/* ലോഗോ കൂടുതൽ പ്രൊഫഷണൽ ആക്കി */}
      <div className="navbar-logo">
        <h3><span>S</span>HIJIL.</h3>
      </div>
      
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Blog
          </NavLink>
        </li>
        {/* കോൺടാക്റ്റ് ലിങ്ക് ഒരു ബട്ടൺ സ്റ്റൈലിലേക്ക് മാറ്റി */}
        <li className="nav-btn-container">
          <NavLink to="/contact" onClick={closeMenu} className="btn-contact">
            Contact
          </NavLink>
        </li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;