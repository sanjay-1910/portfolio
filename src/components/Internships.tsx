import React from 'react';
import './Internships.css';

const Internships: React.FC = () => {
  const internships = [
    {
      title: "AWS Cloud Internship",
      company: "Technical Hub",
      duration: "May 2025 - June 2025",
      location: "Remote",
      description: "Gained comprehensive hands-on experience with Amazon Web Services cloud platform and various cloud computing concepts.",
      responsibilities: [
        "Learned AWS EC2 for scalable compute capacity",
        "Worked with AWS S3 for secure object storage solutions",
        "Implemented database solutions using AWS RDS",
        "Developed serverless functions with AWS Lambda",
        "Deployed applications using AWS Elastic Beanstalk",
        "Configured content delivery with AWS CloudFront",
        "Gained practical knowledge of cloud architecture patterns"
      ],
      skills: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "Elastic Beanstalk", "CloudFront"],
      icon: "☁️"
    },
    {
      title: "Full Stack Web Development Internship",
      company: "Oasis Infobyte",
      duration: "June 2024 - July 2024",
      location: "Remote",
      description: "Developed full-stack web applications focusing on modern frontend and backend technologies with real-world project implementation.",
      responsibilities: [
        "Built responsive web applications using modern frameworks",
        "Developed RESTful APIs and backend services",
        "Implemented user authentication and authorization",
        "Worked on database design and optimization",
        "Collaborated with team members using Git version control",
        // "Participated in code reviews and agile development practices",
        "Deployed applications to production environments"
      ],
      skills: ["HTML5", "CSS", "JavaScript", "ReactJS", "Node.js","Express.js","MySQL", "Git"],
      icon: "💻"
    }
  ];

  return (
    <section id="internships" className="internships">
      <div className="container">
        <h2 className="section-title">Internships</h2>
        <div className="internships-timeline">
          {internships.map((internship, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="internship-header">
                  <span className="internship-icon">{internship.icon}</span>
                  <div className="internship-title-info">
                    <h3 className="internship-title">{internship.title}</h3>
                    <h4 className="company-name">{internship.company}</h4>
                    <div className="internship-meta">
                      <span className="duration">{internship.duration}</span>
                      <span className="location">{internship.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="internship-description">{internship.description}</p>
                
                <div className="responsibilities">
                  <h5>Key Responsibilities & Learning:</h5>
                  <ul>
                    {internship.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="skills-gained">
                  <h5>Technologies & Skills:</h5>
                  <div className="skill-tags">
                    {internship.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;