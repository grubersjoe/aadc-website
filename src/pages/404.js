import React from 'react';
import Helmet from 'react-helmet';
import LinkButton from '../components/LinkButton';

const NotFoundPage = () => (
  <main>
    <Helmet title="#404" />
    <h1>404</h1>
    <p>Diese Seite existiert nicht.</p>
    <LinkButton to="/" primary>
      Neuigkeiten
    </LinkButton>
  </main>
);

export default NotFoundPage;
