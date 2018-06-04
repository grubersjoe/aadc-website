import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import color from 'color';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/constants';

const TeamNav = () => {
  const Wrapper = styled('nav')`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: ${rhythm(1.5)}
  `;

  const TeamLink = styled(Link)`
    flex: 0 0 auto;
    padding: 0 0.5rem 0.5rem 0.5rem;
    border-bottom: 2px solid ${color(colors.text).fade(0.9).string()};
    transition: all 0.25s ease-in-out;
    color: ${colors.text};
    text-align: center;

    &:hover {
      border-bottom-color: ${color(colors.text).fade(0.7).string()};
    }

    &:first-of-type {
      padding-left: 0;
    }
  `;

  const activeStyle = {
    color: colors.primary,
    borderBottomColor: colors.primary,
  };

  return (
    <Wrapper>
      <TeamLink to="/team/2017" activeStyle={activeStyle}>Team 2017</TeamLink>
      <TeamLink to="/team/2016" activeStyle={activeStyle}>Team 2016</TeamLink>
      <TeamLink to="/team/2015" activeStyle={activeStyle}>Team 2015</TeamLink>
      <TeamLink to="/team/2014" activeStyle={activeStyle}>Team 2014</TeamLink>
    </Wrapper>
  );
};

export default TeamNav;
