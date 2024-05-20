import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function ArticleDetails({ data }) {
  // save data from graphql query
  const { html } = data.markdownRemark;
  const { title, subtitle, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <>
      <Layout>
        <section>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div>
            <GatsbyImage
              image={featuredImg.childImageSharp.gatsbyImageData}
              alt="article image"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
