import React from "react";
import ImpactLogo from "../images/s2i-logo.png";
import Logo from "../images/logo.png";
export default function Footer() {
  return (
    <div className="footer">
      <small className="mark">
        Benedetto Caiazzo 2023. All rights reserved
      </small>
      <img src={ImpactLogo} className="s2i-logo" />
      <div className="footer-logo-container">
        <img className="logo-image" src={Logo} />
        <h1 className="title">Green Bites</h1>
      </div>
    </div>
  );
}
