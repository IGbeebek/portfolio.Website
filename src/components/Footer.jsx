import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Bibek Tamang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
