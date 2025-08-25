import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "sanjaypyanala8740@gmail.com",
      link: "mailto:sanjaypynala@example.com",
      icon: "✉️",
      description: "Drop me an email"
    },
    {
      type: "Phone",
      value: "+91 8639954785",
      link: "tel:+918639954785",
      icon: "📱",
      description: "Give me a call"
    },
    {
      type: "Address",
      value: "-531055, M.J Puram, Anakapalle, Andhra Pradesh, India",
      link: "#",
      icon: "📍",
      description: "Find me here"
    }
  ];

  const socialProfiles = [
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/sanjay-pynala-158900274",
      icon: "💼",
      description: "Connect professionally",
      color: "#0077b5"
    },
    {
      name: "GitHub",
      url: "https://github.com/sanjay-1910/",
      icon: "🐙",
      description: "Check out my code",
      color: "#333"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Pynala_Sanjay/",
      icon: "🧩",
      description: "See my problem solving",
      color: "#ffa116"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            I'm always interested in new opportunities, collaborative projects, and connecting with fellow developers. 
            Whether you want to discuss potential roles, collaborate on innovative ideas, or simply exchange thoughts about technology, 
            feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <div className="contact-items">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{contact.type}</h4>
                    <p className="contact-description">{contact.description}</p>
                    <a href={contact.link} className="contact-link">
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-profiles">
            <h3 className="contact-subtitle">Connect With Me</h3>
            <div className="social-grid">
              {socialProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{'--accent-color': profile.color} as React.CSSProperties}
                >
                  <div className="social-icon">
                    {profile.icon}
                  </div>
                  <div className="social-info">
                    <h4>{profile.name}</h4>
                    <p>{profile.description}</p>
                  </div>
                  <div className="social-arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="contact-cta">
          <h3>Let's Build Something Amazing Together!</h3>
          <p>Ready to start your next project? Let's discuss how I can contribute to your team's success.</p>
          <a href="mailto:sanjaypynala@example.com" className="btn btn-primary cta-button">
            Start a Conversation
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;