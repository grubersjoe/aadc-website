import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const Bio = (props) => {
  const { footer } = props;

  const StyledBio = styled('article')`
    margin-top: ${footer ? rhythm(1.75) : 0};
    margin-bottom: ${footer ? rhythm(1) : rhythm(1.75)};

    @media (min-width: 768px) {
      font-size: 110%;
    }
  `;

  return (
    <StyledBio>
      Wir sind das Team <strong>HTWK Smart Driving</strong> der{' '}
      <a href="https://www.htwk-leipzig.de" target="_blank" rel="noopener noreferrer">
        Hochschule für Technik, Wirtschaft und Kultur Leipzig
      </a>
      {' '}
      Als studentische Forschungs&shy;gruppe be&shy;schäftigen wir uns mit Technologien rund um das
      autonome Autofahren. Seit 2014 nehmen wir am{' '}
      <a href="https://www.audi-autonomous-driving-cup.com" target="_blank" rel="noopener noreferrer">
        Audi Autonomous Driving Cup
      </a>{' '}
      (AADC) teil.
    </StyledBio >
  );
};

Bio.propTypes = {
  footer: PropTypes.bool,
};

Bio.defaultProps = {
  footer: false,
};

export default Bio;
