import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import color from 'color';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/constants';

const Avatar = (props) => {
  const { size, imgUrl, caption, offsetY } = props;

  const Figure = styled('figure') `
    width: ${rhythm(size)};
    margin-right: ${rhythm(1.125)};
    margin-bottom: ${rhythm(1)};
    text-align: center;
  `;

  const Image = styled('div') `
    width: 100%;
    height: ${rhythm(size * 5 / 4)};
    border-radius: .4rem;
    background-image: url(${imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ${offsetY};
  `;


  const Caption = styled('figcaption') `
    margin-top: .4rem;
    line-height: 1.2;
  `;

  return (
    <Figure {...props}>
      <a href={imgUrl} target="_blank">
        <Image />
      </a>
      <Caption>
        <small dangerouslySetInnerHTML={{ __html: caption }} />
      </Caption>
    </Figure>
  );
};


Avatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  size: PropTypes.number,
  offsetY: PropTypes.string,
};

Avatar.defaultProps = {
  size: 5,
  offsetY: '10%',
};


export default Avatar;
