import React from 'react';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <main>
    <Helmet title="#404" />
    <h1>404</h1>
    <p>Diese Seite existiert nicht.</p>
  </main>
);

export default NotFoundPage;
