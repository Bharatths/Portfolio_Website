import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

/**
 * Projects Component
 * Displays specific projects as feature cards.
 * Each card includes a title, description, and link to GitHub.
 */
const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A responsive personal portfolio built with React.js and plain CSS. Features smooth scrolling, mobile design, and modern animations.',
            github: 'https://github.com/Bharatths/Portfolio_Website',
        },
        {
            title: 'Password Manager',
            description: 'A desktop-based password manager developed using JavaFX and MySQL, implementing AES encryption with salting to securely store user credentials. The application ensures confidentiality by encrypting sensitive data before database storage and follows secure authentication practices.',
            github: 'https://github.com/Bharatths/Password_-manager-using-java-Mysql',
        }
    ];

    return (
        <section className="projects-section">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-header">
                                <div className="project-folder">📁</div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-footer">
                                <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                                    View Source
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
