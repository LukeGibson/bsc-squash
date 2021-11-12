const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="home-link" href="/home">Brighton SC</a>
      <div className="links">
        <a href="/events">Events</a>
        <a href="/leagues">Leagues</a>
        <a href="/media">Media</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
 
export default Navbar;