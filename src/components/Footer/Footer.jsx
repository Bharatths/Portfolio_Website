import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

/**
 * Footer Component
 * Displays copyright info and social links.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-socials">
                    <a href="https://github.com/Bharatths" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/bharatth-s-63060832a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://x.com/Bharatthsasi3" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>

                <div className="footer-text">
                    <p>© {currentYear} Bharatth S. Built with React.js</p>
                    <p className="footer-tagline">Secure by Design</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
