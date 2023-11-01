import React from "react";
import "./topHeader.css";

import callIcon from "../../assets/icons/call2.svg";
import emailIcon from "../../assets/icons/email2.svg";
import fbIcon from "../../assets/icons/fb.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const TopHeader = () => {
  return (
    <div className="top-header d-md-flex justify-content-between gap-3">
      <div className="d-flex justify-content-center  justify-content-lg-end badge-wrapper">
        <div className="text-end">
          <h5 className="top-header-heading">TURNAROUND TIME 24-48 HOURS!</h5>
          <div className="d-flex justify-content-center  w-100">
            <div className="top-off-badge text-center mx-3 py-1 px-2">
              <h5 className="mb-0 ">Affordable Estimate (30% off)</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center justify-content-md-end contact-wrapper">
        <div className="d-flex gap-4 gap-md-2 align-items-center mt-2 mt-md-0">
          <div className="d-flex flex-md-column gap-3 ">
            <div className="d-flex gap-2  align-items-center">
              <img
                src={callIcon}
                className="top-icon"
                // tabindex="0"
                // data-bs-toggle="tooltip"
                // data-bs-placement="top"
                // title="+1 917 300 1079"
              />
              <p className="mb-0 d-none d-md-block">+1 917 300 1079</p>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <img
                src={emailIcon}
                className="top-icon"
                // data-toggle="tooltip"
                // data-placement="top"
                // title="Dave@procoreestimators.com"
              />
              <p className="mb-0 d-none d-md-block">
                Dave@procoreestimators.com
              </p>
            </div>
          </div>
          <div className="d-flex mb-1 mb-md-0 gap-3">
            <div>
              <a href="https://www.facebook.com" target="_blank">
                <img src={fbIcon} />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com" target="_blank">
                <img src={linkedinIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
