import React from "react";
import "./uploadPlans.css";
import { drive, dropBox, uploadPlanBG } from "../../utlility/fakeData";
import { uploadPlanText } from "../../constants/textConstants";

const UploadPlans = () => {
  return (
    <div
      style={{
        background: `url(${uploadPlanBG}) no-repeat`,
        backgroundSize: "cover",
      }}
      className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-4 p-3 p-sm-5 mb-5"
    >
      <div className="upload-section">
        <button className="upload-btn">UPLOAD YOUR PLANS</button>
        <div className="d-flex justify-content-start gap-3 ms-5 mt-3">
          <div className="upload-icon">
            <img src={dropBox} />
          </div>
          <div className="upload-icon">
            <img src={drive} />
          </div>
        </div>
      </div>
      <h4 className="info-text ">{uploadPlanText}</h4>
    </div>
  );
};

export default UploadPlans;
