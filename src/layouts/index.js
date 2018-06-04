import React from 'react';
import PropTypes from 'prop-types';
import { isSubpage } from '../utils/helper';
import Nav from '../components/Nav';
import Bio from '../components/Bio';

import { rhythm } from '../utils/typography';

const Template = (props) => {
  const { children, location } = props;
  const onSubpage = isSubpage(location);

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1)} 0`,
      }}
    >
      <Nav />
      {!onSubpage && <Bio />}
      {children()}
      {onSubpage && <Bio footer />}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Template;
