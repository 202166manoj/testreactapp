import React from 'react';

const JobCard = ({ title, description }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h3 style={{ backgroundColor: '#0B3D91', color: 'white', padding: '10px', borderRadius: '6px' }}>{title}</h3>
      <p style={{ marginTop: '10px' }}>{description}</p>
      <button style={{ marginTop: '10px', backgroundColor: '#28a745', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>Apply Now</button>
    </div>
  );
};

export default JobCard;
