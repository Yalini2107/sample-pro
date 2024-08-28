
import React from "react";
import "./style.scss";

const Button = ({
  children,
  isdisabled = false,
  onClick = () => {},
  buttonProps = {},
}) => {
  return (
    <div className="buttonContainer">
      <button disabled={isdisabled} onClick={onClick} {...buttonProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;