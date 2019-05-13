import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import color from 'color';

import { colors } from '../utils/constants';
import { rhythm } from '../utils/typography';

const Nav = styled.nav`
  position: relative;
  display: inline-flex;
  flex-wrap: nowrap;
  margin-top: ${rhythm(0.25)};
  margin-bottom: ${rhythm(1.25)};
  overflow-x: auto;

  /**
    * This complicated construct is necessary to make the TeamLinks scrollable
    * in xs view. Their border is not drawn correctly, because of the hidden
    * overflow.
    */
  &:after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    border-bottom: 2px solid
      ${color(colors.text)
        .fade(0.9)
        .string()};
  }

  a {
    flex: 0 0 auto;
    padding: 0 0 0.5rem;
    transition: all 0.25s ease-in-out;
    border-bottom: 2px solid transparent;
    color: ${colors.text};
    text-align: center;

    &:hover {
      border-bottom-color: ${color(colors.text)
        .fade(0.7)
        .string()};
    }

    &:first-of-type {
      padding-left: 0;
    }

    &.active {
      color: ${colors.primary};
      border-bottom-color: ${colors.primary};
    }
  }

  a + a {
    margin-left: 1.25rem;
  }
`;

const TeamNav = () => (
  <Nav>
    <Link to="/team" activeClassName="active">
      Team 2018
    </Link>
    <Link to="/team/2017" activeClassName="active">
      Team 2017
    </Link>
    <Link to="/team/2016" activeClassName="active">
      Team 2016
    </Link>
    <Link to="/team/2015" activeClassName="active">
      Team 2015
    </Link>
  </Nav>
);

export default TeamNav;
