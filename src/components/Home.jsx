import React from 'react';
import bgImage from '../assets/bc.jpg';  

const Home = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '100px 60px',
        textAlign: 'center',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1>SLTMOBITEL - The Connection</h1>
      <p>Training Program for Future Innovators</p>
       
    </section>
  );
};

export default Home;
