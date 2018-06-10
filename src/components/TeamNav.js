import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import color from 'color';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/constants';

const TeamNav = () => {
  const Wrapper = styled('nav')`
    position: relative;
    display: inline-flex;
    flex-wrap: nowrap;
    margin-bottom: ${rhythm(1.5)}
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
      border-bottom: 2px solid ${color(colors.text).fade(0.9).string()};
  `;

  const TeamLink = styled(Link)`
    flex: 0 0 auto;
    padding: 0 0 0.5rem;
    transition: all 0.25s ease-in-out;
    border-bottom: 2px solid transparent;
    color: ${colors.text};
    text-align: center;

    &:hover {
      border-bottom-color: ${color(colors.text).fade(0.7).string()};
    }

    &:first-of-type {
      padding-left: 0;
    }

    & + & {
      margin-left: 1.25rem;
    }
  `;

  const activeStyle = {
    color: colors.primary,
    borderBottomColor: colors.primary,
  };

  return (
    <Wrapper>
      <TeamLink to="/team/2017" activeStyle={activeStyle}>
        Team 2018
      </TeamLink>
      <TeamLink to="/team/2016" activeStyle={activeStyle}>
        Team 2017
      </TeamLink>
      {/* <TeamLink to="/team/2015" activeStyle={activeStyle}>Team 2016</TeamLink> */}
      {/* <TeamLink to="/team/2014" activeStyle={activeStyle}>Team 2015</TeamLink> */}
    </Wrapper>
  );
};

export default TeamNav;
