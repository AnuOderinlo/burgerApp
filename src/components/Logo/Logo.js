import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="logo" style={{ height: props.height }}>
      <img src={burgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
