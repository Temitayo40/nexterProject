import React from "react";

import "./_story.scss";
function Story() {
  return (
    <>
      <div className="story__content">
        <div className="heading-3 mb-sm">Happy Customers</div>
        <div className="heading-2 heading-2--dark mb-md">
          &ldquo; The best decision of lives &rdquo;
        </div>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>
    </>
  );
}

export default Story;
