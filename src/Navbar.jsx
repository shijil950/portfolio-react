import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ലിങ്കിനായി ഇത് ഉപയോഗിക്കുന്നു
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false); // മെനു ക്ലോസ് ചെയ്യാനുള്ള ഫങ്ഷൻ

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>MUHAMMED SHIJIL NK</h3>
      </div>
      
      {/* Link ഉപയോഗിച്ച് റൂട്ടിംഗ് സെറ്റ് ചെയ്യുന്നു */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="/team" onClick={closeMenu}>Team</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;