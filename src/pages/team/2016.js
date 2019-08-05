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
  avatarGeorg,
  avatarPatrick,
  avatarSilvio,
  avatarFabi,
  avatarMax,
} from '../../images/avatars';

import { getPageTitle } from '../../utils/helper';

const Team2016 = props => (
  <Layout location={props.location}>
    <Helmet title={`Team 2015/2016 – ${getPageTitle(props.data)}`}>
      <meta
        name="description"
        content="Website des Studententeams HTWK Smart Driving aus Leipzig – Teammitglieder 2015/2016."
      />
    </Helmet>

    <h1>Team Smart Driving 2015/2016</h1>
    <TeamNav />

    <TeamInfo leader={{ name: 'Georg Jenschmischek' }} />

    <a href={props.data.team.publicURL} target="_blank" rel="noopener noreferrer">
      <Image
        fluid={props.data.team.childImageSharp.fluid}
        fadeIn={false}
        alt="Team Smart Driving 2015/2016"
      />
    </a>

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarGeorg} caption="Georg Jenschmischek" />
      <Avatar imgUrl={avatarPatrick} caption="Patrick Bachmann" />
      <Avatar imgUrl={avatarSilvio} caption="Silvio Feig" />
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />
      <Avatar imgUrl={avatarMax} caption="Max Winkler" />
    </ImageGrid>
  </Layout>
);

Team2016.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

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
  }
`;

export default Team2016;
