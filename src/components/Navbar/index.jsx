import React from "react";
import "./navbar.css";

import mainLogo from "../../assets/icons/main-logo.png";
import Hamburger from "../../assets/icons/menu.png";
import { menuItems } from "../../constants/menu";

const Navbar = () => {
  return (
    <div className="navbar-bg pb-md-1 pb-xl-0">
      <nav className="navbar d-flex jsutify-content-between align-items-center ">
        <div className="main-logo">
          <img src={mainLogo} />
        </div>
        <div className="nav-menu d-flex align-items-center px-4 ps-0">
          <ul className="d-none d-xl-flex gap-3 mb-0 ps-0">
            {menuItems?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div className="d-flex gap-3 align-items-center">
            <button className="get-estimate  ms-sm-4">Get Estimate</button>
            <div
              className="hamburger d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <img src={Hamburger} />
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasExampleLabel" className="falcon-clr">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  {menuItems?.map((item) => (
                    <div className="regular mb-3">
                      <p className=" mb-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="nav-menu d-flex align-items-center justify-content-center mx-2 ps-0 pt--3"
        style={{ marginTop: "-10px !important" }}
      >
        <ul className="d-none d-md-flex d-xl-none gap-3 mb-0 ps-0">
          {menuItems?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
