import React, { useState } from 'react';
import '../styles/Contact.css';
import emailIcon from '../assets/email.jpg';
import githubIcon from '../assets/github.jpg.png';
import locationIcon from '../assets/location.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo form)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/IGbeebek' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/igbeebek/' },
    { name: 'Email', icon: '📧', url: 'beebektamang90@gmail.com' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? Feel free to contact me!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Whether you have a question or just want to say 
              hello, I'll do my best to get back to you!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">
                  <img src={emailIcon} alt="Email" />
                </span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:beebektamang90@gmail.com">beebektamang90@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <img src={githubIcon} alt="GitHub" />
                </span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/IGbeebek" target="_blank" rel="noopener noreferrer">github.com/IGbeebek</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <img src={locationIcon} alt="Location" />
                </span>
                <div>
                  <h4>Location</h4>
                  <p>Itahari, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
