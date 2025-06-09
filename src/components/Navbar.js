import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
