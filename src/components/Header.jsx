import React from 'react';
import Logo from "../images/logo.png"

export default function Header() {
  return (
    <div className="header">
      <img className="logo-image" src= {Logo} />
      <h1 className="title">Green Bites</h1>
    </div>
  );
}

