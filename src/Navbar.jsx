import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // മെനു ഓപ്പൺ/ക്ലോസ് സ്റ്റേറ്റ്
  const [isMobile, setIsMobile] = useState(false);

  // ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ മെനു ക്ലോസ് ചെയ്യാനുള്ള ഫങ്ഷൻ
  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <h3 className="logo">MUHAMMED SHIJIL NK</h3>
      
      {/* ഇവിടെ നിങ്ങളുടെ സ്റ്റേറ്റ് അനുസരിച്ചായിരിക്കും ക്ലാസ് നെയിം മാറുക */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <a href="#home" onClick={closeMobileMenu}>Home</a>
        </li>
        <li>
          <a href="#services" onClick={closeMobileMenu}>Services</a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a>
        </li>
        <li>
          <a href="#team" onClick={closeMobileMenu}>Team</a>
        </li>
        <li>
          <a href="#blog" onClick={closeMobileMenu}>Blog</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </li>
      </ul>

      {/* ഹാംബർഗർ ഐക്കൺ ബട്ടൺ */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar;