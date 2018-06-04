import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import color from 'color';

import Link from 'gatsby-link';
import { colors } from '../utils/constants';

// TODO: extract common btn styles
const Button = styled(Link)`
  display: inline-block;
  border-radius: .25rem;
  padding: .2rem .6rem;
  border: 2px solid ${colors.secondary};
  textAlign: center;
  whiteSpace: nowrap;
  verticalAlign: middle;
  font-size: 85%;
  color: ${colors.secondary};
  transition: all .15s ease-in-out;

  ${props =>
    props.primary &&
    css`
      background-color: ${colors.secondary};
      color: white;

      &:focus {
        box-shadow: 0 0 0 0.15rem ${color(colors.secondary).lighten(0.2).alpha(0.5).string()};
      }

      &:hover {
        background-color: ${color(colors.secondary).darken(0.12).string()}
      }
    `}
`;

const LinkButton = props => <Button {...props}>{props.children}</Button>;

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkButton;
