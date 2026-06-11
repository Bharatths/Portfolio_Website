import React from 'react';
import './Skills.css';

/**
 * Skills Component
 * Displays technical skills using a grid of cards.
 * Includes progress bars to indicate proficiency levels 
 * and hover effects for interactivity.
 */
const Skills = () => {
    const skillsList = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Python', level: 85 },
        { name: 'Networking Basics', level: 70 },
        { name: 'C', level: 65 },
        { name: 'MySQL', level: 85 }
    ];

    return (
        <section className="skills-section">
            <div className="section-container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {skillsList.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar-fill"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
