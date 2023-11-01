import React from "react";
import {
  getQoute,
  recieveEstimate,
  uploadPlans,
} from "../../constants/textConstants";

const StepsSection = () => {
  return (
    <div className="mb-5">
      <h3 className="secondary-heading secondary-clr mb-5">
        Are You Ready To Get Started With Us!
      </h3>
      <div>
        <h5>
          <b>1- Upload your Plans</b>
        </h5>
        <p className="text-justify">
          <span
            className="secondary-clr click"
            style={{
              fontWeight: "700",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Click Here
          </span>{" "}
          {uploadPlans}
        </p>
        <h5>
          <b>2- Get a Qoute</b>
        </h5>
        <p>{getQoute}</p>
        <h5>
          <b>3- Receive Estimate</b>
        </h5>
        <p>{recieveEstimate}</p>
      </div>
    </div>
  );
};

export default StepsSection;
