import React from "react";
import "./card.css";

const Card = (props) => {
  const title = props?.data?.title;
  const image = props?.data?.image;
  console.log(props);

  return (
    <div className="primary-card">
      <div className="card-header">
        <p className="text-center mb-0">{title}</p>
      </div>
      <div className="card-img">
        <img src={image} />
      </div>
    </div>
  );
};

export default Card;
