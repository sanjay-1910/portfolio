import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sanjay-1910/",
      icon: "🐙"
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/sanjay-pynala-158900274",
      icon: "💼"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Pynala_Sanjay/",
      icon: "🧩"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-section">
              <div className="footer-brand">
                <h3>Sanjay Pynala</h3>
                <p>Full Stack Developer & Cloud Enthusiast</p>
                <p className="footer-description">
                  Passionate about creating innovative web solutions and leveraging cloud technologies 
                  to build scalable applications.
                </p>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <div className="footer-contact">
                <p>📧 sanjaypyanala8740@gmail.com</p>
                <p>📱 +91 8639954785</p>
                <p>📍 -531055, M.J Puram, Anakapalle, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            {/* <p className="copyright">
              © {currentYear} Sanjay Pynala. All rights reserved.
            </p> */}
            <p 
            className="copyright" 
            style={{ textAlign: "center" }}
          >
            © {currentYear} Pynala Sanjay. All rights reserved.
          </p>

            {/* <p className="footer-tagline">
              Built with ❤️ using React & CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;