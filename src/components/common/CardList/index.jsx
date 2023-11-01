import React from "react";
import Card from "../Card";

const CardList = (props) => {
  console.log(props);
  return (
    <div className="d-flex justify-content-center">
      <div className="card-list d-flex flex-wrap justify-content-center gap-3">
        {props?.data?.map((item) => {
          return <Card data={item} key={item?.id} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
