import React from "react";
import "./footer.css";

import locationIcon from "../../assets/icons/location.svg";
import emailIcon from "../../assets/icons/email2.svg";
import callIcon from "../../assets/icons/call2.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center flex-wrap container gap-3 py-3">
        <div className="footer-section">
          <div className="main-logo">
            <img src="https://s3-alpha-sig.figma.com/img/e96d/4cba/650ed6f6662edc3395d9152c156f28f4?Expires=1699833600&Signature=GNkSveiWwBYzPYzB469KHrugcnUlgkf3BJzbNmVc37CRoWjqNplax~eHjR6IdARSEGhk5t2LhAaV6DWNcNYs8z5SkJyh-Pqv1MneDJumoLYY3c4OIoYNbNIZfRlGEEnoLQvJMBqhhOvja3v6Tq4YpugW-92C6NVwvtkuW6e5vsUbC49BmV8HZJpR9zvVqL52OZipMvkk6rzOpNz7wnbVJLfKVtvwP2QLsKESzpVXTFGSlxvqzo4NDQ6foZTZLg~cxvfliRFr27cARcCSEZgySET9Bk-JAZN4Ds97GWl~9PLcJz9-~iFpRbBvUCVYVIgtiwksVtR44TKBhW5CACsR3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <p className="footer-text white-clr">
            <span className="secondary-clr">PROCORE Estimators</span> are an
            industry leader in providing accurate and reliable construction cost
            estimation services. We specialize in Quantity and Material Takeoff,
            Scheduling, and Planning for your project management needs. Our
            experts use advanced softwares and we pay close attention to detail
            to ensure accurate estimates. We provide you with accurate
            information in a timely manner, enabling you to make informed
            decisions and execute projects efficiently. Rely on PROCORE
            Estimators for precise and prompt cost estimation in construction.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="white-clr text-center mb-4">
            <b>Navigation</b>
          </h4>
          <ul className="p-0">
            <li>Service</li>
            <li>About us</li>
            <li>Payment</li>
            <li>Sample</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="white-clr text-start mb-4">
            <b>Contact</b>
          </h4>
          <div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src={locationIcon}
                style={{ width: "40px", height: "40px" }}
              />
              <p className="mb-0 white-clr">
                2505 Bedford Ave, Brooklyn, NY 11226, USA
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={callIcon} />
              <p className="mb-0 white-clr">+1 917 300 1079</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={emailIcon} />
              <p className="mb-0 white-clr">Dave@procoreestimators.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="white-clr text-center mb-0 copyright">
          Copyright © 2023 Procore Estimators Designed By{" "}
          <span className="green-clr">
            <b>MF</b>
          </span>
          <span className="secondary-clr ">
            {" "}
            <b>Bzone</b>
          </span>
          <span>&reg;</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
