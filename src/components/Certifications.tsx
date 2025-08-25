import React from 'react';
import './Certifications.css';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "AWS Developer Associate Certification",
      issuer: "Amazon Web Services",
      date: "September 2023",
      description: "Validated skills in building, deploying, and debugging scalable applications on AWS using services like EC2, S3, Lambda, and RDS, with focus on security, performance, and best practices.",
      skills: ["AWS Lambda", "API Gateway", "DynamoDB", "CI/CD Pipelines","RDS","Elastic Beanstalk"],
      credentialId: "AWS-DA-2023-001",
      verifyLink: "../AWS Certified Developer - Associate certificate (2).pdf",
      icon: "☁️",
      color: "#ff9900"
    },
    {
      title: "CPA: Programming Essentials in C++",
      issuer: "CISCO Networking Academy",
      date: "November 2023",
      description: "Demonstrated proficiency in algorithmic problem solving and data structure implementation.Certified in C++, covering object-oriented programming, data structures, algorithms, and problem-solving using C++",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Time Complexity", "Space Optimization"],
      credentialId: "HR-PS-2023-789",
      verifyLink: "../C++ CISCO.pdf",
      icon: "🏆",
      color: "#00ea64"
    },
    {
      title: "NPTEL certification - Cloud Computing",
      issuer: "NPTEL",
      date: "April 2024",
      description: "Completed NPTEL certification in Cloud Computing, covering cloud service models (IaaS, PaaS, SaaS), virtualization, distributed systems, scalability, and emerging cloud technologies",
      skills: ["Virtualization","IaaS, PaaS, SaaS","Cloud security","Scalability","Distributed systems and cloud architecture"],
      credentialId: "WD-REACT-2023-456",
      verifyLink: "../Cloud Computing.pdf",
      icon: "💻",
      color: "#0073e6"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card" style={{'--accent-color': cert.color} as React.CSSProperties}>
              {/* <div className="cert-header">
                <div className="cert-icon" style={{color: cert.color}}>
                  {cert.icon}
                </div>
                <div className="cert-date">{cert.date}</div>
              </div> */}
              
              <h3 className="cert-title">{cert.title} <div className="cert-date">{cert.date}</div> </h3>
              {/* <h3 style={{ marginTop: "45px" }} className="cert-title">
  {cert.title}
  <span className="cert-date">{cert.date}</span>
</h3> */}



              <h4 className="cert-issuer">{cert.issuer}</h4>
              
              
              <p className="cert-description">{cert.description}</p>
              
              <div className="cert-skills">
                <h5>Skills Covered:</h5>
                <div className="skills-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="cert-footer">
                {/* <div className="credential-id">
                  <strong>ID:</strong> {cert.credentialId}
                </div> */}
                {/* <a 
                  href={cert.verifyLink} 
                  className="verify-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a> */}
                            <a 
              href={cert.verifyLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="verify-btn"
            >
              View Certificate
            </a>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;