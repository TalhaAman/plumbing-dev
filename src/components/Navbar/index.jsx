import React from "react";
import "./navbar.css";

import mainLogo from "../../assets/icons/main-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main-logo">
        <img src={mainLogo} />
      </div>
      <div className="nav-menu d-flex align-items-center px-4">
        <ul className="d-flex gap-3 mb-0">
          <li>Home</li>
          <li>Service</li>
          <li>About us</li>
          <li>Payment</li>
          <li>Testimonials</li>
          <li>Samples</li>
          <li>Estimation Fee</li>
          <li>Contact us</li>
        </ul>
        <div>
          <button className="get-estimate">Get Estimate</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
