import React from 'react';
import PropTypes from 'prop-types';
import Bio from '../components/Bio';

import { rhythm } from '../utils/typography';

const Template = (props) => {
  const { children, location } = props;
  const onFrontpage = location.pathname === '/';

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(2)} 0`,
      }}
    >
      {onFrontpage && <Bio />}
      {children()}
      {!onFrontpage && <Bio />}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Template;
