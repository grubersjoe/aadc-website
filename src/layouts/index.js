import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Bio from '../components/Bio';

import { rhythm } from '../utils/typography';

const Template = (props) => {
  const { children, location } = props;

  let rootPath = '/';
  if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
    rootPath = `${__PATH_PREFIX__}/`;
  }

  const onFrontpage = location.pathname === rootPath;

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(2)} 0`,
      }}
    >
      <Nav />
      {onFrontpage && <Bio />}
      {children()}
      {!onFrontpage && <Bio />}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Template;
