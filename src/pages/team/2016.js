import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
import { team2015 } from '../../images/team';
import { getPageTitle } from '../../utils/helper';

const Team = props => (
  <main>
    <Helmet title={`Team 2015/2016 – ${getPageTitle(props.data)}`}>
      <meta
        name="description"
        content="Website des Studententeams HTWK Smart Driving aus Leipzig – Teammitglieder 2015/2016."
      />
    </Helmet>

    <TeamNav />
    <h1>Team Smart Driving 2015/2016</h1>

    <TeamInfo leader={{ name: 'Georg Jenschmischek' }} />

    <a href={team2015} target="_blank">
      <img src={team2015} alt="Team Smart Driving 2015/2016" />
    </a>

    <h2>Kernteam</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar imgUrl={avatarGeorg} caption="Georg Jenschmischek" />
      <Avatar imgUrl={avatarPatrick} caption="Patrick Bachmann" />
      <Avatar imgUrl={avatarSilvio} caption="Silvio Feig" />
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />
      <Avatar imgUrl={avatarMax} caption="Max Winkler" />
    </div>
  </main>
);

Team.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const PageQuery = graphql`
  query Team2015Query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Team;
