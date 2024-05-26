import React from "react";
import Layout from "../components/Layout";
import ButtonMailto from "../components/ButtonMailto";
import AboutImg from "../images/highres/about.jpeg";
import WriterImg from "../images/highres/writer.jpeg";

export default function About() {
  return (
    <Layout>
      <main className="page-shadow">
        <section className="about flex flex-col items-center justify-between md:p-8 md:flex-row xl:container xl:mx-auto">
          <section className="w-full px-4 py-8 md:w-1/2">
            <section className="text-center leading-6">
              <h1 className="text-4xl font-extrabold py-2">ABOUT</h1>
              <p className="py-2">
                Welcome to Backyard Breakout! My name is Christopher Cassada,
                and I'm excited to share my passion for fantasy football with
                you. I created this website to serve as a supplemental resource
                to provide valuable information and insights that will help you
                become a better fantasy player. Whether you're a seasoned
                veteran or a newcomer to the fantasy football world, my hope is
                that you'll find something useful here!
              </p>
              <h3 className="text-xl font-bold py-2">My Fantasy Journey</h3>
              <p className="py-2">
                I've been playing fantasy football since 2016, and in that time,
                I've had the honor of clinching several 1st place titles. My
                experience has taught me a lot about strategy and analysis, and
                I'm excited to share some things I've learned along the way with
                all of you!
              </p>
              <h3 className="text-xl font-bold py-2">A Little About Me</h3>
              <p className="py-2">
                By profession, I'm a web developer, and this blog is a product
                of my skills and love for the game. You can find me cheering on
                my Packers on Sundays and Gators on Saturdays.
              </p>
            </section>
          </section>
          <section className="w-2/3 flex px-4 pb-12 pt-8 md:p-4 md:w-1/2">
            <section className="max-w-[500px] mx-auto">
              <img
                src={AboutImg}
                className="max-w-full section-shadow"
                alt="Website creator standing next to a statue of Vince Lombardi"
              />
            </section>
          </section>
        </section>

        <section className="writer txt-shadow bg-custom-black w-full relative h-[60vh] flex items-center justify-center sm:h-[400px]">
          <div className="w-full h-full">
            <img
              src={WriterImg}
              alt="A person writing in a notebook with a laptop nearby"
              className="h-full w-full object-cover opacity-30"
            />
          </div>
          <section
            id="contact"
            className="p-4 absolute text-custom-white sm:max-w-[768px] sm:mx-auto"
          >
            <h3 className="text-4xl font-bold text-center mb-4">
              Join the Team
            </h3>
            <p className="leading-loose">
              I'm always looking to expand the community here. If you're
              interested in writing for the blog, I'd love to hear from you!
              Contributors will be fully credited for their articles, providing
              a platform to share your expertise and insights with a wider
              audience. Email me at:&nbsp;
              <ButtonMailto
                label="cassada.chris@gmail.com"
                mailto="mailto:cassada.chris@gmail.com"
              />
            </p>
          </section>
        </section>
      </main>
    </Layout>
  );
}

export const Head = () => <title>Backyard Breakout | About</title>;
