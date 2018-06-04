import React from 'react';
import PropTypes from 'prop-types';
import { getRootPath } from '../utils/helper';
import Nav from '../components/Nav';
import Bio from '../components/Bio';

import { rhythm } from '../utils/typography';

const Template = (props) => {
  const { children, location } = props;
  const onFrontpage = location.pathname === getRootPath();

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
      {!onFrontpage && <Bio footer />}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Template;
