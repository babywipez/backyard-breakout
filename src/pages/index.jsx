import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import HeroImg from "../images/highres/football_no_vignette.jpeg";
import FeatureImg from "../images/highres/feature.jpeg";
import GetStartedImg from "../images/highres/get_started.jpeg";
import Icon from "../images/bb-logo.png";
import MagnifyingGlass from "../images/magnifier.png";
import Trophy from "../images/trophy.png";
import Handshake from "../images/hand-shake.png";

export default function Home() {
  return (
    <>
      <Layout>
        <main className="relative text-custom-white">
          {/* Hero Section */}
          <section className="hero bg-custom-black w-full relative h-[600px] flex items-center justify-center">
            <div className="w-full h-full">
              <img
                src={HeroImg}
                alt="American football on a field"
                className="h-full w-full object-cover opacity-30"
              />
            </div>
            <div className="absolute flex align-center text-center flex-col w-full">
              <div className="w-14 mb-4 mx-auto">
                <img src={Icon} alt="Backyard Breakout logo" />
              </div>
              <h2 className="txt-shadow text-4xl px-2 font-extrabold !leading-normal tracking-wide py-4 md:pb-8 md:text-5xl">
                BACKYARD BREAKOUT
              </h2>
              <p className="px-4">
                League-winning advice & discussion from fantasy veterans
              </p>
              <button className="txt-shadow mt-4 mx-auto p-4 text-xl">
                Learn More
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="txt-shadow features bg-custom-black w-full relative h-[120vh] flex items-center justify-center border-b-[10px] border-custom-white sm:h-[600px]">
            <div className="w-full h-full">
              <img
                src={FeatureImg}
                alt="American football player catching a pass"
                className="h-full w-full object-cover opacity-10"
              />
            </div>
            <div className="absolute flex align-center text-center flex-col w-full">
              <h3 className="txt-shadow text-4xl mt-16 font-extrabold !leading-normal tracking-wide sm:mt-4 md:text-5xl">
                What we do
              </h3>
              <p className="px-4 mt-4 mb-8">
                We're not here to tell you how to play—just here to give you
                that extra edge to dominate your league.
              </p>
              <section className="mx-auto flex flex-col sm:flex-row sm:container lg:max-w-[1024px]">
                <section className="p-2 w-[344px] mx-auto md:w-1/3 md:p-4">
                  <section className="w-[75px] mx-auto border-custom-white border-2 p-5 rounded-full">
                    <img src={MagnifyingGlass} alt="magnifying glass" />
                  </section>
                  <p className="py-6">
                    Well researched and thoughtful information to help you get
                    an edge
                  </p>
                </section>
                <section className="p-2 w-[344px] mx-auto md:w-1/3 md:p-4">
                  <section className="w-[75px] mx-auto border-custom-white border-2 p-5 rounded-full">
                    <img src={Trophy} alt="trophy" />
                  </section>
                  <p className="py-6">
                    Analysis written by league winners in a variety of league
                    formats
                  </p>
                </section>
                <section className="p-2 w-[344px] mx-auto md:w-1/3 md:p-4">
                  <section className="w-[75px] mx-auto border-custom-white border-2 p-5 rounded-full">
                    <img src={Handshake} alt="a handshake" />
                  </section>
                  <p className="py-6">
                    Insightful player values to help you make impactful trades
                  </p>
                </section>
              </section>
            </div>
          </section>

          {/* Get Started Section */}
          <section className="get-started bg-custom-black w-full relative h-[80vh] sm:h-[500px] flex items-center justify-center">
            <div className="w-full h-full">
              <img
                src={GetStartedImg}
                alt="American football player running with ball"
                className="object-cover h-full w-full opacity-10"
              />
            </div>
            <div className="absolute flex align-center text-center flex-col w-full">
              <h3 className="txt-shadow text-4xl font-extrabold !leading-normal tracking-wide sm:mt-4 md:text-5xl">
                Get Started
              </h3>
              <p className="px-4 mt-4 mb-4">
                Check out our articles, or learn more about how it all started.
              </p>
              <p className="px-4 mb-8">
                All of the resources on Backyard Breakout are FREE and always
                will be.
              </p>
              <section>
                <Link
                  to="/articles"
                  className="p-4 bg-gradient-to-b from-slate-500 to-slate-800 rounded-xl font-bold mr-4"
                >
                  Articles
                </Link>
                <Link
                  to="/about"
                  className="p-4 bg-gradient-to-b from-slate-500 to-slate-800 rounded-xl font-bold"
                >
                  About
                </Link>
              </section>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
