import React from "react";
import "./landingPage.css";

import TopHeader from "../../components/TopHeader";
import Navbar from "../../components/Navbar";
import MainHeader from "../../components/MainHeader";
import CardList from "../../components/common/CardList";
import {
  mechanicalData,
  plumbingData,
  tradeData,
} from "../../utlility/fakeData";
import BenefitsSection from "../../components/BenfitsSection";
import StepsSection from "../../components/StepsSection";
import TradeList from "../../components/TradeList";
import UploadPlans from "../../components/UploadPlans";
import Footer from "../../components/Footer";
import { headerText } from "../../constants/textConstants";

const LandingPage = () => {
  console.log(mechanicalData);
  return (
    <div>
      <TopHeader />
      <Navbar />
      <MainHeader />
      <div className="container py-5">
        <div className="mb-5">
          <article className="article">
            At{" "}
            <span className="secondary-clr">
              <b>Procore Estimators</b>
            </span>
            {headerText}
          </article>
        </div>
        <div className="mb-5">
          <h3 className="secondary-heading secondary-clr mb-5">
            Mechanical Estimation Data
          </h3>
          <CardList data={mechanicalData} />
        </div>
        <div className="mb-5">
          <h3 className="secondary-heading secondary-clr mb-5">
            Plumbing Estimation Data
          </h3>
          <CardList data={plumbingData} />
        </div>
        <BenefitsSection />
        <StepsSection />
        <h3 className="secondary-heading secondary-clr mb-5 text-center">
          Take a look at our Trades
        </h3>
        <TradeList data={tradeData} />
      </div>
      <UploadPlans />
      <Footer />
    </div>
  );
};

export default LandingPage;
