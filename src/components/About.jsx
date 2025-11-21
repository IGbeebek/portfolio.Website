import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/profile.jpg.jpeg';

const About = () => {
  const highlights = [
    { number: '6+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '100%', label: 'Dedication' },
    { number: 'Always', label: 'Learning & Growing' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image">
              <img src={profileImage} alt="Profile" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>Hello! I'm a passionate Software Developer</h3>
            <p>
              I specialize in creating beautiful, responsive, and user-friendly applications. 
              With a strong foundation in modern software development technologies, I transform ideas into elegant 
              digital solutions that make a difference.
            </p>
            <p>
              My journey in software development started with a curiosity for how things work, 
              and it has evolved into a deep passion for building robust software and creating seamless user experiences. 
              I believe in writing clean, maintainable code and staying updated with the latest 
              industry trends and best practices.
            </p>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <h4 className="highlight-number">{highlight.number}</h4>
              <p className="highlight-label">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
