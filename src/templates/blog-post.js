import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/fontawesome-free-solid';

import { rhythm, scale } from '../utils/typography';
import { colorSecondary } from '../utils/constants';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const { title: siteTitle } = props.data.site.siteMetadata;
  const { previous, next } = props.pathContext;
  const trimLength = 40; // characters

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} – ${siteTitle}`} />
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: rhythm(1.5),
          fontWeight: 500,
        }}
      >
        <small style={{ flex: '0 0 50%' }}>
          {next && (
            <Link to={`/${next.fields.slug}`} rel="next" style={{ color: colorSecondary }}>
              <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 8 }} />
              {next.frontmatter.title.substr(0, trimLength)}
              {next.frontmatter.title.length > trimLength && ' …'}
            </Link>
          )}
        </small>
        <small style={{ flex: '0 0 50%', textAlign: 'right' }}>
          {previous && (
            <Link to={`/${previous.fields.slug}`} rel="prev" style={{ color: colorSecondary }}>
              {previous.frontmatter.title.substr(0, trimLength)}
              {previous.frontmatter.title.length > trimLength && ' …'}
              <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
            </Link>
          )}
        </small>
      </div>
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
