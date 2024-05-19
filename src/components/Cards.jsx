import React from "react";

export default function Cards() {
  const data = [
    {
      id: 1,
      img: "magnifier.png",
      description:
        "Well researched and thoughtful information to help you get an edge",
      alt: "magnifying glass icon",
    },
    {
      id: 2,
      img: "trophy.png",
      description:
        "Analysis written by former league winners in a variety of fantasy formats",
      alt: "trophy icon",
    },
    {
      id: 3,
      img: "hand-shake.png",
      description: "Insightful player values to help you make impactful trades",
      alt: "handshake icon",
    },
  ];

  const cardArray = data.map((item) => {
    return (
      <section className="border-solid border-custom-black border-2">
        <div className="w-1/3">
          {/* <GatsbyImage image={`../images/${item.img}`} alt={item.alt} /> */}
          <img src={`../images/${item.img}`} alt={item.alt} />
        </div>
        <h3>{item.description}</h3>
      </section>
    );
  });
  return <section className="flex">{cardArray}</section>;
}
