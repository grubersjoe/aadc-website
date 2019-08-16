import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { getAvatarFor, getPageTitle } from '../../utils/helper';
import Avatar from '../../components/Avatar';
import ImageGrid from '../../components/ImageGrid';
import Layout from '../../components/Layout';
import TeamInfo from '../../components/TeamInfo';
import TeamPhoto from '../../components/TeamPhoto';
import TeamNav from '../../components/TeamNav';

const Team2018 = ({ data, location }) => (
  <Layout location={location}>
    <Helmet title={`Team 2017/2018 – ${getPageTitle(data)}`}>
      <meta
        name="description"
        content="Teammitglieder 2017/2018 des Studententeam HTWK Smart Driving aus Leipzig"
      />
    </Helmet>

    <h1>Team Smart Driving 2017/2018</h1>
    <TeamNav />

    <TeamInfo
      leader={{
        name: 'Lina Peters',
        email: 'lina.peters@stud.htwk-leipzig.de',
      }}
    />

    <TeamPhoto img={data.team} alt="Team Smart Driving 2017/2018" />

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar img={getAvatarFor(data.avatars, 'Lina')} caption="Lina Peters" />
      <Avatar img={getAvatarFor(data.avatars, 'Leo')} caption="Leo Binder" />
      <Avatar img={getAvatarFor(data.avatars, 'Nick')} caption="Nick Fahrendorff" />
      <Avatar img={getAvatarFor(data.avatars, 'Fabi')} caption="Fabian Freihube" />
      <Avatar img={getAvatarFor(data.avatars, 'Philipp')} caption="Philipp Kleinhenz" />
    </ImageGrid>

    <h2>Freie Mitarbeiter</h2>
    <ImageGrid>
      <Avatar img={getAvatarFor(data.avatars, 'Franz')} caption="Franz Anders" />
      <Avatar img={getAvatarFor(data.avatars, 'Jo')} caption="Jonathan Gruber" />
      <Avatar caption="Fabian Sauer" />
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
    team: file(relativePath: { eq: "images/team/team-2017.jpg" }) {
      ...fullwidthImage
    }
    avatars: allFile(
      filter: { name: { in: ["franz", "jo", "lina", "leo", "nick", "fabi", "philipp"] } }
    ) {
      edges {
        node {
          ...avatarImage
        }
      }
    }
  }
`;

export default Team2018;
