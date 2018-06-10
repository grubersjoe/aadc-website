import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import { colors, fontSizes } from '../utils/constants';

const Wrapper = styled('footer')`
  color: ${colors.textMuted};
  font-size: ${fontSizes.small};
`;

const MutedLink = styled(Link)`
  color: ${colors.textMuted};
  font-weight: 500;
  
  &:hover {
    color: ${colors.secondary};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <MutedLink to="/impressum">
        Impressum
      </MutedLink>
    </Wrapper>
  );
};

export default Footer;
