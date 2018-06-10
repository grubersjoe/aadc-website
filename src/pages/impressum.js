import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography';
import { getPageTitle } from '../utils/helper';

const About = (props) => {
  return (
    <main>
      <Helmet title={`Impressum – ${getPageTitle(props.data)}`} />
      <h1>Impressum</h1>
      <h4>Angaben gemäß § 5 TMG</h4>
      <p>
        Jonathan Gruber<br />
        Karl-Liebknecht-Straße 9<br />
        04107 Leipzig
      </p>

      <h4>Kontakt</h4>
      <p>
        E-Mail: <a href="mailto:jonathan.gruber@stud.htwk-leipzig.de">jonathan.gruber@stud.htwk-leipzig.de</a>
      </p>
    </main>
  );
};

About.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default About;

export const PageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

