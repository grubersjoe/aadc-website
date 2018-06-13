import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from 'color';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faXing } from '@fortawesome/fontawesome-free-brands';
import { rhythm } from '../utils/typography';
import { colors, fontSizes } from '../utils/constants';
import { avatarNone } from '../images/avatars';

const Avatar = (props) => {
  const { size, imgUrl, caption, offsetY } = props;
  const { website, github, xing } = props.profiles;

  const Figure = styled('figure')`
    width: 100%;
    margin-bottom: ${rhythm(1)};

    @media (min-width: 768px) {
      width: ${rhythm(size)}
      margin-right: ${rhythm(1.125)};
    }
  `;

  const Overlay = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    background-color: ${color(colors.primary).alpha(0.7).string()};
    border-radius: 0.15rem;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    font-size: 150%;

    &:hover {
      opacity: ${Object.keys(props.profiles).length ? 1 : 0};
    }

    a {
      margin: 0.5rem;
      color: white;

      &:hover {
        color: ${color('white').alpha(0.75).string()}
      }
    }
  `;

  const Image = styled('div')`
    width: 100%;
    height: calc(100vw - 2.5rem); // PageContainer has a padding-{left,right} of 1.25rem
    background-image: url(${imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ${offsetY};
    border-radius: 0.15rem;

    @media (min-width: 768px) {
      height: ${rhythm(size * (5 / 4))};
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

    a {
      color: ${colors.text};
    }

    a:hover {
      color: ${colors.secondary};
    }
  `;

  const fallbackAvatar = imgUrl.indexOf('svg') > -1;
  const captionText = fallbackAvatar ? (
    <span dangerouslySetInnerHTML={{ __html: caption }} />
  ) : (
    <a
      href={imgUrl}
      target="_blank"
      title="Foto in voller Auflösung"
      dangerouslySetInnerHTML={{ __html: caption }}
    />
  );

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
          {xing && (
            <a href={xing} title="XING" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXing} />
            </a>
          )}
        </Overlay>
      </Image>
      <Caption>{captionText}</Caption>
    </Figure>
  );
};

Avatar.propTypes = {
  imgUrl: PropTypes.string,
  caption: PropTypes.string.isRequired,
  size: PropTypes.number,
  offsetY: PropTypes.string,
  profiles: PropTypes.objectOf(PropTypes.string),
};

Avatar.defaultProps = {
  imgUrl: avatarNone,
  size: 6,
  offsetY: '10%',
  profiles: {},
};

export default Avatar;
