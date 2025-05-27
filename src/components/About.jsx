import React from 'react';
import '../About.css';
import aboutImage from '../assets/ab.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            "Welcome to [Your Company Name], where innovation meets passion.
            Established with a commitment to delivering top-tier digital training programs,
            we strive to empower youth through technology and education.
            Our dedicated team of professionals is driven by a shared vision: to build a digitally skilled generation.
            At [Your Company Name], we believe in inclusivity, creativity, and continuous learning.
            Join us on this exciting journey as we shape the future of digital learning!"
          </p>
          <button className="learn-more">Learn more</button>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Team Illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
