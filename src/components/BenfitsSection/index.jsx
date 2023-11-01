import React from "react";
import "./benfitsSection.css";
import {
  benefits,
  plumbingServices,
  remainingServices,
} from "../../constants/menu";
import { benefitsImg } from "../../utlility/fakeData";

const BenefitsSection = () => {
  return (
    <section className="benefits-section d-flex flex-column flex-lg-row justify-content-between align-items-center pt-3 mb-5 gap-3">
      <div>
        <div>
          <h3 className="secondary-heading secondary-clr mb-5">
            Benefits of Mechanical Estimating
          </h3>
          <ul>
            {benefits?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="secondary-heading secondary-clr mb-5">
            Our Plumbing Estimating Services
          </h3>
          <div className="d-flex justify-content-between align-items-start">
            <ul>
              {plumbingServices?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <ul>
              {remainingServices?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="benefits-section-img">
        <img src={benefitsImg} />
      </div>
    </section>
  );
};

export default BenefitsSection;
