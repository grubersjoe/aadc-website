import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { onPostPage } from '../utils/helper';
import Seo from '../components/Seo';
import Nav from '../components/Nav';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

const Template = props => {
  const { children, location } = props;

  const PageContainer = styled('div')`
    margin: 0 auto;
    max-width: ${rhythm(24)};
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
      {children()}
      {onPostPage(location) && <Bio footer />}
      <Footer />
    </PageContainer>
  );
};

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Template;
