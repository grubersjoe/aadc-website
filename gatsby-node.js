const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slug = require('slug');
const dayjs = require('dayjs');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(graphql(`
        {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then((result) => {
      if (result.errors) {
        // eslint-disable-next-line no-console
        console.log(result.errors);
        reject(result.errors);
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges;

      _.each(posts, (post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          path: post.node.fields.slug,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        });
      });
    }));
  });
};

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const { title, date } = node.frontmatter;
    const value = dayjs(date).format('YYYY/MM/') + slug(title, { lower: true });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
