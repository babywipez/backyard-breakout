import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import * as styles from "../styles/article-details.module.css";

export default function ArticleDetails({ data }) {
  // save data from graphql query
  const { html } = data.markdownRemark;
  const { title, subtitle, author, date, featuredImg } =
    data.markdownRemark.frontmatter;

  return (
    <>
      <Layout>
        <section className={styles.page}>
          <section className="p-4 mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold mb-4">
              {title}
            </h2>
            <p className="my-3 text-custom-darkgray font-6xl text-lg">
              {subtitle}
            </p>
            <p className="text-xs">By {author}</p>
            <p className="text-xs mb-2">{date}</p>
            <div className="flex justify-center mb-12">
              <GatsbyImage
                image={featuredImg.childImageSharp.gatsbyImageData}
                alt="article image"
              />
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
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
