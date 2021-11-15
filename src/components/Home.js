import React from 'react';
import Segment from './Segment';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-container">
          <div className="banner-image">
            <img src="/images/bsc-logo.png" alt="banner-imagee" />
          </div>
          <h1 className="banner-text">
            Brighton<br/>Squash<br/>Club
          </h1>
        </div>
      </div>
      <Segment segmentIndex={0} title='Brighton Squash Club' />
      <Segment segmentIndex={1} title='About Us' />
      <Segment segmentIndex={2} title='On Court Action' />
    </div>
  );
};

export default Home;
