import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import logo from './logo.svg';
import { rhythm } from '../utils/typography';

const Bio = () => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(1.5),
    }}
  >
    <Link
      to="/"
      title="Start"
      style={{
        display: 'block',
        marginRight: rhythm(1.25),
      }}
    >
      <img
        src={logo}
        alt="HTWK Smart Driving"
        style={{
          width: rhythm(22),
          height: 'auto',
          position: 'relative',
          top: rhythm(0.06),
          marginBottom: 0,
        }}
      />
    </Link>

    <p
      style={{
        marginBottom: 0,
      }}
    >
      Wir sind das Team <strong>HTWK Smart Driving</strong> der{' '}
      <a href="https://www.htwk-leipzig.de" target="_blank">
        Hoch&shy;schule für Technik, Wirtschaft und Kultur Leipzig
      </a>. Als studen&shy;tische Forschungs&shy;gruppe beschäftigen wir uns mit Technologien rund
      um das autonome Autofahren. Seit 2015 nehmen wir am{' '}
      <a href="https://www.audi-autonomous-driving-cup.com" target="blank">
        Audi Autonomous Driving Cup
      </a>{' '}
      teil.
    </p>
  </div>
);

export default Bio;
