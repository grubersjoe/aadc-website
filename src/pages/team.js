import { graphql } from 'gatsby';
import React from 'react';

import CurrentTeam from './team/2019';

const TeamPage = props => <CurrentTeam {...props} />;

export const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    team: file(relativePath: { eq: "team/team-2019.jpg" }) {
      ...fullwidthImage
    }
    avatars: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          ...avatarImage
        }
      }
    }
  }
`;

export default TeamPage;
