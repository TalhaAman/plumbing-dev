import React from "react";
import "./BenfitsSection.css";

const BenefitsSection = () => {
  return (
    <section className="d-flex justify-content-between align-items-center pt-3 mb-5">
      <div>
        <div>
          <h3 className="secondary-heading secondary-clr mb-5">
            Benefits of Mechanical Estimating
          </h3>
          <ul>
            <li>Getting access to the industry standards insights.</li>
            <li>Understanding the internal project cost.</li>
            <li>Getting the most reliable mechanical estimates.</li>
            <li>Increasing the probability of high profit.</li>
            <li>Boosting their win-bid ratio.</li>
            <li>
              {" "}
              Streamlining their project activities with more confidence.
            </li>
            <li>
              Identifying the errors and flaws in their mechanical project.
            </li>
            <li>
              Mitigating the potential risk while saving their time and money
            </li>
          </ul>
        </div>
        <div>
          <h3 className="secondary-heading secondary-clr mb-5">
            Our Plumbing Estimating Services
          </h3>
          <div className="d-flex justify-content-between align-items-start">
            <ul>
              <li>Cold Water Pipes</li>
              <li>Hot Water Pipes</li>
              <li>Vent Pipes </li>
              <li>Gas Pipes</li>
              <li> Sanitary Pipes </li>
              <li>Underground Pipes </li>
              <li>Pipe Fittings</li>
              <li>Cold Water</li>
            </ul>
            <ul>
              <li>Pipe Concealment</li>
              <li>Insulations</li>
              <li>Valves</li>
              <li>Hangers</li>
              <li>Struts</li>
              <li>Supports</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="benefits-section-img">
        <img src="https://s3-alpha-sig.figma.com/img/938b/3b72/13dc0bc769fa22ea98304b0d7cbbfd46?Expires=1699833600&Signature=noqVIVFcZAn1s0BoH0uFSAHLJUGhmFCIqHbIbJVLCQjs~nK1eyLm0NcRBmGTjpyZkKutfyi6INFM0QY~xTv0EdrCpn96O-HKGTgvZATjg-WQlqTaFZ0Cfq~skvYPQXqngmLhk6nt5aV-vwgNioFT~32EpbXLiU1ncNPF3UpCaevZoI5DrhBsY0H9nHk5-Jq23QTf055C26ydIPjxvg58uIk-Y64NbO-qgRoI1Ni~OcDldJjyxyfTAQc4pnchpK3ERbUX59HzB4tRKP91wOm4JZym62-AoJYb93zhsvYQsYrMxv2iMrhz~SckIHYjN1UI6r7Mud-YkosXRzk-Ow0Rug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      </div>
    </section>
  );
};

export default BenefitsSection;
