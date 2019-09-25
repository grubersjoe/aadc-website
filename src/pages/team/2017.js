import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { getAvatarFor, getPageTitle } from '../../utils/helper';
import Avatar from '../../components/Avatar';
import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';
import TeamNav from '../../components/TeamNav';
import TeamPhoto from '../../components/TeamPhoto';
import TeamInfo from '../../components/TeamInfo';

const Team2017 = ({ data, location }) => (
  <Layout location={location}>
    <Helmet title={`Team 2016/2017 – ${getPageTitle(data)}`}>
      <meta
        name="description"
        content="Teammitglieder 2016/2017 des Studententeam HTWK Smart Driving aus Leipzig"
      />
    </Helmet>

    <h1>Team Smart Driving 2016/2017</h1>
    <TeamNav />

    <TeamInfo
      leader={{
        name: 'Fabian Freihube',
        email: 'fabian.freihube@stud.htwk-leipzig.de',
      }}
    />

    <TeamPhoto img={data.team} alt="Team Smart Driving 2016/2017" />

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar img={getAvatarFor(data.avatars, 'Fabi')} caption="Fabian Freihube" />
      <Avatar img={getAvatarFor(data.avatars, 'Nick')} caption="Nick Fahrendorff" />
      <Avatar img={getAvatarFor(data.avatars, 'Jo')} caption="Jonathan Gruber" />
      <Avatar img={getAvatarFor(data.avatars, 'Micha')} caption="Michael Horn" />
      <Avatar img={getAvatarFor(data.avatars, 'Lina')} caption="Lina Peters" />
    </ImageGrid>

    <h2>Freie Mitarbeiter</h2>
    <ImageGrid>
      <Avatar img={getAvatarFor(data.avatars, 'Philipp')} caption="Philipp Kleinhenz" />
      <Avatar img={getAvatarFor(data.avatars, 'Sonja')} caption="Sonja Mauersberger" />
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
    team: file(relativePath: { eq: "images/team/team-2016.jpg" }) {
      ...fullwidthImage
    }
    avatars: allFile(filter: { name: { in: ["fabi", "nick", "jo", "micha", "lina", "philipp"] } }) {
      edges {
        node {
          ...avatarImage
        }
      }
    }
  }
`;

export default Team2017;
