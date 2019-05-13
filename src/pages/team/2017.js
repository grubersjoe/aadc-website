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
  avatarFabi,
  avatarLina,
  avatarJo,
  avatarMicha,
  avatarNick,
  avatarPhilipp,
} from '../../images/avatars';
import { team2016 } from '../../images/team';

import { getPageTitle } from '../../utils/helper';

const Team2017 = props => (
  <Layout location={props.location}>
    <Helmet title={`Team 2016/2017 – ${getPageTitle(props.data)}`}>
      <meta
        name="description"
        content="Website des Studententeams HTWK Smart Driving aus Leipzig – Teammitglieder 2016/2017."
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

    <a href={team2016} target="_blank" rel="noopener noreferrer">
      <img src={team2016} alt="Team Smart Driving 2017/2018" />
    </a>

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />
      <Avatar imgUrl={avatarNick} caption="Nick Fahrendorff" />
      <Avatar
        imgUrl={avatarJo}
        caption="Jonathan Gruber"
        profiles={{
          website: 'https://grubersjoe.de',
          github: 'https://github.com/grubersjoe',
        }}
      />
      <Avatar imgUrl={avatarMicha} caption="Michael Horn" />
      <Avatar imgUrl={avatarLina} caption="Lina Peters" />
    </ImageGrid>

    <h2>Freie Mitarbeiter</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarPhilipp} caption="Philipp Kleinhenz" />
      <Avatar caption="Sonja Mauersberger" />
    </ImageGrid>
  </Layout>
);

Team2017.propTypes = {
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

export default Team2017;
