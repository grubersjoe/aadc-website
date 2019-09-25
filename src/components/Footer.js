import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { colors, fontSizes } from '../utils/constants';

import sedeniusLogo from '../images/partners/sedenius.svg';

const Wrapper = styled('footer')`
  display: flex;
  justify-content: space-between;
  margin-top: ${rhythm(2)};
  color: ${colors.textMuted};
  font-size: ${fontSizes.small};
  font-weight: 500;
`;

const FooterLink = styled('a')`
  padding-bottom: 0.2rem;
  color: ${colors.textMuted};

  &:hover {
    color: ${colors.primary};
  }

  & + & {
    margin-left: ${rhythm(1)};
  }
`;

const Partners = styled.div`
  img {
    margin: ${rhythm(1)} 0;
    height: 54px;
  }
`;

const Footer = () => (
  <Wrapper>
    <Partners>
      Unsere Partner
      <br />
      <a href="https://www.sedenius.com/" target="_blank" rel="noopener noreferrer">
        <img src={sedeniusLogo} alt="Sedenius Engineering GmbH" />
      </a>
    </Partners>
    <FooterLink
      href="https://www.htwk-leipzig.de/hochschule/kontakt/impressum/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Impressum
    </FooterLink>
  </Wrapper>
);

export default Footer;
