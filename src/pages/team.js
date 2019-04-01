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
  }
`;

export default TeamPage;
