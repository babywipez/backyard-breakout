import React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <section className="header--container flex h-20 text-custom-white bg-custom-black">
      <header className="flex items-center justify-between">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="w-[100px] text-center">
          <h2>backyard breakout</h2>
        </div>

        <nav className="">
          <ul className="flex items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </header>
    </section>
  );
}
