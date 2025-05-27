import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Home';
import JobSection from './components/JobSection';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main page */}
        <Route path="/"element={
            <>
              <Navbar />
              <Hero />
              <JobSection />
              <Footer />
            </>
          }
        />
        
        {/* Registration page */}
        <Route path="/register" element={<Register />} />

        {/* login page */}
          <Route path="/login" element={<Login />} />

        {/* About page */}
        <Route path="/about" element={
          <>
          <Navbar />
          <About />
          </>
        }
        />
          
      </Routes>
    </Router>
  );
};

export default App;
