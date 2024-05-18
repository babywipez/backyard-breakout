import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Logo() {
  return (
    <StaticImage
      src="../images/bb-logo.png"
      alt="Backyard Breakout football shaped logo"
      className="max-w-[50px]"
    />
  );
}
