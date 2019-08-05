import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';
import TeamNav from '../../components/TeamNav';
import TeamInfo from '../../components/TeamInfo';

import Avatar from '../../components/Avatar';
import {
  avatarFabi,
  avatarFranz,
  avatarLeo,
  avatarLina,
  avatarJo,
  avatarNick,
  avatarPhilipp,
} from '../../images/avatars';
import { getPageTitle } from '../../utils/helper';

const Team2018 = props => (
  <Layout location={props.location}>
    <Helmet title={`Team 2017/2018 – ${getPageTitle(props.data)}`}>
      <meta
        name="description"
        content="Website des Studententeams HTWK Smart Driving aus Leipzig – Teammitglieder 2017/2018."
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

    <a href={props.data.team.publicURL} target="_blank" rel="noopener noreferrer">
      <Image
        fluid={props.data.team.childImageSharp.fluid}
        fadeIn={false}
        alt="Team Smart Driving 2017/2018"
      />
    </a>

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarLina} caption="Lina Peters" />
      <Avatar imgUrl={avatarLeo} caption="Leo Binder" />
      <Avatar imgUrl={avatarNick} caption="Nick Fahrendorff" />
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />
      <Avatar imgUrl={avatarPhilipp} caption="Philipp Kleinhenz" />
    </ImageGrid>

    <h2>Freie Mitarbeiter</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarFranz} caption="Franz Anders" />
      <Avatar
        imgUrl={avatarJo}
        caption="Jonathan Gruber"
        profiles={{
          website: 'https://grubersjoe.de',
          github: 'https://github.com/grubersjoe',
        }}
      />
      <Avatar caption="Fabian Sauer" />
    </ImageGrid>
  </Layout>
);

Team2018.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

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

export default Team2018;
