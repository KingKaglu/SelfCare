import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>სელფქეარი</h3>
          <p>თავის მოვლის პროდუქტები თქვენთვის</p>
        </div>

        <div className="footer-column">
          <h4>მენიუ</h4>
          <ul>
            <li><a href="/">მთავარი</a></li>
            <li><a href="/products">პროდუქტები</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>კონტაქტი</h4>
          <p>ელ.ფოსტა: GzirishviliGiorgiWork@gmail.com</p>
          <p>ტელ: +995 599 21 31 80</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} სელფქეარი. ყველა უფლება დაცულია.</p>
      </div>
    </footer>
  );
};

export default Footer;
