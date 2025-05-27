import React from 'react';
import '../Register.css';
import illustration from '../assets/illustration.jpg';  
const Register = () => {
  return (
    <div className="register-container">
      <div className="illustration">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="form-box">
        <h2>Register</h2>
        <form>
          <label>User ID</label>
          <input type="text" placeholder="Enter User ID" />
          
          <label>Name</label>
          <input type="text" placeholder="Enter Name" />
          
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
