module.exports = {
  siteMetadata: {
    title: 'HTWK Smart Driving',
    siteUrl: 'https://smart-driving.htwk-leipzig.de/',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640, // page width
              quality: 70,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.5rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      // TODO: <a href="javascript:gaOptout();">Deactive Google Analytics</a>
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120606547-1',
        anonymize: true,
      },
    },

    // Image processing
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
  ],
};
