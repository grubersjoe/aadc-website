import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import color from 'color';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/constants';
import { onBlog } from '../utils/helper';

const Nav = () => {
  const Wrapper = styled('nav')`
    margin-bottom: ${rhythm(1.5)};
  `;

  const NavLink = styled(Link)`
    padding-bottom: 0.2rem;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    font-size: 110%;
    color: ${colors.text};

    &:hover {
      border-bottom: 2px solid${color(colors.text).fade(0.7).string()};
    }

    & + & {
      margin-left: ${rhythm(1.1)};
    }
  `;

  const activeStyle = {
    color: colors.primary,
    borderBottom: `2px solid ${colors.primary}`,
  };

  return (
    <Wrapper>
      <NavLink to="/" activeStyle={activeStyle} isActive={onBlog}>
        Neuigkeiten
      </NavLink>
      <NavLink to="/team" activeStyle={activeStyle} exact>
        Team
      </NavLink>
      <NavLink to="/publikationen" activeStyle={activeStyle} exact>
        Publikationen
      </NavLink>
    </Wrapper>
  );
};

export default Nav;
