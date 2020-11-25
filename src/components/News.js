import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import NextIco from "@assets/images/next.svg";


import { StaticQuery, graphql } from "gatsby";



const News = ({ showCount }) => (

  
  

  <StaticQuery
  
    query={graphql`
      query NewsQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                type
                date(formatString: "DD/MM/YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        {showCount && <h4>{data.allMarkdownRemark.totalCount} noticias</h4>}
        <div className="columns is-multiline is-mobile is-centered">
          {data.allMarkdownRemark.edges.map(({ node }, i) => {
            return (
              <>
               
                <Link to={node.fields.slug} key={node.id}
                  className="news-box column is-3">
                  <h3 className="news-box__title">{node.frontmatter.title} </h3>
                  <p>{node.excerpt}</p>
                  <button>
                    LER MAIS <img src={NextIco} />
                  </button>
                </Link>
               
              </>
            );
          })}
          
        </div>
      </>
    )}
  />
  
);

News.propTypes = {
  showCount: PropTypes.bool,
};

News.defaultProps = {
  showCount: false,
};
export default News;
