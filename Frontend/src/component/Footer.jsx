import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Frame_LOGO_2.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Address & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Address:</h3>
          <p className="text-sm">
            <a href="https://maps.google.com" className="hover:underline">
              Level 1, 12 Sample St, Sydney NSW 2000
            </a>
          </p>

          <h3 className="text-lg font-semibold text-white mt-5 mb-3">Contact:</h3>
          <p className="text-sm">
            <a href="tel:+911234567890" className="hover:underline">+91 123 456 7890</a>
          </p>
          <p className="text-sm">
            <a href="mailto:contact@bidai.in" className="hover:underline">contact@bidai.in</a>
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Product & Company Links */}
        <div className="flex space-x-16">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo with vertical curve */}
        <div className="relative bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={Logo}
            alt="Bidai Logo"
            className="w-40 h-auto ml-8 z-10"
          />
          <svg
            className="absolute top-0 right-0 h-full w-full"
            viewBox="0 0 900 300"
            preserveAspectRatio="none"
          >
            <path
              d="M300,0 Q240,150 300,300 L0,300 L0,0 Z"
                fill="gray"
            />
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 max-w-7xl mx-auto"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Bidai. All rights reserved.</p>
        <ul className="flex space-x-4 mt-3 md:mt-0">
          <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          <li><Link to="/cookies" className="hover:text-white">Cookies Settings</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
