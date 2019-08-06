import { graphql } from 'gatsby';

export const fullwidthImage = graphql`
  fragment fullwidthImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 640, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;

export const avatarImage = graphql`
  fragment avatarImage on File {
    name
    childImageSharp {
      fluid(maxWidth: 196, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;
