import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography';
import { getPageTitle, getRootPath } from '../utils/helper';

const Publications = (props) => {
  const rootPath = getRootPath();

  return (
    <main>
      <Helmet title={`Publikationen – ${getPageTitle(props.data)}`} />
      <h1>Publikationen</h1>
      <h2>Software</h2>
      <ul>
        <li>
          <a href={`${rootPath}files/src-aadc-2017.zip`}>Quelltext AADC 2017</a>
        </li>
        <li>
          <a href={`${rootPath}files/src-aadc-2016.zip`}>Quelltext AADC 2016</a>
        </li>
        <li>
          <a href={`${rootPath}files/src-aadc-2015.zip`}>Quelltext AADC 2015</a>
        </li>
      </ul>

      <h2>Wissenschaftliche Arbeiten</h2>
      <dl style={{ marginBottom: rhythm(1) }}>
        <dt>Fabian Freihube (2016)</dt>
        <dd>
          <a href={`${rootPath}files/ba_freihube.pdf`} target="_blank">
            Entwurf und Realisierung autonomer Fahrfunktionen in Modellfahrzeugen
          </a>
        </dd>
        <dt>Georg Jenschmischek (2016)</dt>
        <dd>
          <a href={`${rootPath}files/ma_jenschmischek.pdf`} target="_blank">
            Digitale Bildverarbeitung auf einem selbstkonstruierten Modellfahrzeug
          </a>
        </dd>
      </dl>
    </main>
  );
};

Publications.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Publications;

export const PageQuery = graphql`
  query PublicationsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

