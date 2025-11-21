import React from 'react';
import '../styles/Projects.css';
import digitalClockImg from '../assets/digitalclock.jpg';
import todoListImg from '../assets/to do list.jpg';
import colorPickerImg from '../assets/colorpicker.jpg';
import stopWatchImg from '../assets/stopwatch.jpg';
import inventoryImg from '../assets/inventory management.jpg';
import artGalleryImg from '../assets/artgallery.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Clock',
      description: 'A real-time digital clock application built with JavaScript, featuring dynamic time display and modern UI design.',
      image: digitalClockImg,
      techStack: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      codeUrl: 'https://github.com/IGbeebek/Digital_Clock'
    },
    {
      title: 'To Do List',
      description: 'Interactive task management application with add, edit, and delete functionality for organizing daily tasks.',
      image: todoListImg,
      techStack: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      codeUrl: 'https://github.com/IGbeebek/To_Do_List'
    },
    {
      title: 'Color Picker',
      description: 'Dynamic color selection tool allowing users to pick and preview colors with hex code display.',
      image: colorPickerImg,
      techStack: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      codeUrl: 'https://github.com/IGbeebek/Color-Picker'
    },
    {
      title: 'Stop Watch',
      description: 'Precision stopwatch application with start, stop, and reset functionality for accurate time tracking.',
      image: stopWatchImg,
      techStack: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://igbeebek.github.io/stopWatch/',
      codeUrl: 'https://github.com/IGbeebek/stopWatch'
    },
    {
      title: 'Inventory Management System',
      description: 'Comprehensive inventory tracking system built with Python for managing stock, products, and supply chain.',
      image: inventoryImg,
      techStack: ['Python'],
      liveUrl: '#',
      codeUrl: 'https://github.com/IGbeebek/Inventory-Management-System'
    },
    {
      title: 'Art Gallery GUI',
      description: 'Graphical user interface for an art gallery application built with Java, featuring artwork display and management.',
      image: artGalleryImg,
      techStack: ['Java', 'Swing'],
      liveUrl: '#',
      codeUrl: 'https://github.com/IGbeebek/Art-Gallery-GUI'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent works that showcase my skills and experience
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>💻 Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
