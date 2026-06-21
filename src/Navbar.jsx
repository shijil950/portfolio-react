import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // മൊബൈൽ മെനു ഓപ്പൺ/ക്ലോസ് ചെയ്യാനുള്ള സ്റ്റേറ്റ്
  const [isOpen, setIsOpen] = useState(false);

  // ലിങ്കുകളിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ മെനു തനിയെ അടയാൻ
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>MUHAMMED SHIJIL NK</h3>
      </div>

      {/* isOpen ട്രൂ ആണെങ്കിൽ 'active' ക്ലാസ് കൂടി വരും */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#team" onClick={closeMenu}>Team</a></li>
        <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* മൊബൈലിൽ കാണിക്കാനുള്ള മൂന്ന് വരകളുടെ/ഗുണന ചിഹ്നത്തിന്റെ ബട്ടൺ */}
      <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;