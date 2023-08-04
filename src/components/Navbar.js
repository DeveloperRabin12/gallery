import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <FontAwesomeIcon icon={faCamera} className="camera-icon" />
          PhotoGallery
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/photos" className="nav-link">
            Photo Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
