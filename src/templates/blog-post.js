import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const { previous, next } = props.pathContext;

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h1>{post.frontmatter.title}</h1>
      <small
        style={{
          display: 'block',
          marginBottom: rhythm(0.75),
          marginTop: rhythm(-0.5),
          fontWeight: 700,
        }}
      >
        {post.frontmatter.date}
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {previous && (
          <li>
            <Link to={`/${previous.fields.slug}`} rel="prev">
              {' '}
              ← {previous.frontmatter.title}
            </Link>
          </li>
        )}

        {next && (
          <li>
            <Link to={`/${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →{' '}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD. MMMM YYYY", locale: "de_DE")
      }
    }
  }
`;
