import React from 'react';
import '../Login.css';
import loginImage from '../assets/lo.jpg'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form-section">
        <h2>Login</h2>
        <form>
          <label>Email address :</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password :</label>
          <input type="password" placeholder="Enter your password" />

          <button className="signin-btn">Sign In</button>
        </form>
        <p>Don't you have an account? <a href="/register">SignUp</a></p>

        <div className="google-login">
          <span>OR</span>
          <button className="google-btn">G</button>
        </div>
      </div>
      <div className="login-image-section">
        <img src={loginImage} alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
