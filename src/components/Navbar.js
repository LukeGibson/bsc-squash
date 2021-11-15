import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='nav-container'>
        <a className="home-link" href="/home">Brighton SC</a>
        <div className="links">
          <a href="/events">Events</a>
          <a href="/leagues">Leagues</a>
          <a href="/media">Media</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
