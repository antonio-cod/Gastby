import React from "react";
import Helmet from "react-helmet";
import Container from "@components/Container";
import Layout from "@components/Layout";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import News from "@components/News";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout pageName="news-single">
      <Helmet>
        <title>SLS Advogados -{post.frontmatter.title}</title>
      </Helmet>
      <div className="news_page">
        <Container>
          <h1>{post.frontmatter.title}</h1>
          <h3>
            <b>{post.frontmatter.date}</b>
            {post.frontmatter.author !== "" && <i> - Por {post.frontmatter.author}</i>}
          </h3>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <Link to="/"> Voltar </Link>
          {/* <News /> */}
        </Container>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query BlogPostQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        date(formatString: "DD/MM/YYYY")
        author
      }
    }
  }
`;
