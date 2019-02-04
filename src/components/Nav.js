import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from '../utils/constants';
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
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: 'active' } : null;
  };

  return (
    <Wrapper>
      <Link to="/" activeClassName="active">
        Neuigkeiten
      </Link>
      <Link to="/team/2018" getProps={isPartiallyActive}>
        Team
      </Link>
      <Link to="/publikationen" getProps={isPartiallyActive}>
        Publikationen
      </Link>
    </Wrapper>
  );
};

export default Nav;
