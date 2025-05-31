import React from 'react';
import '../JobCreationForm.css';

const JobCreationForm = () => {
  return (
    <div className="job-creation-container">
      <aside className="sidebar">
        <h2>Training Program</h2>
        <ul>
          <li className="active">Job Creation</li>
          <li>Job Modification</li>
          <li>Received CVs</li>
          <li>Accepted CVs</li>
        </ul>
      </aside>

      <main className="form-area">
        <h3>Company Job Vacancy: Web Development Trainee</h3>
        <form className="job-form">
          <div className="form-row">
            <input type="text" placeholder="Job ID" />
            <input type="text" placeholder="Job Position" />
            <input type="text" placeholder="Contact Number" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Job Field" />
            <input type="text" placeholder="Background" />
            <input type="text" placeholder="Salary" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Due Date" />
            <input type="email" placeholder="Company Email" />
            <input type="text" placeholder="Company Location" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Work Type" />
          </div>
          <textarea placeholder="Job Description"></textarea>
          <button type="submit">Create</button>
        </form>
      </main>
    </div>
  );
};

export default JobCreationForm;
