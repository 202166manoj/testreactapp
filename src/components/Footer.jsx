import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F1F1F1', padding: '40px', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h4>About Us</h4>
          <p>Corporate Responsibility</p>
          <p>Media Center</p>
        </div>
        <div>
          <h4>Business</h4>
          <p>Enterprises</p>
          <p>Wholesale</p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>Phone: +94 112 112 000</p>
          <p>Email: info@slt.lk</p>
        </div>
        <div>
          <h4>Social</h4>
          <p>Facebook | Twitter | LinkedIn | YouTube</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
