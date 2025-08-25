import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <div>
    <h2 className="section-title">Education</h2>
    <section id="education" className="education">
       {/* <h2 className="section-title">Education</h2> */}
      <div className="container">
        {/* <h2 className="section-title">Education</h2> */}
        <div className="education-content">
          <div className="education-card">
            {/* <div className="education-icon">
              🎓
            </div> */}
            <div className="education-info">
              <h6 className="degree">Bachelor of Technology <br/>- Computer Science Engineering</h6>
              <h6 className="institution">Aditya Engineering College</h6>
              <p className="location">Surampalem, Andhra Pradesh</p>
              <p className="duration">2022 - 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <h2 className="section-title">Education</h2> */}
        <div className="education-content">
          <div className="education-card">
            {/* <div className="education-icon">
              🎓
            </div> */}
            <div className="education-info">
              <h6 className="degree">Intermediate<br/>- MPC</h6>
              <h6 className="institution">Narayana Junior College</h6>
              <p className="location">Anakapalle, Andhra Pradesh</p>
              <p className="duration">2020 - 2022</p>
                        </div>
          </div>
        </div>
      </div>

        <div className="container">
        {/* <h2 className="section-title">Education</h2> */}
        <div className="education-content">
          <div className="education-card">
            {/* <div className="education-icon">
              🎓
            </div> */}
            <div className="education-info">
              <h1 className="degree">SSC Schooling<br/></h1>
              <h6 className="institution"><br/>Z.P.H School</h6>
              <p className="location">M.J Puram, Andhra Pradesh</p>
              <p className="duration">2015 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Education;