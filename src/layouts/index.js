import React from 'react';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';
import { onPostPage } from '../utils/helper';
import Nav from '../components/Nav';
import Bio from '../components/Bio';

const Template = (props) => {
  const { children, location } = props;

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} 0`,
      }}
    >
      <Nav />
      {!onPostPage(location) && <Bio />}
      {children()}
      {onPostPage(location) && <Bio footer />}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Template;
