import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Pet Care Website",
      image: "/pet_care_project_photo.png",
      description: "A comprehensive platform designed to simplify pet management and healthcare for pet owners, this web application offers an intuitive interface with powerful features to enhance pet well-being. It enables pet owners to maintain detailed pet profiles, including breed, age while also providing a vaccination scheduling system with smart reminders and calendar-based dose tracking. The platform allows users to search and filter veterinary hospitals or clinics by location, doctor specialization, availability, and reviews. An AI-powered disease predictor analyzes symptoms to suggest possible conditions and preventive measures, while a 24/7 interactive chatbot assists with FAQs, emergency guidance, vaccination details, and quick access to nearby vets. Additionally, notifications ensure that vaccination schedules are always up to date, making this application a one-stop solution that combines healthcare, convenience, and technology to improve the quality of pet care.",
      techStack: ["HTML","CSS","Javascript", "Node.js", "Express.js", "AWS RDS","Google API","MySQL"],
      githubLinkFrontend: "https://github.com/sanjay-1910/petcare-frontend",
      githubLinkBackend: "https://github.com/sanjay-1910/petcare-backend",
      liveDemo: "https://petcare-frontend-psi.vercel.app/"
    },
    {
      title: "Missing Person Recognition Website",
      image: "/hope_connect_project_photo.png",
      description: "An AI-powered web application that helps identify and locate missing persons using AWS cloud services. It securely stores images in Amazon S3 and uses AWS Rekognition for facial recognition and real-time image comparison. When a potential match is found, the system triggers instant notifications and email alerts to families, NGOs, or authorities. The platform is built with React for the frontend, Node.js & Express for the backend, and MongoDB for managing user and case data. It also supports secure user registration, image uploads, similarity scoring, and case tracking through a centralized dashboard offering a scalable and efficient solution to reunite missing individuals with their families. The system ensures data privacy and security through encrypted storage and authentication mechanisms, while its cloud-native design allows seamless scalability for handling large datasets and concurrent users.",
      techStack: ["ReactJS","Node.js","Express.js","MongoDB","AWS Rekognition","AWS S3"],
      githubLinkFrontend: "https://github.com/sanjay-1910/Hope-Connect/tree/main/client",
      githubLinkBackend: "https://github.com/sanjay-1910/Hope-Connect/tree/main/server",
      liveDemo: "https://missing-person-demo.netlify.app"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLinkFrontend} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                    {/* <a href={project.liveDemo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a> */}
                    {project.title !== "Missing Person Recognition Website" && (
  <a 
    href={project.liveDemo} 
    className="btn btn-primary" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Live <br /> Demo
  </a>)}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  <h4>Tech Stack:</h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-buttons">
                  <a href={project.githubLinkFrontend} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub Code<br/> - Frontend
                  </a>
                  <a href={project.githubLinkBackend} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub Code<br/> - Backend
                  </a>
                  {project.title !== "Missing Person Recognition Website" && (
  <a 
    href={project.liveDemo} 
    className="btn btn-primary" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Live <br /> Demo
  </a>)}
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