import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
