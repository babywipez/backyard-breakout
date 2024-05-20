import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function index({ data }) {
  // access array from graphql query
  const articles = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section>
        <h2>Articles</h2>
        <h3>Heading 3 goes here</h3>
        <section>
          {articles.map((article) => (
            <Link to={"/articles/" + article.frontmatter.slug} key={article.id}>
              <div>
                <GatsbyImage
                  image={
                    article.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt="Article thumnail"
                />
                <h3>{article.frontmatter.title}</h3>
                <p>{article.frontmatter.subtitle}</p>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ArticlesPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date
          slug
          subtitle
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;
