import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import { rhythm, scale } from '../utils/typography';
import Button from '../components/Button';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const { title: siteTitle } = props.data.site.siteMetadata;
  const { previous, next } = props.pathContext;

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
        }}
      >
        <small style={{ flex: '0 0 50%' }}>
          {previous && (
            <Link to={`/${previous.fields.slug}`} rel="prev" title={previous.frontmatter.title}>
              <Button>
                Vorheriger Post
              </Button>
            </Link>
          )}
        </small>

        <small style={{ flex: '0 0 50%', textAlign: 'right' }}>
          {next && (
            <Link to={`/${next.fields.slug}`} rel="next" title={next.frontmatter.title} className="btn">
              <Button>
                Nächster Post
              </Button>
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
