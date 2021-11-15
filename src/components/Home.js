import React from 'react';
import Segment from './Segment';

const Home = () => {
  return (
    <div className="home">
      <Segment segmentIndex={0} title='Brighton Squash Club' />
      <Segment segmentIndex={1} title='About Us' />
      <Segment segmentIndex={2} title='On Court Action' />
    </div>
  );
};

export default Home;
