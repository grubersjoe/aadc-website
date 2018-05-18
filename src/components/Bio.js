import React from 'react';
import Link from 'gatsby-link';

import profilePic from './logo.svg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.5),
        }}
      >
        <Link
          to={'/'}
          title={'Start'}
          style={{
            display: 'block',
            marginRight: rhythm(1),
          }}
        >
          <img
            src={profilePic}
            alt={'HTWK Smart Driving'}
            style={{
              width: rhythm(30),
              height: 'auto',
              marginBottom: 0,
            }}
          />
        </Link>

        <p style={{ marginBottom: 0 }}>
          Hey! Willkommen auf der Website des Teams <strong>HTWK Smart Driving</strong> der Hochschule für Technik,
          Wirtschaft und Kultur Leipzig. Wir sind eine studentische Forschungs&shy;gruppe, die sich mit Technologien
          rund ums autonome Autofahren beschäftigt. Jedes Jahr nehmen wir am Audi Autonomous Driving Cup teil.
        </p>
      </div>
    )
  }
}

export default Bio
