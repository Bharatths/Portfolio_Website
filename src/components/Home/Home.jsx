import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

/**
 * Home Component (Hero Section)
 * Features:
 * - Direct greeting and introduction
 * - Profession and subtitle
 * - Download CTA (Call to action) button
 * - Social media links
 */
const Home = () => {
    return (
        <section className="home-section">
            <div className="home-container">
                <div className="home-content">
                    <p className="home-greet">Hi, I'm</p>
                    <h1 className="home-name">Bharatth S</h1>
                    <h2 className="home-subtitle">Cyber Security Enthusiast | Web Developer</h2>
                    <p className="home-description">
                        I specialize in Cyber Security and enjoy developing secure, scalable, and user-friendly
                        web applications. My current focus is on penetration testing, secure coding practices,
                        and modern web technologies.
                    </p>

                    <div className="home-buttons">
                        <a href="/resume.pdf" download className="btn-resume">
                            Download Resume
                        </a>
                        <div className="home-socials">
                            <a href="https://github.com/Bharatths" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/bharatth-s-63060832a/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
