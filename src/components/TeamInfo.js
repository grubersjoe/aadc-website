import React from 'react';
import PropTypes from 'prop-types';

const TeamInfo = (props) => {
  const { name: leaderName, email: leaderEmail} = props.leader;

  return (
    <dl>
      <dt>Betreuende Professoren</dt>
      <dd>
        <a href="http://www.imn.htwk-leipzig.de/~schwarz/" target="_blank" rel="noopener noreferrer">
          Prof. Dr. Schwarz
        </a> und{' '}
        <a href="https://portal.imn.htwk-leipzig.de/fakultaet/personen/m6bast" target="_blank" rel="noopener noreferrer">
          Prof. Dr. Bastian
        </a> der Fakultät{' '}
        <a href="https://portal.imn.htwk-leipzig.de/" target="_blank" rel="noopener noreferrer">
          Informatik, Mathematik und Naturwissenschaften
        </a> der HTWK Leipzig.
      </dd>
      <dt>Teamspecherin</dt>
      <dd>
        {`${leaderName} – `}
        <a href={`mailto:${leaderEmail}`}>{leaderEmail}</a>
      </dd>
    </dl>
  );
};

TeamInfo.propTypes = {
  leader: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TeamInfo;
