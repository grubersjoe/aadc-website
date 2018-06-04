import React from 'react';

const Publications = () => (
  <main>
    <h1>Publikationen</h1>
    <h2>Software</h2>
    <ul>
      <li><a href="https://smart-driving.htwk-leipzig.de/git/aadc/aadc-2017">Quelltext AADC 2017</a></li>
      <li><a href="https://smart-driving.htwk-leipzig.de/git/aadc/aadc-2016">Quelltext AADC 2016</a></li>
      <li><a href="https://smart-driving.htwk-leipzig.de/git/aadc/aadc-2015">Quelltext AADC 2015</a></li>
    </ul>

    <h2>Wissenschaftliche Arbeiten</h2>
    <dl>
      <dt>Fabian Freihube (2016)</dt>
      <dd>
        <a href="/files/ba_freihube.pdf">Entwurf und Realisierung autonomer Fahrfunktionen in Modellfahrzeugen</a>
      </dd>
      <dt>Georg Jenschmischek (2016)</dt>
      <dd>
        <a href="/files/ma_jenschmischek.pdf">Digitale Bildverarbeitung auf einem selbstkonstruierten Modellfahrzeug</a>
      </dd>
    </dl>
  </main>
);

export default Publications;
