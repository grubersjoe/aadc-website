import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';
import { getPageTitle, getRootPath } from '../utils/helper';
import DownloadLink from '../components/DownloadLink';

const Publications = (props) => {
  const rootPath = getRootPath();

  return (
    <main>
      <Helmet title={`Publikationen – ${getPageTitle(props.data)}`}>
        <meta
          name="description"
          content="Website des Studententeams HTWK Smart Driving aus Leipzig – Publikationen und Forschungsergebnisse zum autonomen Autofahren."
        />
      </Helmet>

      <h1>Publikationen</h1>

      <section>
        <header>
          <h2>Software</h2>
        </header>
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
      </section>


      <section>
        <header>
          <h2>Wissenschaftliche Arbeiten</h2>
        </header>
        <dl style={{ marginBottom: rhythm(1) }}>
          <dt>Michael Horn: Masterarbeit (2018)</dt>
          <dd>
            <DownloadLink href={`${rootPath}files/ma_horn.pdf`} target="_blank">
              3D-Objekt-Verfolgung mit Stixel-Darstellung in autonomen Fahrzeugen
            </DownloadLink>
          </dd>
          <dt>Fabian Freihube: Bachelorarbeit (2016)</dt>
          <dd>
            <DownloadLink href={`${rootPath}files/ba_freihube.pdf`} target="_blank">
              Entwurf und Realisierung autonomer Fahrfunktionen in Modellfahrzeugen
            </DownloadLink>
          </dd>
          <dt>Georg Jenschmischek: Masterarbeit (2016)</dt>
          <dd>
            <DownloadLink href={`${rootPath}files/ma_jenschmischek.pdf`} target="_blank">
              Digitale Bildverarbeitung auf einem selbstkonstruierten Modellfahrzeug
            </DownloadLink>
          </dd>
        </dl>
      </section>
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

