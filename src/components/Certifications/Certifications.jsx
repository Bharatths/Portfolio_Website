import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css';

/**
 * Certifications Component
 * Lists professional certifications and training completed.
 */
const Certifications = () => {
    const certifications = [
        {
            title: 'Complete Guide to C Programming Foundations',
            issuer: 'LinkedIn',
            date: 'Jan 2025'
        },
        {
            title: 'Intern - Website Development Using AI ',
            issuer: 'Egitim Ventures LLP',
            date: 'Jan 2026'
        },
    ];

    return (
        <section className="certifications-section">
            <div className="section-container">
                <h2 className="section-title">Certifications</h2>

                <div className="cert-list">
                    {certifications.map((cert, index) => (
                        <div className="cert-item" key={index}>
                            <div className="cert-icon">
                                <FaCertificate />
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p>{cert.issuer} • {cert.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
