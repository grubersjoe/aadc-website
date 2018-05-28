import React from 'react';
import PropTypes from 'prop-types';
import Bio from '../components/Bio';

import { rhythm } from '../utils/typography';

const Template = (props) => {
  const { children } = props;

  // let rootPath = `/`;
  // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
  //   rootPath = __PATH_PREFIX__ + `/`
  // }

  // if (location.pathname !== rootPath)

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(2)} 0`,
      }}
    >
      <Bio large />
      {children()}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Template;
