import React from "react";
import image from "../assets/lillieslogo.svg";

const Logo = () => {
  return (
    <div className="logo-text">
      <div className="header--image">
        <img src={image} alt="logo"></img>
      </div>
      <div className="header--text">
        <h1>Lilies</h1>
      </div>
    </div>
  );
};

export default Logo;
