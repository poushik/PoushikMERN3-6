import React from 'react';
import './Achievements.css'; 
function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-content">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          <li>
            <p>
              Top 10 in CyberX hackathon conducted by Greater Chennai Police 
            </p>
          </li>
          <li>
            <p>
              Runner Up in DR-a-Thon conducted in TechnoVIT fest.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
