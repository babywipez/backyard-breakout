import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function index({ data }) {
  // access array from graphql query
  const articles = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className="page-shadow">
        <section className="py-8 sm:container sm:mx-auto">
          <h2 className="text-center text-4xl pb-8 font-bold">ARTICLES</h2>
          <section className="grid-container max-w-[900px] mx-auto px-4 sm:px-0">
            {articles.map((article) => (
              <Link
                to={"/articles/" + article.frontmatter.slug}
                key={article.id}
              >
                <div className="grid-item txt-shadow relative bg-custom-black h-[200px] sm:h-[275px]">
                  <div className="img-container absolute h-full">
                    <GatsbyImage
                      image={
                        article.frontmatter.thumb.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Article thumnail"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <section className="absolute bottom-0 text-custom-white">
                    <h3 className="font-bold text-2xl px-2 pt-1">
                      {article.frontmatter.title}
                    </h3>
                    <section className="hover-txt">
                      <p className="text-sm px-2">
                        {article.frontmatter.subtitle}
                      </p>
                      <p className="text-xs px-2 py-1 opacity-85">
                        By {article.frontmatter.author}
                      </p>
                    </section>
                  </section>
                </div>
              </Link>
            ))}
          </section>
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

export const Head = () => <title>Backyard Breakout | Articles</title>;
