import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../utils/constants';

const Link = styled.a`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-top: 0.25rem;
  margin-right: 0.5rem;
  font-size: 90%;
  color: ${colors.primary};
`;

const DownloadLink = props => (
  <Link {...props}>
    <Icon icon={faDownload} />
    {props.children}
  </Link>
);

DownloadLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DownloadLink;
