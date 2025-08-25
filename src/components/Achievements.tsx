import React from 'react';
import './Achievements.css';


const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="about">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-details">
              <div className="detail-item">
                <strong>LeetCode Problem Solver</strong>
                <span>Solved over 300 problems on LeetCode across various topics including algorithms and data structures</span>
              </div>
              <div className="detail-item">
                <strong>GeeksforGeeks Enthusiast</strong>
                <span>Solved 100+ coding problems on GeeksforGeeks, strengthening problem-solving and DSA concepts.</span>
              </div>
              <div className="detail-item">
                <strong>CodeChef Contests</strong>
                <span>Participated in 15+ coding contests on CodeChef</span>
              </div>
              <div className="detail-item">
                <strong>HackerRank Achievements</strong>
                <span>Achieved 3⭐ in Problem Solving, 4⭐ in Python, and 4⭐ in C++ on HackerRank.</span>
              </div>
              <div className="detail-item">
                <strong>Paper Presentation</strong>
                <span>Secured a place in the Top 10 performers in a Paper Presentation Competition at SIMATS College, Chennai.</span>
              </div>
              <div className="detail-item">
                <strong>Real-Time Projects</strong>
                <span>Developed and deployed multiple real-time projects based on MERN stack and AWS cloud services.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
