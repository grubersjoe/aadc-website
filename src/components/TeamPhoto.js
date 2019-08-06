import React from 'react';
import Image from 'gatsby-image';

const TeamPhoto = ({ img, alt }) => (
  <a href={img.publicURL} target="_blank" rel="noopener noreferrer">
    <Image fluid={img.childImageSharp.fluid} fadeIn={true} alt={alt} style={{ margin: '2rem 0' }} />
  </a>
);

export default TeamPhoto;
