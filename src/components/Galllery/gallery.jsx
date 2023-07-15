import React from "react";
import GalleryDatas from "./galleryDatas";
import "./_gallery.scss";
function Gallery() {
  return (
    <section className="gallery">
      {GalleryDatas.map(({ id, img }) => (
        <figure className={`gallery__item gallery__item--${id}`} key={id}>
          <img src={img} alt={`gallery ${id}`} className="gallery__img" />
        </figure>
      ))}
    </section>
  );
}

export default Gallery;
