import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { getPageTitle } from '../utils/helper';

import Layout from '../components/Layout';

const BlogIndex = props => {
  const posts = props.data.allMarkdownRemark.edges;

  const Date = styled('small')`
    display: block;
    font-weight: 500;
    margin-top: ${rhythm(0.25)};
    margin-bottom: ${rhythm(0.25)};
  `;

  return (
    <Layout location={props.location}>
      <Helmet title={`Neuigkeiten – ${getPageTitle(props.data)}`} />
      <h1>Neues aus Leipzig</h1>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug} style={{ marginBottom: rhythm(1.5) }}>
            <h3 style={{ marginBottom: 0 }}>
              <Link to={`/${node.fields.slug}/`}>{title}</Link>
            </h3>
            <Date>{node.frontmatter.date}</Date>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </article>
        );
      })}
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BlogIndex;

export const PageQuery = graphql`
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
          excerpt(pruneLength: 155)
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
