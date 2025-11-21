import React from 'react';
import '../styles/Skills.css';
import htmlIcon from '../assets/html.jpg';
import cssIcon from '../assets/css.jpg';
import jsIcon from '../assets/javascript.jpg';
import reactIcon from '../assets/react.jpg';
import nodejsIcon from '../assets/nodejs.jpg';
import gitIcon from '../assets/git.jpg';
import responsiveIcon from '../assets/responsive.jpg';
import apiIcon from '../assets/restApi.jpg';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: htmlIcon,
      level: '95%'
    },
    {
      name: 'CSS3',
      icon: cssIcon,
      level: '90%'
    },
    {
      name: 'JavaScript',
      icon: jsIcon,
      level: '90%'
    },
    {
      name: 'React',
      icon: reactIcon,
      level: '85%'
    },
    {
      name: 'Node.js',
      icon: nodejsIcon,
      level: '80%'
    },
    {
      name: 'Git',
      icon: gitIcon,
      level: '85%'
    },
    {
      name: 'Responsive Design',
      icon: responsiveIcon,
      level: '95%'
    },
    {
      name: 'REST APIs',
      icon: apiIcon,
      level: '85%'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to real-life
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
