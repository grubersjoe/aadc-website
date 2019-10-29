import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../styles/global.scss';

import { containerWidth } from '../utils/constants';
import { rhythm } from '../utils/typography';
import { onPostPage } from '../utils/helper';

import Seo from './Seo';
import Nav from './Nav';
import Bio from './Bio';
import Footer from './Footer';

const Layout = props => {
  const { children, location } = props;

  const PageContainer = styled('div')`
    margin: 0 auto;
    max-width: ${containerWidth}px;
    padding: ${rhythm(1.5)} 1.25rem;

    @media (min-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  `;

  return (
    <PageContainer>
      <Seo />
      <Nav />

      {!onPostPage(location) && <Bio />}

      <main>{children}</main>

      {onPostPage(location) && <Bio isFooter />}

      <Footer />
    </PageContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
