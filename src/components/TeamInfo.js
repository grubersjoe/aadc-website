import React from 'react';
import PropTypes from 'prop-types';

import { profSchwarz, profBastian } from '../data/professors';

function concatProfessors(professors) {
  return professors
    .map(
      prof =>
        prof.url &&
        prof.name && (
          <a href={prof.url} target="_blank" rel="noopener noreferrer" key={prof.name}>
            {prof.name}
          </a>
        ),
    )
    .concat(<br />)
    .reduce((prev, curr) => [prev, curr.type !== 'br' ? ' und ' : null, curr]); // join entries
}

const TeamInfo = ({ leader, professors }) => (
  <dl>
    <dt style={{ fontWeight: 500 }}>Betreuende Professoren</dt>
    <dd>
      {concatProfessors(professors)}
      <a href="https://portal.imn.htwk-leipzig.de/" target="_blank" rel="noopener noreferrer">
        Fakultät Informatik, Mathematik und Naturwissenschaften
      </a>
    </dd>
    <dt style={{ fontWeight: 500 }}>Teamspecherin</dt>
    <dd>
      {leader.name}
      {leader.email && (
        <span>
          {' '}
          – <a href={`mailto:${leader.email}`}>{leader.email}</a>
        </span>
      )}
    </dd>
  </dl>
);

TeamInfo.propTypes = {
  leader: PropTypes.objectOf(PropTypes.string).isRequired,
  professors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

TeamInfo.defaultProps = {
  professors: [profSchwarz, profBastian],
};

export default TeamInfo;
