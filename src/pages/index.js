import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';

const BlogIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.allMarkdownRemark.edges');

  return (
    <main>
      <Helmet title={siteTitle} />
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <article key={node.fields.slug} style={{ marginBottom: rhythm(1.25) }}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 6),
                }}
              >
                <Link to={`/${node.fields.slug}`}>{title}</Link>
              </h3>
              <small
                style={{
                  display: 'block',
                  fontWeight: 600,
                  marginTop: rhythm(0.25),
                  marginBottom: rhythm(0.25),
                }}
              >
                {node.frontmatter.date}
              </small>
            </header>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </article>
        );
      })}
    </main>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC} 
      filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD. MMMM YYYY", locale: "de_DE")
            title
          }
        }
      }
    }
  }

`;
