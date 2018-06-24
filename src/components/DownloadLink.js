import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../utils/constants';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: ${colors.primary};
`;

const DownloadLink = props => (
  <a {...props}>
    <Icon icon={faDownload} />
    {props.children}
  </a>
);

DownloadLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DownloadLink;
