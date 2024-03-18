import React from "react";
import { Link } from "react-router-dom";
import "../../Style/NavbarC.css"
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p className="circle">L</p>
        <h3>lawliet</h3>
      </div>
      <div className="navbar-center">
        <Link to="/contact">CONTACT</Link>
        <Link to="/testimonials">PRODUCT</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/terms">TERMS</Link>
      </div>
      <div className="navbar-right">
        <Button>Sign UP</Button>
      </div>
    </div>
  );
};

export default Navbar;
