import React from "react";
import img1 from "./../../img/realtor-1.jpeg";
import img2 from "./../../img/realtor-2.jpeg";
import img3 from "./../../img/realtor-3.jpeg";
import "./_realtors.scss";
const Datas = [
  {
    id: 1,
    img: img1,
    name: "Adebowale temi",
    num: 457,
  },
  {
    id: 2,
    img: img2,
    name: "Edward smith",
    num: 279,
  },
  {
    id: 3,
    img: img3,
    name: "Erik Mann",
    num: 279,
  },
];
function Realtors() {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        {Datas.map(({ id, name, num, img }) => (
          <>
            <img src={img} alt={name} className="realtors__img" />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">{name} </h4>
              <p className="realtors__sold">{num} houses sold</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
export default Realtors;
