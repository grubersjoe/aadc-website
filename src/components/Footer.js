import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { colors, fontSizes } from '../utils/constants';

const Wrapper = styled('footer')`
  color: ${colors.textMuted};
  font-size: ${fontSizes.small};
`;

const Link = styled('a')`
  padding-bottom: 0.2rem;
  color: ${colors.textMuted};
  font-weight: 500;

  &:hover {
    color: ${colors.secondary};
  }
`;

const Footer = () => (
  <Wrapper>
    <Link href="https://www.htwk-leipzig.de/hochschule/kontakt/impressum/" target="_blank">
      Impressum
    </Link>
  </Wrapper>
);

export default Footer;
