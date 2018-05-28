import React from 'react';
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
          width: rhythm(34),
          height: 'auto',
          marginBottom: 0,
        }}
      />
    </Link>

    <p style={{ marginBottom: 0, fontSize: '110%' }}>
      Wir sind das Team <strong>HTWK Smart Driving</strong> der{' '}
      <a href="https://www.htwk-leipzig.de" target="_blank">
        Hochschule für Technik, Wirtschaft und Kultur Leipzig
      </a>. Als studentische Forschungs&shy;gruppe beschäftigen wir uns mit Technologien rund
      um das autonome Autofahren. Seit 2016 nehmen wir am{' '}
      <a href="https://www.audi-autonomous-driving-cup.com" target="blank">
        Audi Autonomous Driving Cup
      </a>{' '}
      teil.
    </p>
  </div>
);

export default Bio;
