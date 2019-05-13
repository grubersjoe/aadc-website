import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from 'color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { containerWidth, colors, fontSizes } from '../utils/constants';
import { avatarNone } from '../images/avatars';

const Avatar = props => {
  const { imgUrl, caption, offsetY, profiles } = props;
  const { website, github } = profiles;

  const Figure = styled('figure')`
    width: 100%;
    margin-bottom: 0;
  `;

  const Overlay = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    background-color: ${color(colors.primary)
      .alpha(0.7)
      .string()};
    border-radius: 0.15rem;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    font-size: 150%;

    &:hover {
      opacity: ${Object.keys(profiles).length ? 1 : 0};
    }

    a {
      margin: 0.5rem;
      color: white;

      &:hover {
        color: ${color('white')
          .alpha(0.75)
          .string()};
      }
    }
  `;

  const Image = styled('div')`
    width: 100%;
    height: calc(
      (100vw - 1.25rem - 2.5rem) / 2 * 5 / 4
    ); /* 1.25rem grid-gap and 2.5rem page container padding */
    background: url(${imgUrl}) no-repeat center ${offsetY};
    background-size: cover;
    border-radius: 0.15rem;

    @media (min-width: 768px) {
      height: calc((${containerWidth}px - 3rem) / 3 * 5 / 4); /* 3rem grid-gap */
    }
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

  return (
    <Figure {...props}>
      <Image>
        <Overlay>
          {website && (
            <a href={website} title="Website" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>
          )}
          {github && (
            <a href={github} title="GitHub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </Overlay>
      </Image>
      <Caption dangerouslySetInnerHTML={{ __html: caption }} />
    </Figure>
  );
};

Avatar.propTypes = {
  imgUrl: PropTypes.string,
  caption: PropTypes.string.isRequired,
  offsetY: PropTypes.string,
  profiles: PropTypes.objectOf(PropTypes.string),
};

Avatar.defaultProps = {
  imgUrl: avatarNone,
  offsetY: '0',
  profiles: {},
};

export default Avatar;
