import React from "react";
import global from "./../../img/sprite.svg";
import HomeDatas from "./homeData";
import "./_homes.scss";

function Homes() {
  // const [index, setIndex] = useState();
  return (
    <section className="homes">
      {HomeDatas.map(({ id, img, heart, title, icons }) => (
        <div className="home" key={id}>
          <img src={img} alt={`house ${id}`} className="home__img" />
          <svg className="home__like">
            <use xlinkHref={`${global}#${heart}`}> </use>
          </svg>
          <h5 className="home__name">{title}</h5>
          {icons.map(({ id, text, icon }) => (
            <div
              className={`home__location ${
                id === 1 || id === 2 ? "home__rooms" : null
              }`}
              key={id}
            >
              <svg>
                <use xlinkHref={`${global}#${icon}`}></use>
              </svg>
              <p>{text}</p>
            </div>
          ))}
          <button className="btn home__btn">Contact realtors</button>
        </div>
      ))}
    </section>
  );
}

export default Homes;
