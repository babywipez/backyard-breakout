import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import * as styles from "../styles/article-details.module.css";

export default function ArticleDetails({ data }) {
  // save data from graphql query
  const { html } = data.markdownRemark;
  const { title, subtitle, author, date, featuredImg, imgCaption } =
    data.markdownRemark.frontmatter;

  // convert timestamp string into readable
  function formatDateString(dateString) {
    // Parse the input date string
    const date = new Date(dateString);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the month, day, and year
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Return the formatted date string
    return `${month} ${day}, ${year}`;
  }

  return (
    <>
      <Layout>
        <section className="page-shadow">
          <section className="p-4 mx-auto max-w-3xl leading-8">
            <section className="mb-4 border-b-2 border-custom-white">
              <h2 className="text-center text-3xl font-extrabold mb-4">
                {title}
              </h2>
              <p className="my-3 text-custom-darkgray font-6xl text-lg">
                {subtitle}
              </p>
              <p className="text-xs">By {author}</p>
              <p className="text-xs mb-2">{formatDateString(date)}</p>
            </section>
            <div className="flex justify-center mb-12 flex-col">
              <GatsbyImage
                image={featuredImg.childImageSharp.gatsbyImageData}
                alt="article image"
              />
              <p className="text-xs py-2 text-center border-b-2 border-custom-white">
                {imgCaption}
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
              className={styles.article}
            />
          </section>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ArticleDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        author
        subtitle
        date
        imgCaption
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
