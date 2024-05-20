import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function index({ data }) {
  // access array from graphql query
  const articles = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className="sm:container sm:mx-auto py-8">
        <h2 className="text-center text-4xl py-4 font-bold">ARTICLES</h2>
        <section className="grid-container max-w-[1000px] mx-auto px-4 sm:px-0">
          {articles.map((article) => (
            <Link to={"/articles/" + article.frontmatter.slug} key={article.id}>
              <div className="grid-item rounded-xl">
                <div>
                  <GatsbyImage
                    image={
                      article.frontmatter.thumb.childImageSharp.gatsbyImageData
                    }
                    alt="Article thumnail"
                    className="h-[175px] w-full object-cover rounded-t-xl"
                  />
                </div>
                <h3 className="font-bold text-2xl px-2 pt-1">
                  {article.frontmatter.title}
                </h3>
                <p className="text-sm px-2">{article.frontmatter.subtitle}</p>
                <p className="text-xs px-2 py-1 opacity-80">
                  By {article.frontmatter.author}
                </p>
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
          author
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
