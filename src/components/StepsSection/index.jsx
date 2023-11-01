import React from "react";

const StepsSection = () => {
  return (
    <div className="mb-5">
      <h3 className="secondary-heading secondary-clr mb-5">
        Are You Ready To Get Started With Us!
      </h3>
      <div>
        <h5>
          <b>1- Upload you Plans</b>
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
          to upload your plans. we accept PDF format and your plans can be Bid
          set, Schematic, Design Development, Construction document, or
          conceptual drawings.
        </p>
        <h5>
          <b>2- Get a Qoute</b>
        </h5>
        <p>
          Quotes will be based on invoice, delivery date, and turnaround time.
        </p>
        <h5>
          <b>3- Receive Estimate</b>
        </h5>
        <p>
          Estimates will be delivered to you in EXCEL sheets comprising all the
          material and labor pricing with cut reports either in MasterFormat or
          your customized format.
        </p>
      </div>
    </div>
  );
};

export default StepsSection;
