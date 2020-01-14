import React from 'react';
import PropTypes from 'prop-types';
import styled, { StyleSheetManager } from 'styled-components';

import '../styles/global.scss';

import { containerWidth } from '../utils/constants';
import { rhythm } from '../utils/typography';
import { onPostPage } from '../utils/helper';

import Bio from './Bio';
import Footer from './Footer';
import Nav from './Nav';
import Seo from './Seo';

const PageContainer = styled('div')`
  margin: 0 auto;
  max-width: ${containerWidth}px;
  padding: ${rhythm(1.5)} 1.25rem;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Layout = props => {
  const { children, location } = props;

  return (
    <StyleSheetManager disableVendorPrefixes>
      <PageContainer>
        <Seo />
        <Nav />

        {!onPostPage(location) && <Bio />}

        <main>{children}</main>

        {onPostPage(location) && <Bio isFooter />}

        <Footer />
      </PageContainer>
    </StyleSheetManager>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
