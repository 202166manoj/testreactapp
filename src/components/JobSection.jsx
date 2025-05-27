import React from 'react';
import JobCard from './JobCard';

const jobData = [
  {
    title: "Trainee Network Engineers",
    description: "We are hiring new training network engineers for SLTMobitel... (cut for brevity)"
  },
  {
    title: "ACCOUNTANT–FINANCIAL ACCOUNTING",
    description: "SLT is in search of high caliber, result-oriented and qualified individuals..."
  },
  {
    title: "ENGINEERS",
    description: "As an engineer of the pioneering ICT solutions provider..."
  },
  {
    title: "TECHNICIANS",
    description: "Technicians are mainly responsible for install, maintain and repair telecom equipment..."
  }
];

const JobSection = () => {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '40px' }}>
      {jobData.map((job, index) => (
        <JobCard key={index} title={job.title} description={job.description} />
      ))}
    </section>
  );
};

export default JobSection;
