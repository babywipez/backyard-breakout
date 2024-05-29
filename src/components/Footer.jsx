import React from "react";
import Logo from "../images/bb-logo.png";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <section>
      <footer className="bg-custom-black text-custom-white p-8 border-t-4 border-t-custom-gray">
        <section className="flex flex-col items-center">
          <div className="max-w-[50px]">
            <img src={Logo} alt="Backyard Breakout logo" />
          </div>
          <h3 className="custom--text-gradient my-4 text-2xl font-bold leading-none">
            BACKYARD BREAKOUT
          </h3>
        </section>
        <section className="flex h-12 w-[200px] mx-auto items-center justify-center bg-custom-white rounded-xl">
          <a
            href="https://github.com/babywipez/backyard-breakout"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              className=""
              src="../images/github.png"
              alt="Github Logo"
              placeholder="blurred"
              layout="fixed"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <Link to="/about/#contact" className="ml-3">
            <StaticImage
              className=""
              src="../images/email.png"
              alt="Email Logo"
              placeholder="blurred"
              layout="fixed"
              style={{ width: "30px", height: "30px" }}
            />
          </Link>
          <a
            href="https://x.com/bbreakoutff"
            target="_blank"
            rel="noreferrer"
            className="ml-3"
          >
            <StaticImage
              className=""
              src="../images/twitter.png"
              alt="Twitter Logo"
              placeholder="blurred"
              layout="fixed"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </section>
        <section className="p-4 mx-auto flex justify-center">
          <Link
            to="/"
            className="my-0 mx-6 no-underline opacity-80 border-custom-black border-b-2 border-solid hover:border-custom-white"
          >
            Home
          </Link>
          <Link
            to="/articles"
            className="my-0 mx-6 no-underline opacity-80 border-custom-black border-b-2 border-solid hover:border-custom-white"
          >
            Articles
          </Link>
          <Link
            to="/about"
            className="my-0 mx-6 no-underline opacity-80 border-custom-black border-b-2 border-solid hover:border-custom-white"
          >
            About
          </Link>
        </section>
        <section className="p-4">
          <p className="text-center">
            Website created by Christopher Cassada. All Rights Reserved.
          </p>
        </section>
      </footer>
    </section>
  );
}
