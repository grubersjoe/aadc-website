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
  padding-bottom: 0.2rem;
  color: ${colors.textMuted};
  font-weight: 500;
  
  &:hover {
    color: ${colors.secondary};
  }
`;

const activeStyle = {
  color: colors.primary,
  borderBottom: `2px solid ${colors.primary}`,
};

const Footer = () => (
  <Wrapper>
    <MutedLink
      to="/impressum"
      activeStyle={activeStyle}
      isActive={(match, location) => location.pathname.indexOf('impressum') >= 0}
    >
      Impressum
    </MutedLink>
  </Wrapper>
);

export default Footer;
