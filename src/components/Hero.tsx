import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Pynala Sanjay</span></h1>
          <p className="hero-subtitle">
            A  B.Tech CSE student passionate about Full Stack Development & Cloud Technologies
          </p>
          <p className="hero-tagline">
            Aspiring to build scalable web applications and leverage cloud technologies to solve real-world problems
          </p>
          {/* <div className="hero-buttons">
            <a href="#resume" className="btn btn-primary">Download Resume</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div> */}
          <div className="hero-buttons">
          {/* <a href="/resume.pdf" download="Sanjay_Pynala_Resume.pdf" className="btn btn-primary">
            Download Resume
          </a> */}
          <a href="../Sanjay_Pynala_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Resume
        </a>

          <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>

        </div>
        <div className="hero-image">
          <div className="image-container">
            <img 
              src="../public/ddrive ready profile photo.png" 
              alt="Sanjay Pynala" 
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;