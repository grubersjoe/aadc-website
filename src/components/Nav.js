import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from '../utils/constants';
import { onPostPage } from '../utils/helper';
import { rhythm } from '../utils/typography';

const StyledNav = styled.nav`
  display: flex;
  margin-bottom: ${rhythm(1.5)};

  a {
    padding-bottom: 0.16rem;
    border-bottom: 2px solid transparent;
    transition: all 0.25s ease-in-out;
    color: ${colors.text};

    &:hover {
      color: ${colors.primary};
    }

    &.active {
      border-bottom: 2px solid ${colors.primary};
    }
  }

  a + a {
    margin-left: 1.5rem;
  }
`;

const Nav = () => {
  const isPartiallyActive = ({ location }) => {
    return location.pathname === '/' || onPostPage(location) ? { className: 'active' } : {};
  };

  return (
    <StyledNav>
      <Link to="/" getProps={isPartiallyActive}>
        Neuigkeiten
      </Link>
      <Link to="/team" activeClassName="active" partiallyActive={true}>
        Team
      </Link>
      <Link to="/publikationen" activeClassName="active" partiallyActive={true}>
        Publikationen
      </Link>
    </StyledNav>
  );
};

export default Nav;
