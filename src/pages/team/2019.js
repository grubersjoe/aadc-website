import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { profSchwarz } from '../../data/professors';

import { getAvatarFor, getPageTitle } from '../../utils/helper';

import Avatar from '../../components/Avatar';
import ImageGrid from '../../components/ImageGrid';
import Layout from '../../components/Layout';
import TeamInfo from '../../components/TeamInfo';
import TeamNav from '../../components/TeamNav';
import TeamPhoto from '../../components/TeamPhoto';

const Team2019 = ({ data, location }) => (
  <Layout location={location}>
    <Helmet title={`Team 2019/2020 – ${getPageTitle(data)}`}>
      <meta
        name="description"
        content="Teammitglieder 2019/2020 des Studententeam HTWK Smart Driving aus Leipzig"
      />
    </Helmet>

    <h1>Team Smart Driving 2019/2020</h1>
    <TeamNav />

    <TeamInfo
      leader={{
        name: 'Leo Binder',
        email: 'leo.binder@stud.htwk-leipzig.de',
      }}
      professors={[profSchwarz]}
    />

    <TeamPhoto img={data.team} alt="Team Smart Driving 2019/2020" />

    <h2>Team</h2>
    <ImageGrid>
      <Avatar img={getAvatarFor(data.avatars, 'Schwarz')} caption="Prof. Dr. Schwarz" />
      <Avatar img={getAvatarFor(data.avatars, 'Leo-2019')} caption="Leo Binder" />
      <Avatar img={getAvatarFor(data.avatars, 'Andreas-2019')} caption="Andreas" />
      <Avatar img={getAvatarFor(data.avatars, 'Christoph')} caption="Christoph" />
      <Avatar img={getAvatarFor(data.avatars, 'Gerrit')} caption="Gerrit" />
      <Avatar img={getAvatarFor(data.avatars, 'Jakob')} caption="Jakob" />
      <Avatar img={getAvatarFor(data.avatars, 'Jonas')} caption="Jonas" />
      <Avatar img={getAvatarFor(data.avatars, 'Julius')} caption="Julius" />
      <Avatar img={getAvatarFor(data.avatars, 'Lukas')} caption="Lukas" />
      <Avatar img={getAvatarFor(data.avatars, 'Malte')} caption="Malte" />
      <Avatar img={getAvatarFor(data.avatars, 'Manuel')} caption="Manuel" />
      <Avatar img={getAvatarFor(data.avatars, 'Mariia')} caption="Mariia" />
      <Avatar img={getAvatarFor(data.avatars, 'Sandra')} caption="Sandra" />
      <Avatar img={getAvatarFor(data.avatars, 'Stefan')} caption="Stefan" />
      <Avatar img={getAvatarFor(data.avatars, 'Thomas')} caption="Thomas" />
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

export default Team2019;
