import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Book It!</Link>
      <Link to="/" className="nav-link">Search</Link>
      <Link to="/savedBooks" className="nav-link">Saved</Link>
    </nav>
);

export default Navbar;
