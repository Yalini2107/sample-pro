import React from "react";
import "./style.scss";
import classNames from "classnames";

const MainServiceCard = ({ Image, title, active, onClick, children }) => {
  return (
    <div
      className={classNames("mainServiceCard", { active })}
      onClick={onClick}
    >
      <div className="imgContainer">
        <img src={Image} alt="" />
      </div>
      <div className="titleContanier">{title}</div>
      <div className="descContainer">{children}</div>
    </div>
  );
};

export default MainServiceCard;