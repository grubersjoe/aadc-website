import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from '../utils/constants';
import { onPostPage } from '../utils/helper';
import { rhythm } from '../utils/typography';

const Wrapper = styled.nav`
  margin-bottom: ${rhythm(1.75)};

  a {
    padding-bottom: 0.2rem;
    border-bottom: 2px solid transparent;
    transition: all 0.25s ease-in-out;
    color: ${colors.text};

    &:hover {
      color: ${colors.primary};
    }

    &.active {
      color: ${colors.primary};
      border-bottom: 2px solid ${colors.primary};
    }
  }

  a + a {
    margin-left: 2rem;
  }
`;

const Nav = () => {
  const isPartiallyActive = ({ location }) => {
    return location.pathname === '/' || onPostPage(location) ? { className: 'active' } : {};
  };

  return (
    <Wrapper>
      <Link to="/" getProps={isPartiallyActive}>
        Neuigkeiten
      </Link>
      <Link to="/team" activeClassName="active" partiallyActive={true}>
        Team
      </Link>
      <Link to="/publikationen" activeClassName="active" partiallyActive={true}>
        Publikationen
      </Link>
    </Wrapper>
  );
};

export default Nav;
