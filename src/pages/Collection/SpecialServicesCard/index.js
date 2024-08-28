import React from "react";
import "./style.scss";

const SpecialServicesCard = ({ Image, title, desc }) => {
  return (
    <div className="specialServicesCard">
      <div className="imgContainer">
        <img src={Image} alt="img" />

      </div>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default SpecialServicesCard;