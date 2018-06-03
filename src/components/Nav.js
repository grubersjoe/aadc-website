import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import color from 'color';
import { rhythm } from '../utils/typography';
import { colorPrimary, colorText } from '../utils/constants';

const Nav = () => {
  const Wrapper = styled('nav')`
    margin-bottom: ${rhythm(2)};
  `;

  const NavLink = styled(Link)`
    padding-bottom: 0.2rem;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    font-size: 110%;
    color: ${color(colorText)
    .fade(0.3)
    .string()};
    color: ${colorText};

    &:hover {
      border-bottom: 2px solid
        ${color(colorText)
    .fade(0.7)
    .string()};
    }

    & + & {
      margin-left: ${rhythm(1.1)};
    }
  `;

  const activeStyle = {
    color: colorPrimary,
    borderBottom: `2px solid ${colorPrimary}`,
  };

  const onBlog = (match, location) => {
    const blogPageRegex = /^\/\d{4}\/\d{2}\/.+$/;
    return location.pathname === '/' || blogPageRegex.test(location.pathname);
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
