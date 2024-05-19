import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Card(props) {
  return (
    <section className="border-solid border-custom-black border-2">
      <div className="w-1/3">
        <GatsbyImage
          image={`../images/${props.item.img}`}
          alt={props.item.alt}
        />
        {/* <img src={`../images/${props.item.img}`} className="w-[50px]" /> */}
      </div>
      <h3>{props.item.description}</h3>
    </section>
  );
}
