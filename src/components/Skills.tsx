import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "ReactJS", "Node.js", "Express.js"],
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "AWS RDS"],
      icon: "🗄️"
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS (EC2, S3, RDS, Lambda)", "Git", "Docker"],
      icon: "☁️"
    },
    {
      title: "Other Skills",
      skills: ["Data Structures & Algorithms", "Problem Solving","Object-Oriented Programming"],
      icon: "🧠"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;