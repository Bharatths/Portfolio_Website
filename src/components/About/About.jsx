import React from 'react';
import profileImg from '../../assets/profile.jpeg';
import './About.css';

/**
 * About Component
 * Features:
 * - Personal bio
 * - Education details
 * - Career objectives
 * Organized into a clean grid/flex layout
 */
const About = () => {
    return (
        <section className="about-section">
            <div className="section-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I'm Bharatth, a dedicated <strong>B.E Computer Science and Engineering</strong> student specializing in <strong>Cyber Security</strong>.
                        </p>
                        <p>
                            My journey into technology began with a curiosity about how systems work — and more importantly,
                            how they can be protected from evolving cyber threats.
                        </p>
                        <p>
                            I aim to bridge the gap between software development and security, believing that code
                            should not only be functional and visually appealing, but also secure, reliable, and resilient.
                        </p>

                        <h3>Education</h3>
                        <ul className="education-list">
                            <li>
                                <strong>B.E in Computer Science and Engineering with Cyber Security</strong>
                                <p>Rajalakshmi Engineering College | 2024 - Present | 2nd Year</p>
                            </li>
                        </ul>

                        <h3>Career Objective</h3>
                        <p>
                            To leverage my technical expertise in web development and cyber security to design
                            secure and resilient digital systems, while continuously enhancing my skills to
                            become a professional penetration tester.
                        </p>
                    </div>

                    <div className="about-image">
                        <div className="image-wrapper">
                            <img src={profileImg} alt="Bharatth S" className="profile-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
