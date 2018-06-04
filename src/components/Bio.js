import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import logo from '../images/logo.svg';
import { rhythm } from '../utils/typography';

const Bio = (props) => {
  const { footer } = props;

  return (
    <div
      style={{
        display: 'flex',
        marginTop: footer ? rhythm(1.5) : 0,
        marginBottom: footer ? 0 : rhythm(1.5),
      }}
    >
      <Link
        to="/"
        title="Start"
        style={{
          flex: `0 0 ${rhythm(5)}`,
          marginRight: rhythm(1.125),
        }}
      >
        <img
          src={logo}
          alt="HTWK Smart Driving"
          style={{
            position: 'relative',
            top: rhythm(0.04),
            width: '100%',
            marginBottom: 0,
          }}
        />
      </Link>

      <p style={{ marginBottom: 0 }}>
        Wir sind das Team <strong>HTWK Smart Driving</strong> der{' '}
        <a href="https://www.htwk-leipzig.de" target="_blank" rel="noopener noreferrer">
          Hochschule für Technik, Wirtschaft und Kultur Leipzig
        </a>. Als studentische Forschungs&shy;gruppe beschäftigen wir uns mit Technologien rund um
        das autonome Autofahren. Seit 2015 nehmen wir am{' '}
        <a
          href="https://www.audi-autonomous-driving-cup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Audi Autonomous Driving Cup
        </a>{' '}
        teil.
      </p>
    </div>
  );
};

Bio.propTypes = {
  footer: PropTypes.bool,
};

Bio.defaultProps = {
  footer: false,
};

export default Bio;
