import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const NotFoundPage = props => (
  <Layout location={props.location}>
    <Helmet title="#404" />
    <h1>404</h1>
    <p>Diese Seite existiert nicht.</p>
  </Layout>
);

export default NotFoundPage;
