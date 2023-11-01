import React from "react";
import "./mainHeader.css";

import HeaderBg from "../../assets/images/header-bg.png";

const MainHeader = () => {
  return (
    <div
      className="main-header"
      style={{
        background: `url(${HeaderBg}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="main-header-wrapper d-flex align-items-center">
        <h2 className="main-heading ms-5">Mechanical/Plumbing</h2>
      </div>
    </div>
  );
};

export default MainHeader;
