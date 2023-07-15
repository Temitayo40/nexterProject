import React from "react";
import "./../Story_content/_story.scss";
import house1 from "./../../img/story-1.jpeg";
import house2 from "./../../img/story-2.jpeg";

function StoryPicture() {
  return (
    <div className="story__pictures">
      <img src={house1} alt="New couples house" className="story__img--1" />
      <img src={house2} alt="New house" className="story__img--2" />
    </div>
  );
}

export default StoryPicture;
