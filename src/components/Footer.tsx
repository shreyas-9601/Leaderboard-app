import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="scrolling-text">
        © 2024 Leaderboard app | Contact: info@leaderboard.com | Follow us on
        <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer"> Twitter</a>,
        <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer"> Facebook</a>,
        <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
