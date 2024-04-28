import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className="contact-us-content">
                <h2>Contact Us</h2>
                <p>If you are a company interested in collaborating with us or have any inquiries, please feel free to contact us using the form below.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="s">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
