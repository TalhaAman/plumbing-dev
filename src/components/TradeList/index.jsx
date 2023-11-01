import React from "react";
import "./tradeList.css";

const TradeList = ({ data }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 gap-sm-3">
      {data?.map((item) => {
        return (
          <div
            className="trade-card d-flex justify-content-center mb-sm-3 mb-xl-0"
            key={item?.id}
          >
            <div className="trade-card-img">
              <img src={item?.image} alt="trade-img" />
            </div>
            <div className="trade-header">
              <h6 className="mb-0 text-center">{item?.title}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TradeList;
