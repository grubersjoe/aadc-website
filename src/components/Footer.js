import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { colors, fontSizes } from '../utils/constants';

const Wrapper = styled('footer')`
  margin-top: 2rem;
  color: ${colors.textMuted};
  font-size: ${fontSizes.small};
`;

const FooterLink = styled('a')`
  padding-bottom: 0.2rem;
  color: ${colors.textMuted};
  font-weight: 500;

  &:hover {
    color: ${colors.primary};
  }

  & + & {
    margin-left: ${rhythm(1)};
  }
`;

const Footer = () => (
  <Wrapper>
    <FooterLink
      href="https://www.htwk-leipzig.de/hochschule/kontakt/impressum/"
      target="_blank"
      rel="noopener"
    >
      Impressum
    </FooterLink>
  </Wrapper>
);

export default Footer;
