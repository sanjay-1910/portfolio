import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {/* <div className="about-image">
            <img 
              src="../public/ddrive ready profile photo.png" 
              alt="Sanjay Pynala Profile" 
            />
          </div> */}
          <div className="about-text">
            <p className="about-summary">
              I am a passionate and dedicated B.Tech Computer Science Engineering student with a strong foundation in full-stack development and cloud technologies. My journey in technology is driven by curiosity and a desire to create innovative solutions that make a real impact.
            </p>
            <p className="about-summary">
              With hands-on experience in modern web technologies and cloud platforms, I am constantly learning and adapting to new technologies. My goal is to contribute to meaningful projects while growing as a software developer.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Career Interest:</strong>
                <span>Full Stack Development, Cloud Computing, Software Engineering</span>
              </div>
              <div className="detail-item">
                <strong>Location:</strong>
                <span>Anakapalle,Andhra Pradesh, India</span>
              </div>
              <div className="detail-item">
                <strong>Status:</strong>
                <span>Final Year B.Tech CSE Student</span>
              </div>
              <div className="detail-item">
                <strong>Focus Areas:</strong>
                <span>Web Development, AWS Cloud Services, Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;