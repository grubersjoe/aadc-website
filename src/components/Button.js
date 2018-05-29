import React from 'react';
import PropTypes from 'prop-types';
import { colorSecondary } from '../utils/constants';

const Button = (props) => (
  <button
    style={{
      display: 'inline-block',
      margin: 0,
      padding: '.2rem .6rem',
      backgroundColor: colorSecondary,
      borderColor: 'hsl(211, 100%, 50%)',
      borderRadius: '0.25rem',
      color: '#fff',
      cursor: 'pointer',
      lineHeight: 1.5,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      border: '1px solid hsla(0, 0%, 0%, 0)',
      outline: 'none',
      transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    }}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
