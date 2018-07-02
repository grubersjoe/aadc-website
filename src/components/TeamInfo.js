import React from 'react';
import PropTypes from 'prop-types';

const TeamInfo = (props) => {
  const { name: leaderName, email: leaderEmail} = props.leader;

  return (
    <dl>
      <dt style={{ fontWeight: 500 }}>Betreuende Professoren</dt>
      <dd>
        <a href="http://www.imn.htwk-leipzig.de/~schwarz/" target="_blank" rel="noopener noreferrer">
          Prof. Dr. Schwarz
        </a> und{' '}
        <a href="https://portal.imn.htwk-leipzig.de/fakultaet/personen/m6bast" target="_blank" rel="noopener noreferrer">
          Prof. Dr. Bastian
        </a>
        <br />
        <a href="https://portal.imn.htwk-leipzig.de/" target="_blank" rel="noopener noreferrer">
          Fakultät Informatik, Mathematik und Naturwissenschaften
        </a>
      </dd>
      <dt style={{ fontWeight: 500 }}>Teamspecherin</dt>
      <dd>
        {leaderName}
        {leaderEmail && (<span> – <a href={`mailto:${leaderEmail}`}>{leaderEmail}</a></span>)}
      </dd>
    </dl>
  );
};

TeamInfo.propTypes = {
  leader: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TeamInfo;
