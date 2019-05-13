import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';
import TeamNav from '../../components/TeamNav';
import TeamInfo from '../../components/TeamInfo';

import Avatar from '../../components/Avatar';
import {
  avatarDenny,
  avatarSilvio,
  avatarAndreas,
  avatarLars,
  avatarEike,
} from '../../images/avatars';
import { team2014 } from '../../images/team';
import { getPageTitle } from '../../utils/helper';

const Team2015 = props => (
  <Layout location={props.location}>
    <Helmet title={`Team 2014/2015 – ${getPageTitle(props.data)}`}>
      <meta
        name="description"
        content="Website des Studententeams HTWK Smart Driving aus Leipzig – Teammitglieder 2014/2015."
      />
    </Helmet>

    <h1>Team Smart Driving 2014/2015</h1>
    <TeamNav />

    <TeamInfo leader={{ name: 'Denny Hecht' }} />

    <a href={team2014} target="_blank" rel="noopener noreferrer">
      <img src={team2014} alt="Team Smart Driving 2014/2015" />
    </a>

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarDenny} caption="Denny Hecht" />
      <Avatar imgUrl={avatarSilvio} caption="Silvio Feig" />
      <Avatar imgUrl={avatarAndreas} caption="Andreas Kluge" />
      <Avatar imgUrl={avatarLars} caption="Lars Kollmann" />
      <Avatar imgUrl={avatarEike} caption="Eike Florian Petersen" />
    </ImageGrid>
  </Layout>
);

Team2015.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Team2015;
