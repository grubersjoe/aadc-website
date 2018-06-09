import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import logo from '../images/logo.svg';
import { rhythm } from '../utils/typography';

const Bio = (props) => {
  const { footer } = props;

  const Wrapper = styled('article')`
    margin-top: ${footer ? rhythm(1.75) : 0};
    margin-bottom: ${footer ? 0 : rhythm(1.75)};

    @media (min-width: 768px) {
      display: flex;
    }
  `;

  const LogoLink = styled(Link)`
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${rhythm(1)};

    @media (min-width: 768px) {
      flex: 0 0 ${rhythm(5)};
      width: auto;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: ${rhythm(1.125)};
    }
  `;

  const Logo = styled('img')`
    position: relative;
    top: ${rhythm(0.04)};
    width: 100%;
    margin: 0 auto;
  `;

  const Text = styled('p')`
    margin-bottom: 0;
  `;

  return (
    <Wrapper>
      <LogoLink to="/" title="Start">
        <Logo src={logo} alt="HTWK Smart Driving" />
      </LogoLink>
      <Text>
        Wir sind das Team <strong>HTWK Smart Driving</strong> der{' '}
        <a href="https://www.htwk-leipzig.de" target="_blank" rel="noopener noreferrer">
          Hochschule für Technik, Wirtschaft und Kultur Leipzig
        </a>. Als studentische Forschungs&shy;gruppe beschäftigen wir uns mit Technologien rund um
        das autonome Autofahren. Seit 2014 nehmen wir am{' '}
        <a
          href="https://www.audi-autonomous-driving-cup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Audi Autonomous Driving Cup
        </a>{' '}
        (AADC) teil.
      </Text>
    </Wrapper>
  );
};

Bio.propTypes = {
  footer: PropTypes.bool,
};

Bio.defaultProps = {
  footer: false,
};

export default Bio;
