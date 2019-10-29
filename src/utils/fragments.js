import { graphql } from 'gatsby';

export const fullwidthImage = graphql`
  fragment fullwidthImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 700, quality: 85) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;

export const avatarImage = graphql`
  fragment avatarImage on File {
    name
    childImageSharp {
      fluid(maxWidth: 215, quality: 85) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;
