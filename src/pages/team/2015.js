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

const Team2015 = ({ data, location }) => (
  <Layout location={location}>
    <Helmet title={`Team 2014/2015 – ${getPageTitle(data)}`}>
      <meta
        name="description"
        content="Teammitglieder 2014/2015 des Studententeams HTWK Smart Driving aus Leipzig"
      />
    </Helmet>

    <h1>Team Smart Driving 2014/2015</h1>
    <TeamNav />

    <TeamInfo leader={{ name: 'Denny Hecht' }} />
    <TeamPhoto img={data.team} alt="Team Smart Driving 2014/2015" />

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar img={getAvatarFor(data.avatars, 'Denny')} caption="Denny Hecht" />
      <Avatar img={getAvatarFor(data.avatars, 'Silvio')} caption="Silvio Feig" />
      <Avatar img={getAvatarFor(data.avatars, 'Andreas')} caption="Andreas Kluge" />
      <Avatar img={getAvatarFor(data.avatars, 'Lars')} caption="Lars Kollmann" />
      <Avatar img={getAvatarFor(data.avatars, 'Eike')} caption="Eike Florian Petersen" />
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
    team: file(relativePath: { eq: "images/team/team-2014.jpg" }) {
      ...fullwidthImage
    }
    avatars: allFile(filter: { name: { in: ["denny", "silvio", "andreas", "lars", "eike"] } }) {
      edges {
        node {
          ...avatarImage
        }
      }
    }
  }
`;

export default Team2015;
