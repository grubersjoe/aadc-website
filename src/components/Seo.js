import React from 'react';
import Helmet from 'react-helmet';

const Seo = () => (
  <Helmet>
    <meta
      name="description"
      content="Website des Studententeams HTWK Smart Driving aus Leipzig – Forschung und Entwicklung für das autonomen Autofahren."
    />
    <meta name="theme-color" content="#225e9b" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <html lang="de" />
  </Helmet>
);

export default Seo;
