import React from "react";
import Banner from "../images/vegetarian.png";

export default function Main() {
  return (
    <div className="main">
      <div className="banner-container">
        <img className="banner-image" src={Banner} />
        <h1 className="banner-title">
          Want to cook light and tasty? Cook vegetarian!
        </h1>
      </div>
    </div>
  );
}
