import React, { useState } from 'react';
import './Contact.css';

/**
 * Contact Component
 * Features:
 * - Controlled form inputs using useState
 * - Basic form validation
 * - Submission alert (simulated backend)
 */
const Contact = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic check
        if (formData.name && formData.email && formData.message) {
            // Simulate submission
            setIsSubmitted(true);
            // Reset form
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <section className="contact-section">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    {!isSubmitted ? (
                        <>
                            <p className="contact-intro">
                                I'm currently looking for internship opportunities or collaborations.
                                Feel free to drop a message!
                            </p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Your Message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-submit">Send Message</button>
                            </form>
                        </>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>Message Sent Successfully!</h3>
                            <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                            <button className="btn-back" onClick={() => setIsSubmitted(false)}>
                                Send another message
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
