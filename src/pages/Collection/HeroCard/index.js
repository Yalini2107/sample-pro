import React from "react";
import "./style.scss";

const HeroCard = ({ subscriberCount, text }) => {
  return (
    <div className="heroCard">
      <div className="subscriberContainer">
        {subscriberCount}
        <span>+</span>
      </div>
      <div className="textContainer">{text}</div>
    </div>
  );
};

export default HeroCard;