import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

/**
 * Navbar Component
 * Features:
 * - Logo with name
 * - Navigation links with smooth scroll
 * - Mobile responsive hamburger menu using useState
 */
const Navbar = () => {
    // State to handle mobile menu toggle
    const [click, setClick] = useState(false);

    // Function to toggle the mobile menu
    const handleClick = () => setClick(!click);

    // Function to close the mobile menu when a link is clicked
    const closeMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo Section */}
                <a href="#home" className="navbar-logo" onClick={closeMenu}>
                    Bharatth S
                </a>

                {/* Hamburger Icon for Mobile */}
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navigation Links */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" className="nav-links" onClick={closeMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={closeMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-links" onClick={closeMenu}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={closeMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#certifications" className="nav-links" onClick={closeMenu}>Certifications</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
