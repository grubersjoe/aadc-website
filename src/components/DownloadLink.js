import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../utils/constants';

const Link = styled.a`
  display: flex;
  line-height: 1.2;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-top: 3px;
  margin-right: 0.5rem;
  font-size: 85%;
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
