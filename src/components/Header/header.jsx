import React from "react";
import logo from "./../../img/logo.png";
import bbc from "./../../img/logo-bbc.png";
import forbes from "./../../img/logo-forbes.png";
import tech from "./../../img/logo-techcrunch.png";
import bi from "./../../img/logo-bi.png";
import "./_header.scss";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seeon-text">Seen on</div>
      <div className="header__seeon-logos">
        <img src={bbc} alt="seen on bbc" />
        <img src={forbes} alt="seen on forbes" />
        <img src={tech} alt="seen on tech" />
        <img src={bi} alt="seen on bi" />
      </div>
    </div>
  );
}

export default Header;
