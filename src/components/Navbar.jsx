import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Consultancy Service</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/consultation">Consultation</Link>
      </div>
    </nav>
  );
};

export default Navbar;
