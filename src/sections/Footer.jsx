// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms &amp; Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/Shivaanshtyagii"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/shivansh-tyagi-463250255/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Twitter"
        >
          <img src="/assets/linkedin.png" alt="twitter" className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/shivaanshtyagii?igsh=YmZoandoYnU4ZW44"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Shivansh Tyagi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
