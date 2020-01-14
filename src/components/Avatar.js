import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSizes } from '../utils/constants';
import fallbackAvatar from '../images/avatars/none.svg';

const Figure = styled('figure')`
  width: 100%;
  margin-bottom: 0;
`;

const Caption = styled('figcaption')`
  margin-top: 0.4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: ${fontSizes.small};
  }
`;

const Avatar = props => {
  const { img, caption, style } = props;

  const fallbackStyles = { width: '100%', marginBottom: 0 };

  return (
    <Figure style={style}>
      {img ? (
        <Image fluid={img.childImageSharp.fluid} fadeIn={true} alt={caption} />
      ) : (
        <img src={fallbackAvatar} style={fallbackStyles} />
      )}
      <Caption dangerouslySetInnerHTML={{ __html: caption }} />
    </Figure>
  );
};

Avatar.propTypes = {
  img: PropTypes.object,
  caption: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  img: null,
};

export default Avatar;
