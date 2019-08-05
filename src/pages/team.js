import { graphql } from 'gatsby';
import React from 'react';

import Team2018 from './team/2018';

const TeamPage = props => <Team2018 {...props} />;

export const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    team: file(relativePath: { eq: "images/team/team-2017.jpg" }) {
      ...fullwidthImage
    }
  }
`;

export default TeamPage;
