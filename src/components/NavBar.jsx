import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from '../components/LanguageContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const translations = {
    geo: {
      home: "მთავარი",
      products: "პროდუქტები",
      contact: "კონტაქტი",
      theme: darkMode ? "ღია თემა" : "მუქი თემა",
      lang: "English",
    },
    eng: {
      home: "Home",
      products: "Products",
      contact: "Contact",
      theme: darkMode ? "Light Mode" : "Dark Mode",
      lang: "ქართული",
    },
  };

  const t = translations[language];

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <Link to="/" className="navbar-title" onClick={closeMenu}>
        <h1>SelfCare</h1>
      </Link>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>{t.home}</Link>
        <Link to="/products" onClick={closeMenu}>{t.products}</Link>
        <Link to="/contact" className="contact-link" onClick={closeMenu}>{t.contact}</Link>

        <button onClick={() => { setDarkMode(prev => !prev); closeMenu(); }}>
          {t.theme}
        </button>

        <button onClick={() => { setLanguage(language === 'geo' ? 'eng' : 'geo'); closeMenu(); }}>
          {t.lang}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
