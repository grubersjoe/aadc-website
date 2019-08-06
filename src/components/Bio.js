import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import logo from '../images/logo.svg';

const LogoLink = styled(Link)`
  display: block;
  width: 40%;
  min-width: 100px;

  @media (min-width: 768px) {
    width: auto;
    margin-right: ${rhythm(1)};
    flex: 0 0 136px;

    img {
      margin-bottom: 0;
    }
  }
`;

const StyledBio = styled.article`
  margin-top: ${props => (props.isFooter ? rhythm(2) : 0)};
  margin-bottom: ${rhythm(2)};
  hyphens: auto;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Bio = props => (
  <StyledBio isFooter={props.isFooter}>
    <LogoLink to="/">
      <img src={logo} />
    </LogoLink>
    <div>
      Wir sind das Team HTWK Smart Driving der{' '}
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
