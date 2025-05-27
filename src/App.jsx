import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobSection from './components/JobSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <JobSection />
      <Footer />
    </div>
  );
};

export default App;
