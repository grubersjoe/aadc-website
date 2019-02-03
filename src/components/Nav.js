import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { colors } from '../utils/constants';
import { blogActive, teamActive } from '../utils/helper';
import { rhythm } from '../utils/typography';

const Nav = () => {
  const Wrapper = styled.nav`
    margin-bottom: ${rhythm(1.75)};
  `;

  const NavLink = styled(Link)`
    padding-bottom: 0.2rem;
    border-bottom: 2px solid transparent;
    transition: all 0.25s ease-in-out;
    color: ${colors.text};

    &:hover {
      color: ${colors.primary};
    }

    & + & {
      margin-left: 2rem;
    }
  `;

  const activeStyle = {
    color: colors.primary,
    borderBottom: `2px solid ${colors.primary}`,
  };

  return (
    <Wrapper>
      <NavLink to="/" activeStyle={activeStyle} isActive={blogActive}>
        Neuigkeiten
      </NavLink>
      <NavLink to="/team/2018" activeStyle={activeStyle} isActive={teamActive}>
        Team
      </NavLink>
      <NavLink to="/publikationen" activeStyle={activeStyle} exact>
        Publikationen
      </NavLink>
    </Wrapper>
  );
};

export default Nav;
