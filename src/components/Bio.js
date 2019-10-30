import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import logo from '../images/logo.svg';

const StyledBio = styled.article`
  margin-top: ${props => (props.isFooter ? rhythm(2) : 0)};
  margin-bottom: ${rhythm(2)};
  hyphens: auto;

  em {
    font-style: normal;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    display: flex;
    padding-right: 2em;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  width: 40%;
  min-width: 100px;

  @media (min-width: 768px) {
    width: auto;
    margin-right: ${rhythm(1.25)};
    flex: 0 0 138px;

    img {
      margin-bottom: 0;
    }
  }
`;

const Bio = props => (
  <StyledBio isFooter={props.isFooter}>
    <LogoLink to="/" title="Start">
      <img src={logo} alt="HTWK Smart Driving Logo" />
    </LogoLink>
    <div>
      Wir sind das Team <em>HTWK Smart Driving</em> der{' '}
      <a href="https://www.htwk-leipzig.de" target="_blank" rel="noopener noreferrer">
        Hochschule für Technik, Wirtschaft und Kultur Leipzig
      </a>
      . Als studentische Forschungs&shy;gruppe be&shy;schäftigen wir uns mit Technologien rund um
      das auto&shy;nome Auto&shy;fahren. Seit 2014 nehmen wir am{' '}
      <a
        href="https://www.audi-autonomous-driving-cup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Audi Autonomous Driving Cup
      </a>{' '}
      (AADC) teil.
    </div>
  </StyledBio>
);

Bio.propTypes = {
  isFooter: PropTypes.bool,
};

Bio.defaultProps = {
  isFooter: false,
};

export default Bio;
