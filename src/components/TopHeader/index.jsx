import React from "react";
import "./topHeader.css";

import callIcon from "../../assets/icons/call.svg";
import emailIcon from "../../assets/icons/email.svg";
import fbIcon from "../../assets/icons/fb.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const TopHeader = () => {
  return (
    <div className="top-header d-flex justify-content-between">
      <div className="d-flex justify-content-end badge-wrapper">
        <div className="text-end">
          <h5>TURNAROUND TIME 24-48 HOURS!</h5>
          <div className="top-off-badge text-center mx-3 py-1 px-2">
            <h5 className="mb-0">Affordable Estimate (30% off)</h5>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end contact-wrapper">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex flex-column gap-3 ">
            <div className="d-flex gap-2 align-items-center">
              <img src={callIcon} />
              <p className="mb-0">+1 917 300 1079</p>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <img src={emailIcon} />
              <p className="mb-0">Dave@procoreestimators.com</p>
            </div>
          </div>
          <div className="d-flex gap-3">
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
