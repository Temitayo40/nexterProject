import React from "react";
import global from "./../../img/sprite.svg";
import FeaturesData from "./featuresData";
import "./_features.scss";
function Features() {
  return (
    <section className="features">
      {FeaturesData.map(({ id, img, text, heading }) => (
        <div className="feature" key={id}>
          <svg className="feature__icon">
            <use href={`${global}#${img}`}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">{heading}</h4>
          <p className="feature__text">{text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
