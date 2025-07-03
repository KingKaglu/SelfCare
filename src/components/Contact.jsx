import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import icons
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-card">
        <h2 className="contact-title">დაგვიკავშირდით</h2>
        <p className="contact-description">
          მოხარული ვართ, რომ დაგეხმარებით! დაგვიკავშირდით ქვემოთ მოცემული მეთოდებით.
        </p>

        <div className="contact-info-grid">
          {/* Phone Contact */}
          <div className="contact-item phone-item">
            <Phone className="contact-item-icon" />
            <h3 className="contact-item-title">ტელეფონი</h3>
            <a href="tel:+995555123456" className="contact-link">
              +995 599 21 31 80
            </a>
          </div>

          {/* Email Contact */}
          <div className="contact-item email-item">
            <Mail className="contact-item-icon" />
            <h3 className="contact-item-title">ელ. ფოსტა</h3>
            <a href="mailto:info@selfcare.ge" className="contact-link">
              GzirishviliGiorgiWork@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-media-section">
          <h3 className="social-media-title">გამოგვყევით სოციალურ ქსელებში</h3>
          <div className="social-icons-container">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61577830900167"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Facebook"
            >
              <FaFacebookF className="contact-icon facebook-icon" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/yourselfcarepage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
            >
              <FaInstagram className="contact-icon instagram-icon" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@yourselfcarepage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="TikTok"
            >
              <FaTiktok className="contact-icon tiktok-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;