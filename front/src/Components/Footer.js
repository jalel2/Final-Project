import React from 'react';
 
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Mental Health</h3>
            <p>Your guide to relaxation and inner peace</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> © 2025 MindWell. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
