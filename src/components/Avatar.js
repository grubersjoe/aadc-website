import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from 'color';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faXing } from '@fortawesome/fontawesome-free-brands';
import { rhythm } from '../utils/typography';
import { colors, fontSizes } from '../utils/constants';

const Avatar = (props) => {
  const { size, imgUrl, caption, offsetY } = props;
  const { website, github, xing } = props.profiles;

  const Figure = styled('figure')`
    width: ${rhythm(size)};
    margin-right: ${rhythm(1.125)};
    margin-bottom: ${rhythm(1)};
    text-align: center;
    border-radius: .2rem;
    overflow: hidden;
  `;

  const Overlay = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    background: ${color(colors.primary).alpha(0.7).string()};
    transition: opacity .3s ease-in-out;
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
    height: ${rhythm(size * (5 / 4))};
    background-image: url(${imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ${offsetY};
  `;

  const Caption = styled('figcaption')`
    padding: .4rem .6rem;
    background-color: ${color(colors.primary).fade(0.85).string()};
    font-size: ${fontSizes.small};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;


  return (
    <Figure {...props}>
      <Image>
        <Overlay>
          {
            website &&
            <a href={website} title="Website" target="_blank">
              <FontAwesomeIcon icon={faLink} />
            </a>
          }
          {
            github &&
            <a href={github} title="GitHub" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          }
          {
            xing &&
            <a href={xing} title="Xing" target="_blank">
              <FontAwesomeIcon icon={faXing} />
            </a>
          }
        </Overlay>
      </Image>
      <Caption>
        <a
          href={imgUrl}
          target="_blank"
          title="Bild in voller Auflösung"
          dangerouslySetInnerHTML={{ __html: caption }}
          style={{ color: colors.text }}
        />
      </Caption>
    </Figure>
  );
};


Avatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  size: PropTypes.number,
  offsetY: PropTypes.string,
  profiles: PropTypes.objectOf(PropTypes.string),
};

Avatar.defaultProps = {
  size: 6,
  offsetY: '10%',
  profiles: {},
};


export default Avatar;
