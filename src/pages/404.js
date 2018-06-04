import React from 'react';
import LinkButton from '../components/LinkButton';

const NotFoundPage = () => (
  <div>
    <h1>404</h1>
    <p>Diese Seite existiert nicht.</p>
    <LinkButton to="/" primary>
      Neuigkeiten
    </LinkButton>
  </div>
);

export default NotFoundPage;
