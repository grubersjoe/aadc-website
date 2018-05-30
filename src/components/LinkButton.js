import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { colorPrimary, colorSecondary } from '../utils/constants';

const Button = styled(Link)`
  display: inline-block;
  border-radius: .2rem;
  padding: .2rem .6rem;
  border: 2px solid ${colorPrimary};
  color: ${colorPrimary};
  background-color: transparent;
  transition: background-color .2s ease-in-out;
 
  // &:hover {
  //   background-color: ${colorSecondary};
  // }

  ${props =>
    props.primary &&
    css`
      background: ${colorPrimary};
      color: white;
    `}
`;

const LinkButton = props => <Button {...props}>{props.children}</Button>;

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkButton;
