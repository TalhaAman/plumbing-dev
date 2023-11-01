import React from "react";
import "./uploadPlans.css";

const UploadPlans = () => {
  return (
    <div
      style={{
        background:
          "url('https://s3-alpha-sig.figma.com/img/aa27/f81b/09f5f7f74bbf75155e9bfa3f7f27e279?Expires=1699833600&Signature=afVL64a857hrqphDBfYs2Pk8nvOnJGqP1XZDFg6B89beImxrC9BDDRiyTnd~~PX2SnVPpMG87K0g4CVnawu4FM4sD1khEJ-PgVHydC7LKuIli9-qG9YX0nMrQ7Qyd~spYxtlm96DOBdHWGPmLc7dMK8zoQpnFonOoXpfZtxfZJs82g3ceNJFHPWis4jtxbwN4vxQGErQZiqaUN60rnhawVsy5n0XA7HWxlxqQiAkeTt81zAN0ZqnLUCQmr7QWeWwodEgPSvZP~QKmiv0Jg3Lj~JfFFs4I6xBuP6dMH~g~BeVctE3OYxHqA97g16ymbSDyWnZ6QmGYJ2Jw2VPSULBUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4') no-repeat",
        backgroundSize: "cover",
      }}
      className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-4 p-3 p-sm-5 mb-5"
    >
      <div className="upload-section">
        <button className="upload-btn">UPLOAD YOUR PLANS</button>
        <div className="d-flex justify-content-start gap-3 ms-5 mt-3">
          <div className="upload-icon">
            <img src="https://s3-alpha-sig.figma.com/img/6b50/c466/ae2d2b5a2129e6e9b27576313e55aa89?Expires=1699833600&Signature=YkUvJ~Nf4SeUsums4DRY1mbLkcTTnmgQ3NRBu6O--DdW2~o90gudXWRe8vjTHnD9sxpczqSBl0OVleCksITdemGZM-71BQ9TIAuVQPl-6gJaMwtrGcMvl480U3kR0WEexRe33lZ-yZI4M6fS8Ckh1GrtnR9DGKOpqCTGKsUKqtI~v1ZRRfW2iDm-Qy-jenolFxz5qqd84mmTPwCvPMIagP6anU4oogYnLPxWW7JqAK-~kqdHksiQRsGgoH8ob8jZ37P-AE3I-jKYV~ycVFLX4TY-tYU4TWCGTwCO4zaQdV2Qvk51ARhE9gWN8Wn3~W0j~Mi8MX4~gsGSzqJWSXl0Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="upload-icon">
            <img src="https://s3-alpha-sig.figma.com/img/884a/2f88/aa778b2fee671d5fbcb2272452c4a3ee?Expires=1699833600&Signature=d6zAT1NPUBr2OVXEhkx6YLPKItijuvrfYAQlIwVLYklHgkYyry~xipFA4Cq2bhHBr5ktX1aBBRIXTurzaejHOM1OP1pDnOfcYGOipvNyeI7-KauSMfjHMtG3PZqDDj9UK6lRoZL8mUQHMKRNcBRTANmnv82fDpZ4x31ooncsVtAvm4XggRavYE4Yo-p0BxvgFo~TaL~W9b7W0NTrpXycWtTuZO-s6uNeAw6oSbV-QZT89pyYm1BeDdmrDfGV8JC0-sHow23RYxEWD2WIAQPOOtdWNYzowXehbEf5FfNpVPR2N5ZO82gGo5F-lr8Wy~6AtmJJVa6l~NHwxSrZ0sJKIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
        </div>
      </div>
      <h4 className="info-text ">
        For a quick quote based on your project scope, call us at +1 917 300
        1079 or email us at Dave@procoreestimators.com
      </h4>
    </div>
  );
};

export default UploadPlans;
