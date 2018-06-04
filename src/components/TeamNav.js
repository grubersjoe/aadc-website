import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import color from 'color';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/constants';

const TeamNav = () => {
  const NavbarLink = styled(Link)`
    display: block;
    padding: 0.6rem 0;
    border-bottom: 2px solid ${color(colors.text).fade(0.9).string()};
  `;

  const activeStyle = {
    fontWeight: 600,
    color: colors.primary,
    // color: 'white',
  };

  return (
    <nav style={{ flex: '0 0 10rem', marginRight: '1.5rem' }}>
      <NavbarLink to="/team/2017" activeStyle={activeStyle}>AADC 2017</NavbarLink>
      <NavbarLink to="/team/2016" activeStyle={activeStyle}>AADC 2016</NavbarLink>
      <NavbarLink to="/team/2015" activeStyle={activeStyle}>AADC 2015</NavbarLink>
    </nav>
  );
};

export default TeamNav;
