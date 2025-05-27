import React from 'react';
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'White', color: 'black'  }}>
      <div>
           <img src="../assets/slt_logo.jpg" alt="SLTMobitel Logo" class="logo" />
          <h1 className="text-[#0055A2] font-bold">Training&nbsp;Program</h1>
        </div>
       
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/Home" >Home</Link>
        <Link to="/About"> About Us</Link>
        <Link to="/Vacancies"> Vacancies</Link>
        <Link to="/login"> Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
