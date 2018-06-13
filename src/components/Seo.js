import React from 'react';
import Helmet from 'react-helmet';

const Seo = () => (
  <Helmet>
    <meta
      name="description"
      content="Website des Studententeams HTWK Smart Driving der Hochschule für Technik, Wirtschaft und Kultur Leipzig. Forschung Entwicklung für das autonome Autofahren."
    />
    <meta name="theme-color" content="#225e9b" />
    <html lang="de" />
  </Helmet>
);

export default Seo;

