import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { getAvatarFor, getPageTitle } from '../../utils/helper';
import Avatar from '../../components/Avatar';
import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';
import TeamNav from '../../components/TeamNav';
import TeamInfo from '../../components/TeamInfo';
import TeamPhoto from '../../components/TeamPhoto';

const Team2016 = ({ data, location }) => (
  <Layout location={location}>
    <Helmet title={`Team 2015/2016 – ${getPageTitle(data)}`}>
      <meta
        name="description"
        content="Website des Studententeams HTWK Smart Driving aus Leipzig – Teammitglieder 2015/2016."
      />
    </Helmet>

    <h1>Team Smart Driving 2015/2016</h1>
    <TeamNav />

    <TeamInfo leader={{ name: 'Georg Jenschmischek' }} />
    <TeamPhoto img={data.team} alt="Team Smart Driving 2015/2016" />

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar img={getAvatarFor(data.avatars, 'Georg')} caption="Georg Jenschmischek" />
      <Avatar img={getAvatarFor(data.avatars, 'Patrick')} caption="Patrick Bachmann" />
      <Avatar img={getAvatarFor(data.avatars, 'Silvio')} caption="Silvio Feig" />
      <Avatar img={getAvatarFor(data.avatars, 'Fabi')} caption="Fabian Freihube" />
      <Avatar img={getAvatarFor(data.avatars, 'Max')} caption="Max Winkler" />
    </ImageGrid>
  </Layout>
);

export const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    team: file(relativePath: { eq: "images/team/team-2015.jpg" }) {
      ...fullwidthImage
    }
    avatars: allFile(filter: { name: { in: ["georg", "patrick", "silvio", "fabi", "max"] } }) {
      edges {
        node {
          ...avatarImage
        }
      }
    }
  }
`;

export default Team2016;
