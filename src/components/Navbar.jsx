import React from "react";
import { useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/Navbar.css";

const Navbar = () => {
  const navRef = useRef();

  // adds class that gives CSS properties to take up whole screen
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // removes class that causes mobile menu to take up screen
  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <>
      {/* Top Header Section */}
      <section className="w-full bg-gradient-to-r from-custom-black to-custom-gray text-custom-black px-4">
        <section className="flex h-8 items-center justify-end">
          <Link to="/">
            <StaticImage
              className=""
              src="../images/github.png"
              alt="Github Logo"
              placeholder="blurred"
              layout="fixed"
              style={{ width: "30px", height: "30px" }}
            />
          </Link>
          <Link to="/" className="ml-1">
            <StaticImage
              className=""
              src="../images/email.png"
              alt="Email Logo"
              placeholder="blurred"
              layout="fixed"
              style={{ width: "30px", height: "30px" }}
            />
          </Link>
          <Link to="/" className="ml-1">
            <StaticImage
              className=""
              src="../images/twitter.png"
              alt="Twitter Logo"
              placeholder="blurred"
              layout="fixed"
              style={{ width: "30px", height: "30px" }}
            />
          </Link>
        </section>
      </section>

      {/* Main Header */}
      <header className="bg-custom-black flex items-center h-[74px] py-0 px-3 w-full border-b-4 border-solid border-custom-gray lg:px-6">
        <section className="flex items-center">
          {/* Logo */}
          <Link to="/" className="drop-shadow-xl mr-4 lg:mr-0">
            <StaticImage
              src="../images/bb-logo.png"
              alt="Backyard Breakout Logo"
              placeholder="blurred"
              layout="fixed"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>

          {/* Divider Line */}
          <section className="max-w-[50px] opacity-70 hidden lg:block lg:mx-2">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Interface / Line_Xl">
                <path
                  id="Vector"
                  d="M12 21V3"
                  stroke="#f0f0e4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </section>

          {/* Title Text */}
          <section className="flex flex-col text-center w-[140px]">
            <Link to="/">
              <h3 className="custom--text-gradient text-2xl font-bold leading-none">
                BACKYARD BREAKOUT
              </h3>
            </Link>
          </section>
        </section>

        {/* Nav */}
        <nav
          ref={navRef}
          className="bg-custom-black text-custom-white z-10 flex items-center text-2xl top-0 left-0 h-full flex-col justify-center gap-6 w-0 lg:w-auto lg:flex-row lg:gap-0 lg:text-[1rem] lg:ml-12"
        >
          <Link
            to="/"
            className="my-0 mx-6 no-underline opacity-80 border-custom-black border-b-2 border-solid hover:border-custom-white"
            onClick={hideNavbar}
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="my-0 mx-6 no-underline opacity-80 border-custom-black border-b-2 border-solid hover:border-custom-white"
            onClick={hideNavbar}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className="my-0 mx-6 no-underline opacity-80 border-custom-black border-b-2 border-solid hover:border-custom-white"
            onClick={hideNavbar}
          >
            About
          </Link>

          {/* 'X' Icon to close Mobile Menu */}
          <button
            onClick={showNavbar}
            className="nav-btn nav-close-btn absolute top-8 right-8 visible opacity-100 p-1.5 cursor-pointer bg-transparent border-none outline-none text-custom-white text-3xl lg:hidden lg:opacity-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </nav>

        {/* Sandwich Icon to open Mobile Menu */}
        <button
          onClick={showNavbar}
          className="nav-btn visible ml-auto opacity-100 p-1.5 cursor-pointer bg-transparent border-none outline-none text-off-white text-3xl lg:hidden lg:opacity-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#f0f0e4"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Navbar;
