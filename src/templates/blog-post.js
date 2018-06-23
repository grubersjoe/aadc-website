import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { rhythm } from '../utils/typography';
import { colors, fontSizes } from '../utils/constants';
import { getPageTitle } from '../utils/helper';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pathContext;

  const PostNav = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: ${rhythm(1.5)};
  `;

  const LinkWrapper = styled('div')`
    flex: 0 0 48%;
    overflow: hidden;
    font-size: ${fontSizes.small};

    > a {
      display: flex;
      align-items: center;
    }
  `;

  const LinkIcon = styled(FontAwesomeIcon)`
    color: ${colors.secondary};
    height: 100%;
  `;

  const LinkText = styled('span')`
    flex-grow: 1;
    color: ${colors.text};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} – ${getPageTitle(props.data)}`} />
      <h1>{post.frontmatter.title}</h1>
      <small
        style={{
          display: 'block',
          marginBottom: rhythm(0.75),
          marginTop: rhythm(-0.5),
          fontWeight: 600,
        }}
      >
        {post.frontmatter.date}
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostNav>
        <LinkWrapper>
          {next && (
            <Link to={`/${next.fields.slug}`} rel="next">
              <LinkIcon icon={faArrowLeft} style={{ marginRight: 8 }} />
              <LinkText>{next.frontmatter.title}</LinkText>
            </Link>
          )}
        </LinkWrapper>
        <LinkWrapper>
          {previous && (
            <Link to={`/${previous.fields.slug}`} rel="previous">
              <LinkText style={{ textAlign: 'right' }}>{previous.frontmatter.title}</LinkText>
              <LinkIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
            </Link>
          )}
        </LinkWrapper>
      </PostNav>
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
