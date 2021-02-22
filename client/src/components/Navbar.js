import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#3D5A66"}}>
      <Link to="/" className="navbar-brand" style={{color: "azure", fontSize: "24px"}}>Book It!</Link>
      <Link to="/" className="nav-link" style={{color: "azure", float: "right"}}>Search</Link>
      <Link to="/savedBooks" className="nav-link" style={{color: "azure", float: "right"}}>Saved</Link>
    </nav>
);

export default Navbar;
